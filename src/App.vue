<template>
  <div id="app">
    <appHeader></appHeader>
    <div class="page">
      <div class="card">
        <keep-alive>
          <movieShowing v-if="$route.path === '/'"></movieShowing>
        </keep-alive>
        <keep-alive>
          <movieLatest v-if="$route.path === '/'"></movieLatest>
        </keep-alive>
        <router-view transition="fade" transition-mode="out-in"></router-view>
      </div>
      <movieTypes v-if="$route.path === '/'"></movieTypes>
    </div>
  </div>
</template>

<script>
import appHeader from './component/header.vue'
import movieShowing from './component/movie_showing.vue'
import movieSubject from './component/movie_subject.vue'
import movieLatest from './component/movie_latest.vue'
import movieTypes from './component/movie_types.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { appHeader,movieShowing,movieSubject,movieLatest,movieTypes }
}
</script>

<style>
.fade-transition {
    transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave {
    opacity: 0;
}
</style>
