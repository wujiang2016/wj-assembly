/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-07-09 10:23:38 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-07-09 11:35:53
 * @Description: File desctiption 
 */

import WjHelloWorld from './wj-hello-world'

WjHelloWorld.install = Vue => Vue.component(WjHelloWorld.name, WjHelloWorld);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WjHelloWorld);
}

export default WjHelloWorld