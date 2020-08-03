import vuex from 'vuex';
import Vue from 'vue';
import loginUser from './loginUser';


Vue.use(vuex);
var store = new vuex.Store({
    //所有共享数据都配置在state里
    modules:{
        loginUser,
    }
    
    
});

export default store;
