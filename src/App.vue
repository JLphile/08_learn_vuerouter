<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/why/id/10010">用户</router-link>
    <!-- <router-link to="/about" replace>关于</router-link> -->

    <button @click="jumpToAbout">点击关于按钮</button>
    <button @click="forwardOneStep">前进一步</button>

    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'App',
  methods: {
    // jumpToAbout() {
    //   // 调用router对象
    //   this.$router.push('/about');
    // },
  },

  setup() {
    // 获取router对象
    const router = useRouter();

    const jumpToAbout = () => {
      router.push('/about');
      router.push({
        path: '/about',
        query: {
          name: 'why',
          age: 18,
        },
      });
      // router.replace('/about');
    };

    const forwardOneStep = () => {
      router.go(1);
      // router.go(-1);
      // router.forward();
      // router.back;
    };
    return {
      jumpToAbout,
      forwardOneStep,
    };
  },
};
</script>

<style scoped>
.router-link-active {
  color: red;
}
</style>
