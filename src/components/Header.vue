<template>
    <div class="header">
        <div class="header-container">
            <div class="container">
                <div class="logo">
                    <!-- 声明式导航 -->
                    <router-link to="/">
                        <img src="../assets/logoHuan.png" alt="">
                    </router-link>
                </div>
                <ul class="nav">
                    <li><router-link to="/">首页</router-link></li>
                    <li v-for="item in channels.slice(0,4)" :key="item.channelId">
                        <router-link :to="`/channel/${item.channelId}`">{{item.name}}</router-link>
                    </li>
                </ul>
                <div class="user">
                    <template v-if="loginUser">
                        <a href="">{{loginUser.loginId}}</a>
                        <a href="">退出登录</a>
                    </template>

                    <template v-else>
                        <router-link to="/Login">登录</router-link>
                        <router-link to="/reg">注册</router-link>
                    </template>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getNewsChannels} from "../services/newsService";
import { mapState } from "vuex";

export default {
    data(){
        return{
            channels:[],
        };
    },

    computed: {
        ...mapState("loginUser",{
            loginUser:"data",
        }),
    },

    async created(){        
        var resp = await getNewsChannels();
        this.channels = resp;
    },




}
</script>

<style>
.header{
    height: 60px;
}

.header-container{
    height: 60px;
    background: #000;
    color: #fff;
    line-height: 60px;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
}

.container{
    display: flex;
}

.logo a{
    display: flex;
    align-items: center;
    height: 100%;
}

.logo img{
    width:42px;
    height:42px;
}

.nav{
        
    margin: 0 60px;
    display: flex;
    flex-grow: 1;
}

.nav a {
    font-size: 15px;
    display: block;
    padding: 0 30px;
    text-decoration: none;
}

.nav .router-link-exact-active{
    color: #fcb85f;  
    
}

.nav a:hover{
    text-decoration: none;
    color: blanchedalmond;
}

.user{
    font-size: 14px;
}

.user *{
    margin-left: 10px;
}

.user a:hover{
    text-decoration: none;
    color: blanchedalmond;
}

.user .router-link-exact-active{
    color: #fcb85f;  
    
}


.header a{
    color:#fff;
}

</style>