module.exports = function(css) {
    // 在style-loader将样式放到页面上的时候执行，也就是在浏览器中进行执行,可以拿到浏览器中的对象
    // 引入几个css， 就会执行几次
    console.log('navigator', navigator);
    if (window.innerWidth < 768) {
        return css.replace('red', 'green')
    } else {
        // 什么都没有做，直接将css return出去了
        return css.replace('red','blue');
    }
}