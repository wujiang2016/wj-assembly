import WjButton from './button/index.js';
import WjCascade from './cascade/index.js';
import HelloWorld from './hello-world/index.js';
import WjInput from './input/index.js';
import WjSelect from './select/index.js';
import WjSwitch from './switch/index.js';

const components = [
  WjButton,
  WjCascade,
  HelloWorld,
  WjInput,
  WjSelect,
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
  install
  // ,
  // WjButton,
  // WjCascade,
  // HelloWorld,
  // WjInput,
  // WjSelect,
  // WjSwitch
}
