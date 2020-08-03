<template>
<div class="news-types">
    <div 
        class="item" 
        v-for="item in showChannels" 
        :key="item.channelId"
        :class="{
            active: item.channelId === chooseId, //===相同类型比较
        }"
        @click="switchTo(item.channelId)"
        ><span class="name">{{item.name}}</span></div>
    <a href="" @click.prevent= "isCollapse = !isCollapse">{{ isCollapse ? "展开" : "收起"}}</a>
</div>
</template>

<script>
import { getNewsChannels} from "../../services/newsService";

export default {
    data(){
        return{
            channels:[],
            isCollapse: true, //当前是否为折叠状态
            chooseId: null //当前选中的频道ID

            //频道数组为空，渲染了，触发了created（），远程获取频道数据，重新设置频道数组，触发重新渲染，
        };
    },

    computed:{
        //需要显示的频道
        showChannels(){
            if(this.isCollapse){
                //折叠状态
                return this.channels.slice(0,8); //折叠只需要显示8个数据
            }else{
                //展开状态
                return this.channels;
            }
        }
    },

    async created(){        
        var resp = await getNewsChannels();
        this.channels = resp;
        this.switchTo(this.channels[0].channelId);

    },

    methods:{
        switchTo(id){
            this.chooseId = id;
            //子组件所可能触发的事件，让组件组织者处理
            this.$emit("change", this.chooseId)
        },
    },
};
</script>

<style scoped>
.news-types{
    margin: 30px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    padding-bottom: 15px;
}

.item{
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 15px;
    margin:7px 15px 7px 0;
    cursor: pointer;
    position: relative;
}

.item:hover{
    background: #ccc;
}

.item.active{
    background: rgb(141, 139, 139);
    color: rgb(223, 215, 215);
}

.news-types a {
    align-self: flex-end;
    margin-bottom: 20px;
    color:  #000;
}

.news-types a:hover{
    color:  rgb(160, 153, 153);
    text-decoration:none;
}



</style>