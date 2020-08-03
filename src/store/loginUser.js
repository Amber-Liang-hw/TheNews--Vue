//登录用户的仓库数据

//import{login, loginOut, whoAmI} from "../services/userService";

export default{
    
    namespaced:true,
    state:{
        data:null,
        isLoading:false,
    },
    mutations:{
        setIsLoading(state,payload){
            state.isLoading = payload;
        },
        setData(state,payload){
            state.data = payload;
        },
    },

    actions:{
        async login(context,payload){
            
            //context.commit("setIsLoading",true);
            //var resp = await login(payload);
            //if(resp.code === 0){
            context.commit("setData",payload);
            //}
            //context.commit("setIsLoading",false);
        },

        async whoAmI(context){
            var resp = localStorage.getItem("token");
            //context.commit("setIsLoading",true);
            //var resp = await whoAmI();
            context.commit("setData",resp);
            //context.commit("setIsLoading",false);
        },

    }
}