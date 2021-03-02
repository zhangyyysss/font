<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input type="text" name="title" required lay-verify="required" placeholder="请输入用户名" autocomplete="off"
                   class="layui-input">
          </div>
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="title" required lay-verify="required" placeholder="请输入密码" autocomplete="off"
                   class="layui-input">
          </div>
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="title" required lay-verify="required" placeholder="请输入验证码" autocomplete="off"
                   class="layui-input">
          </div>
          <div class="layui-form-mid svg" v-html="captcha" @click="getCaptcha()">辅助文字</div>
        </div>
        <button type="button" class="layui-btn">立即登录</button>
        <a href="http://www.layui.com" class="immoc-link">找回密码</a>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'app',
    data () {
      return {
        captcha: ''
      }
    },
    mounted () {
      this.getCaptcha()
    },
    methods: {
      getCaptcha () {
        axios.get('http://localhost:3000/getCaptcha').then(res => {
          if (res.status === 200) {
            let obj = res.data
            if (obj.code === 200) {
              this.captcha = res.data.data
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    background-color: cornsilk;
  }

  .layui-container {
    background-color: #fff;
  }

  input {
    width: 190px;
  }

  .immoc-link {
    margin-left: 10px;

    &:hover {
      color: blue;
    }
  }

  .svg {
    position: relative;
    top: -15px;
  }
</style>
