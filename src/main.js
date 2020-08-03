import Vue from 'vue';
import App from './App.vue';
import "./assets/style/reset.css";
import "./assets/style/global.css";
import router from './routes/index';
import store from './store/index';

Vue.config.productionTip = false

//调用接口
//第一种使用方法
// getNewsChannels().then((resp) => {
//   console.log(resp);
// });

//第二种使用方法
// async function test(){
//   var resp = await getNewsChannels();
//   console.log(resp);
// }


store.dispatch("loginUser/whoAmI");

new Vue({
  render: h => h(App),
  router, //配置路由到vue实例
  store, //配置仓库到vue实例
}).$mount('#app')
