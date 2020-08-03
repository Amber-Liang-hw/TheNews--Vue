<template>
  <div>
      <Banner :bannerImg="banners"></Banner>
      <Channels @change="handleChange"></Channels>
      <NewsList :news="news"></NewsList>
      <viewMore :channelId="channelId"></viewMore>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import banner1 from '../assets/banner/cake.jpeg'
import banner2 from '../assets/banner/road.jpeg'
import banner3 from '../assets/banner/street.jpeg'

import Channels from '../components/news/Channels'

import NewsList from '../components/news/NewsList'
import { getNews } from "../services/newsService"

import viewMore from '../components/news/viewMore'

export default {
    components: {
        //注册组件
        Banner,
        Channels,
        NewsList,
        viewMore,
    },

    data(){
        return{
            banners:[
                {
                url:banner1,
                link:"https://www.baidu.com",
                },

                {
                url:banner2,
                link:"https://www.baidu.com",
                },

                {
                url:banner3,
                link:"https://www.baidu.com",
                },
            ],
            news:[],
            channelId:"",
        }
    },

    methods:{
        async handleChange(channelId){
            var resp = await getNews(channelId,1,10);
            this.news = resp.contentlist;
            this.channelId = channelId;

        }
    }
}
</script>

<style>

</style>