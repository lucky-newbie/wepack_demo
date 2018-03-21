#webpack tree shaking

1.js tree shaking
    webpack.optimize.uglifyJS

    注意：lodash的tree shaking 存在问题，对于一些第三方库（书写方式不是webpack tree shaking书写），需
    借助第三方工具，比如lodash 借助 babel-plugin-lodash
2.css tree shaking
    purify css

    借助plugins：purifycss-webpack，

    注意：css tree shaking 与css module不能同时起作用

使用场景：
    1.常规优化；
    2.引入第三方库的某一个功能