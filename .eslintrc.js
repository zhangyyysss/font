module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // 文件末尾不为空行
    'eol-last': 0,
    // 数字2表示同意缩进2个空格,数字1表示1倍缩进
    'vue/script-indent': ['error', 2, {'baseIndent': 1}],
    // {}对象内部强制有空格
    'object-curly-spacing': ["error", "always"],
    // 不用强制使用const,可以使用let,var
    "prefer-const": "off",
    //function左括号(可以没空格
    "space-before-function-paren": 1
  },
  overrides:[
    {
      'files':['*.vue'],
      'rules':{
        'indent':['off', 2]
      }
    }
  ]
}
