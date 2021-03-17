import axios from 'axios'

// 获取验证码请求接口
const getCode = async () => {
  let result = ''
  try {
    result = await axios.get('/getCaptcha')
    if (result.status === 200) {
      return result.data
    }
  } catch (e) {
    console.log(e)
  }
  return result
}

// 忘记密码请求接口
const forget = async (option) => {
  let result = ''
  try {
    result = await axios.post('/forget', {
      ...option
    }) // 把我们的数据扩展运算符展开,然后以json格式跟着post请求传入到后台,(其实可以不要解构,直接传入option对象就好了啊!, )
    if (result.status === 200) {
      return result.data
    }
  } catch (e) {
    console.log(e)
  }
  return result
}

export { getCode, forget }
