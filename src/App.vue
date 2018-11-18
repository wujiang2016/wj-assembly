<template>
  <div id="app">
    <div class="wj-item">
      <label>Title:</label> 
      <wj-hello-world :color="color" :msg="msg"></wj-hello-world>
    </div>

    <div class="wj-item">
      <label>Button:</label> 
      <wj-button class="wj-btn" @click="onClick">确定</wj-button>
      <wj-button class="wj-btn" @click="onClick" bgcolor="#409eff" color="#fff">确定</wj-button>
      <wj-button class="wj-btn" @click="onClick" bgcolor="#67c23a" color="#fff">成功</wj-button>
      <wj-button class="wj-btn" @click="onClick" bgcolor="#e6a23c" color="#fff">警告</wj-button>
      <wj-button class="wj-btn" @click="onClick" bgcolor="#f56c6c" color="#fff">危险</wj-button>
    </div>
    
    <div class="wj-item">
      <label>Select: </label>
      <wj-cascade 
        class="wj-cascade"
        label="label"
        value="value"
        v-model="selectValue"
        :options="options">
      </wj-cascade>
      <!-- <wj-select 
        class="wj-select"
        label="label"
        value="value"
        v-model="selectValue"
        :options="options">
      </wj-select> -->
    </div>

    <div class="wj-item">
      <label>Input: </label>
      <wj-input
      v-model="input1"
      placeholder="请输入信息">
      </wj-input>

      <wj-input
        v-model="input2"
        placeholder="请输入信息">
      </wj-input>

      <wj-input
        placeholder="输入框禁用"
        :disabled="inputDisabled">
      </wj-input>
    </div>

    <div class="wj-item">
      <label>Switch: </label>

      <wj-switch
      v-model="lightSwitch">开关(开):</wj-switch>

      <wj-switch
      v-model="switchLight">开关(关):</wj-switch>
      <div>
        <label>Switch: </label>
      </div>
    </div>
    
    <wj-button class="wj-btn" @click="handlePrint">打印选项值</wj-button>
  </div>  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // HelloWorld
      msg: 'Welcome to wj UI!',
      color: 'red',
      // Select
      selectValue: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
          children:[
            {
              value: '选项1-1',
              label: '双皮奶',
                children:[
                  {
                    value: '选项1-1-1',
                    label: '双皮奶'
                  }, {
                    value: '选项1-1-2',
                    label: '蚵仔煎'
                  }, {
                    value: '选项1-1-3',
                    label: '龙须面'
                  }
                ]
            }, {
              value: '选项1-2',
              label: '蚵仔煎',
                children:[
                  {
                    value: '选项1-2-1',
                    label: '双皮奶'
                  }, {
                    value: '选项1-2-2',
                    label: '蚵仔煎'
                  }, {
                    value: '选项1-2-3',
                    label: '龙须面'
                  }
                ]
            }, {
              value: '选项1-3',
              label: '龙须面',
                children:[
                  {
                    value: '选项1-3-1',
                    label: '双皮奶'
                  }, {
                    value: '选项1-3-2',
                    label: '蚵仔煎'
                  }, {
                    value: '选项1-3-3',
                    label: '龙须面'
                  }
                ]
            }
          ]
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }
      ],
      // input
      input1: '',
      input2: '这是默认值',
      inputDisabled: true,
      // switch
      lightSwitch: false,
      switchLight: true
    }
  },
  methods: {
    onClick: function (e) {
      console.log('click', e);
    },
    handlePrint() {
      console.log('selectValue', this.selectValue);
      console.log('input1:', this.input1);
      console.log('input2:', this.input2);
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关：', newValue),
    selectValue(val){
      console.log(val);
    }
  }
}
</script>

<style lang="scss">
.wj-cascade, .wj-select, .wj-btn, .wj-switch, .wj-input {
  margin: 10px 6px;
}
.wj-item {
  display: flex;
  align-items: center;

  label {
    width: 100px;
    display: inline-block;
  }
}
</style>
