<template>
    <div class="error" :style="{visibility: msg ? 'visible' : 'hidden',}">{{msg}}</div>
</template>

<script>
export default {
    props:{
        msg:{
            default:"",
            type:String
        }
    }
}
</script>

<style>
.error{
    font-size: 14px;
    color: lightsalmon;
    padding-left: 150px;
    height: 30px;
    line-height: 30px;
}
</style>