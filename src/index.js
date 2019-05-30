import WjButton from './packages/button/index.js';
import WjCascade from './packages/cascade/index.js';
import HelloWorld from './packages/hello-world/index.js';
import WjInput from './packages/input/index.js';
import WjSelect from './packages/select/index.js';
import WjSwitch from './packages/switch/index.js';

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
  install,
  HelloWorld,
  WjButton,
  WjSelect,
  WjInput,
  WjCascade,
  WjSwitch
}
