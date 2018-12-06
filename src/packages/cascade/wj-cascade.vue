<template>
  <div class="wj-select"
    @click.stop="handleToggleMenu()">
    <span @click.stop="handleToggleMenu();checkPosition($event);"
      :class="{active: isShow}">{{currentOption.label || '请选择'}}
        <i class="caret"></i>
    </span>

    <input
      v-bind:value="value"
      v-on:input="changeValue">
    <cascade :style="{top:top+'px',left:left+'px',height:height,'overflow-y':scrollY}" v-show="isShow" @input="changeValue" :options="options"></cascade>
  </div>
</template>

<script>
import cascade from './cascade.vue'
export default {
  components:{cascade},
  name: 'WjCascade',
  props: {
    label: [String, Number],
    value: [String, Number],
    options: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      height: 'auto',
      scrollY: 'hidden',
      isShow: false,
      currentOption: {},
      top: 0,
      left: 0,
      scrollTop: '',
      cascadeTimer: '',//当点击一个select，其它的要隐藏
      e:'',//当前被点击的事件e
    }
  },
  methods: {
    handleScroll(e) {
      if (('UL'==e.target.tagName) && ('wj-cascade-menu'==e.target.className)) {
        return;
      }
      if (this.scrollTop) {
        this.top-=e.target.scrollTop-this.scrollTop
      }
      this.scrollTop=e.target.scrollTop
    },
    checkPosition(e) {
      this.left=e.x-e.offsetX-e.target.offsetLeft
      this.top=e.y-e.offsetY+20-e.target.offsetTop
      var h=document.documentElement.clientHeight || document.body.clientHeight
      var distance=h-(e.y-e.offsetY)
      var optionLen=this.options&&this.options.length
      if (optionLen) {
        this.height='auto'
        this.scrollY='visible'
        if (optionLen*34>h) {
          this.height=h-10+'px'
          this.scrollY='scroll'
          this.top=0
        } else if (optionLen*34>distance) {
          this.top=h-optionLen*34-10
        }
      }
    },
    handleToggleMenu(flag) {
      this.isShow = (flag === false) ? false : !this.isShow;
      if (this.isShow) {
        this.cascadeTimer=(new Date()).valueOf()
        this.$store.state.cascadeTimer=this.cascadeTimer
      }
    },
    hideMenu(e) {
      if (this.isShow === false) return;
      this.handleToggleMenu(false);
    },
    changeValue(opts) {
      this.currentOption=Object.assign({},opts)
      this.$emit('input', opts.value);
      this.isShow=false;
    },
    findCurrentOption(options,val){
      options.map((elem, index) => {
        if (val==elem.value) {
          this.currentOption=Object.assign({},elem)
        }else if (elem.children) {
          this.findCurrentOption(elem.children,val)
        }
      })
    }
  },
  watch:{
    value(val){
      this.findCurrentOption(this.options,val)
    },
    '$store.state.cascadeTimer'(val){
      console.log(val);
      if (val!=this.cascadeTimer) {
        this.isShow=false
      }
      
    },
  },
  mounted() {
    document.addEventListener('click', this.hideMenu);
    window.addEventListener('scroll', this.handleScroll, true);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideMenu);
  }
}
</script>

<style lang="scss">
.wj-select {
  width: 200px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  background: white;

  span {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border: solid 1px #d2d2d2;
    padding-left: 10px;
    box-sizing: border-box;
    color: #666;
    position: relative;

    .caret {
      width: 0;
      height: 0;
      border-left: 8px solid rgba(0, 0, 0, 0);
      border-right: 8px solid rgba(0, 0, 0, 0);
      border-top: 6px solid #999; 
      display: inline-block;
      position: absolute;
      right: 10px;
      transition: 200ms linear;
      transform: rotate(0);
      z-index: 0;
    }

    &.active {
      border-color: #ff493f;

      .caret {
        transform: rotate(-180deg);
      }
    }
  }

  input {
    outline: none;
    display: none;
  }
}
.wj-select>ul {
  border: 1px solid #eee;
  cursor: pointer;
  margin: 10px 0 0; 
  padding: 0px;
  border-radius: 4px;
  color: #666;
  position: fixed;
  top: 36px;
  left: 0;
  // width: 100%;
  background-color: #fff; 
  z-index: 99;
  overflow: visible;
  &::before {
    width: 0;
    height: 0;
    content: '';
    display: inline-block;
    position: absolute;
    top: -9px;
    left: 10px;
    border-left: 10px solid rgba(0, 0, 0, 0);
    border-right: 10px solid rgba(0, 0, 0, 0);
    border-bottom: 8px solid #eee;
  }
}
.wj-select ul li {
  list-style: none;
  line-height: 30px;
  padding-left: 10px;

  &:hover {
    background-color: #eee;
  }
}
</style>


