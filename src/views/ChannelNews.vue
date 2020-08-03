<template>
    <div>
        <div class="type-title">{{channelName}}</div>
        <NewsList :news="news"></NewsList>

        <Pager :page="page" :limit="limit" :total="total" :pannelNumber="pannelNumber" @pageChange="handleChange"></Pager>

    </div>
  
</template>

<script>
import NewsList from "../components/news/NewsList"
import Pager from "../components/Pager"
import * as newsServe from "../services/newsService"

export default {
    components:{
        Pager,
        NewsList,
    },

    data(){
        return{
            channelName:"",
            page:1,
            limit:10,
            total:0,
            pannelNumber:15,
            news:[],
        };
    },

    methods:{
        handleChange(newPage){
            this.page = newPage;
            this.setDatas();
        },

        //设置频道名称
        async setChannelName(){
            var channels = await newsServe.getNewsChannels();
            var channel = channels.find((item) => 
                
                item.channelId === this.$route.params.cid
                //<!-- 某个频道新闻{{$route.params.cid}}  -->
                //<!-- 配置路由后，会向Vue注入一个全局属性route： 匹配到cid,然后渲染组件-->
            );
            this.channelName = channel.name;
        },

        async setDatas(){
            var resp = await newsServe.getNews(this.$route.params.cid, this.page, this.limit);
            this.total = resp.allNum;
            this.news = resp.contentlist;
        }
    },



    watch:{ //监控某些数据的变化，当数据变化时要做一些事
        "$route.params.cid":{
            immediate: true,  //一开始的数据也要当做是一种变化
            handler(){
                this.page = 1;
                this.setChannelName();
                this.setDatas();
            }
        }

    }

    

}
</script>

<style scoped>
.type-title{
    font-size: 2em;
    color: #888;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}

</style>