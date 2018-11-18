<template>
    <ul class="wj-cascade-menu">
      	<li v-for="(option,index) in options" :key="option.value" @click.stop="handleSelect(option)" @mouseenter="isShow=index;" @mouseleave="isShow=-1;" class="wj-cascade-item" :class="option.children?'wj-cascade-item-extensible':''">
      		{{option.label}}
      		 <!-- -->
        	<cascade v-show="isShow==index" @input="changeValue" v-if="option.children" :options="option.children"></cascade>
    	</li>
    </ul>
</template>

<script>
export default{
	name:'cascade',
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
	data(){
		return{
      		isShow: -1,
		}
	},
	methods:{
	    handleSelect(opts) {
	      this.changeValue(opts);
	    },
	    changeValue(opts) {
	      this.$emit('input', opts);
	    },
	}
}
</script>
<style>
	
@font-face {
  	font-family: 'element-icons';
  	src: url('../fonts/element-icons.woff'),url('../fonts/element-icons.ttf');
  	font-weight: normal;
  	font-style: normal;
}
</style>
<style lang="scss">
.wj-cascade-menu {
    display: inline-block;
    vertical-align: top;
    overflow: visible;
    border-right: 1px solid #e4e7ed;
    background-color: #fff;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-width: 160px;
        position: absolute;
    left: 100%;top:0;
    .wj-cascade-item {
	    font-size: 14px;
	    padding: 8px 20px;
	    position: relative;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #606266;
	    height: 34px;
	    line-height: 1.5;
	    box-sizing: border-box;
	    cursor: pointer;
	    outline: none;
	}
	.wj-cascade-item-extensible:after {
	    font-family: 'element-icons';
	    content: "\E604";
	    font-size: 14px;
	    color: #bfcbd9;
	    position: absolute;
	    right: 15px;
	}
}
</style>