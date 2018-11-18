import HelloWorld from './packages/hello-world/index.js';
import WjButton from './packages/button/index.js';
import WjSelect from './packages/select/index.js';
import WjInput from './packages/input/index.js';
import WjSwitch from './packages/switch/index.js';
import WjCascade from './packages/cascade/index.js';

const components = [
  HelloWorld,
  WjButton,
  WjSelect,
  WjInput,
  WjCascade,
  WjSwitch
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  HelloWorld,
  WjButton,
  WjSelect,
  WjInput,
  WjCascade,
  WjSwitch
}