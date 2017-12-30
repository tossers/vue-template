// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': [2, 4],  //缩进风格
        'semi': 0,
        'space-before-function-paren': 0,
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        'comma-dangle': 0,
        'spaced-comment': 0,//注释风格要不要有空格什么的,
        'no-unused-expressions': 1,//禁止无用的表达式
        'no-useless-escape': 1, //不必要的转义字符
        'one-var': 1,
        'no-sequences': 1,      //意外使用逗号运算符
        'curly': 1,             //全都需要{ }包围
        'yoda': 1,              //禁止尤达条件
    }
};
