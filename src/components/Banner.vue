<template>
    <div class="banner-container" @mouseenter="autoStop()" @mouseleave="autoStart()">
        <!-- {}代表JS对象 -->
        <ul 
            class="images" 
            :style="{
                width: bannerImg.length * 100 + '%',
                marginLeft: -index * 100 + '%'
            }">

            <li v-for="(item,i) in bannerImg" :key="i">
                <a :href="item.link"><img :src="item.url" alt=""></a>
            </li>
        </ul>

        <ul class="dots">
            <li 
                v-for="(item,i) in bannerImg" :key="i" 
                :class="{
                    active: i===index //当前显示第index张图片，则第i个dot为active状态
                }"
                @click="index=i">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:
    ["bannerImg"],

    created(){
        this.autoStart();
    },

    destroyed(){
        this.autoStop();
    },

    data(){
        return{
            index: 0, //当前显示第几张图片
            timer:null,
        }
    },

    methods:{

        autoStart(){
        if(this.timer){
            return;
        }
        this.timer = setInterval(()=>{
                this.index = (this.index + 1) % this.bannerImg.length;
            },2000)
        },

        autoStop(){
            clearInterval(this.timer);
            this.timer = null;

        }
    }

}
</script>


<style scoped> 
/* scoped:此样式只影响此组件范围内 */
.banner-container{
    height: 300px;
    position: relative;
    /* 当内容溢出元素框时发生的事情 */
    overflow: hidden;
}

.banner-container li{
    display: block;
    width: 1080px;
    height: 100%;
    float: left;
}

.images{
    height: 100%;
    transition: 0.5s;
}

.banner-container img{
    width: 1080px;
    height: 100%;
}

.dots{
    /* 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。 */
    position: absolute;
    bottom: 10px;
    right: 10px;
}

.dots li{
    width: 10px;
    cursor: pointer;
    height: 10px;
    margin: 0 3px;
    border-radius: 50%;
    border: 1px solid;
    color: #fff;
}

.dots li.active{
    background: #fff;
}
</style>