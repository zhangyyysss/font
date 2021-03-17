// 自定义中文规则内容
// 使用正则表达式自定义规则 https://blog.csdn.net/baiqiangdoudou/article/details/100184581
import { Validator } from 'vee-validate'

const dictionary = {
  'zh-CN': {
    messages: {
      required: field => '请输入' + field,
      email: () => '请输入正确的邮箱格式',
      min: (field, args) => field + '不符合最小长度' + args,
      max: (field, args) => field + '已经超过最大长度' + args,
      length: (field, args) => field + '长度要求为' + args
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      repassword: '密码',
      username: '账号',
      code: '验证码'
    }
    // 自定义name中的规则显示内容使用custom: { .... }
    // custom: {
    //   password: {
    //     required: '请输入密码',
    //     min: '至少为6位密码',
    //     max: '最大为10位密码'
    //   },
    //   code: {
    //     required: '请输入验证码',
    //     length: '请输入4位验证码'
    //   }
    // }
  }
}

Validator.localize(dictionary)
