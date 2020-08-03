//远程获取新闻和新闻类别的数据

import axios from "axios";

import {appCode} from "./config";

//获取所有新闻类别
//async 异步
export async function getNewsChannels(){
    //请求这个地址，把身份信息带过去,需要等待
    var resp = await axios.get("http://ali-news.showapi.com/channelList",{
        //配置请求头
        headers:{
            Authorization: `APPCODE ${appCode}`,
        },
    });

    return resp.data.showapi_res_body.channelList;
}

//按照频道，分页获取新闻
// channelId 频道Id
// page 页码，从1开始
// limit 每页多少条数据
// 以上三个为请求参数
export async function getNews(channelId, page = 1, limit = 10){
    var resp = await axios.get("http://ali-news.showapi.com/newsList",{
        headers:{
            Authorization: `APPCODE ${appCode}`,
        },
        //请求参数
        params:{
            channelId,
            page,
            maxResult: limit,
            //needAllList:1,
            needContent:1,
        },
    });

    return resp.data.showapi_res_body.pagebean;


}
