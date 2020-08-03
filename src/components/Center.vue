<template>
  <div class="center">
      <!-- 插槽 -->
      <!-- 模板中的某个位置，无法确定内容 -->
      <!-- 在使用此组件时，需要把slot部分传给我 -->
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .center{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

</style>