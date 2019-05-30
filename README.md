# wj-assembly

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install --save-dev wj-assembly

# main.js adds blow code
import WjAssembly from "wj-assembly";
Vue.use(WjAssembly);

# wj-cascade use method
<template>
  <div class="about">
    <wj-cascade v-model="target4" :options="quartFreq"></wj-cascade>
  </div>
</template>
<script>
export default {
  data(){
  	return {
    	target4:"",
  		quartFreq:[
    		{
    			label:'二季度',
    			value:2,
    			children:[
					{
						label:'五月',
		    			value:'2-2',
		    			children:[
							{
								label:'一号',
				    			value:'2-2-1',
							},
							{
								label:'二号',
				    			value:'2-2-2',
							},
							{
								label:'三号',
				    			value:'2-2-3',
							}
		    			]
					}
    			]
    		}
    	]
  	}
  }
};
</script>
```

For detailed explanation on how things work, consult the [docs for wj-assembly](https://github.com/wujiang2016/wj-assembly).
