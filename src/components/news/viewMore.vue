<template>
  <div>
      <div class="view"><router-link :to="`/channel/` + channelId">显示更多</router-link></div>
  </div>
</template>

<script>


export default {
    props:{
        channelId:"",
    },


}
</script>

<style>
.view{
    font-size: 15px;
    margin: 20px auto;
    text-align:center;
}

.view a {
  text-decoration: none;
}

.view .router-link-active {
  text-decoration: none;
}

</style>