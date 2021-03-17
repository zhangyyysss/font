<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{ name: 'login' }">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">邮箱</label>
                  <div class="layui-input-inline">
                    <input type="text" id="L_email" name="email" autocomplete="off" class="layui-input" v-validate="'required|email'">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;">{{errors.first('email')}}</span>
                  </div>
                  <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <div class="layui-input-inline">
                    <input type="text" id="L_username" name="username" autocomplete="off" class="layui-input" v-validate="'required|min:4'">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;">{{errors.first('username')}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <input type="password" id="L_pass" name="password" autocomplete="off" class="layui-input" v-validate="'required|min:6|max:16'">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;">{{errors.first('password')}}</span>
                  </div>
                  <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label">确认密码</label>
                  <div class="layui-input-inline">
                    <input type="password" id="L_repass" name="repassword" autocomplete="off" class="layui-input" v-validate="'required|min:6|max:16'">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;">{{errors.first('repassword')}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label">验证码</label>
                  <div class="layui-input-inline">
                    <input type="text" id="L_vercode" name="code" placeholder="请输入验证码" autocomplete="off" class="layui-input" v-validate="'required|length:4'" maxlength="4">
                  </div>
                  <div>
                    <span v-html="svg" @click="_getCode()"></span>
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;">{{errors.first('code')}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <button type="button" class="layui-btn" lay-filter="*" lay-submit>立即注册</button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                  <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { getCode } from '@/api/login'
  export default {
    name: 'Reg',
    data () {
      return {
        svg: ''
      }
    },
    created () {
      this._getCode()
    },
    methods: {
      _getCode () {
        getCode().then(res => {
          console.log(res)
          if (res.code === 200) {
            this.svg = res.data
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
