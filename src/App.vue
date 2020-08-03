<template>
  <div id="app">
    <Header></Header>
    <div class="container">    
      <!-- 该组件会根据不同的访问路径，渲染不同的组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    //注册组件 
    Header,
  },
};
</script>

<style scoped>
.container{
  margin:30px auto;
}
</style>
