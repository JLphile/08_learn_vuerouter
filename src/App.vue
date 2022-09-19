<template>
  <div>
    <router-link to="/home" v-slot="props" custom>
      <!-- <nav-bar title="首页"></nav-bar>
      <button>哈哈哈</button> -->
      <!-- props:href 跳转的连接 
        props: route对象 
        props: navigate导航函数
      props:isActive 是否处于当前活跃状态  
      props:isExactActive 是否处于当前精确的活跃状态  -->
      <button @click="props.navigate">{{ props.href }}</button>
      <button @click="props.navigate">点击回首页</button>
      <span :class="{ active: props.isActive }">{{ props.isActive }}</span>
      <span :class="{ active: props.isActive }">
        {{ props.isExactActive }}
      </span>
      <!-- <p>{{ props.route }}</p> -->
    </router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/why/id/10010">用户</router-link>
    <router-link to="/category">分类</router-link>
    <!-- <router-link to="/about" replace>关于</router-link> -->

    <button @click="jumpToAbout">点击关于按钮</button>
    <button @click="forwardOneStep">前进一步</button>

    <!-- 对象结构写法v-slot='{Component}' -->
    <router-view v-slot="props">
      <!-- <transition name="why"> -->
      <keep-alive>
        <component :is="props.Component"></component>
      </keep-alive>
      <!-- </transition> -->
    </router-view>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import NavBar from './components/NavBar.vue';
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
  components: { NavBar },
};
</script>

<style scoped>
.router-link-active {
  color: red;
}
.why-renter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>
