<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li>Home的内容1</li>
      <li>Home的内容2</li>
      <li>Home的内容3</li>
    </ul>
    <!-- 映射 -->
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/shops">商品</router-link>
    <!-- 占位 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
