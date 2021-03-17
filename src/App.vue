<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../src/components/Header'
  import Footer from '../src/components/Footer'
  export default {
    name: 'app',
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss" scoped>
  @import 'assets/layui/css/layui.css';
  @import 'assets/css/global.css';
  @import 'assets/layui/css/modules/layer/default/layer.css';
</style>
