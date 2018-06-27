import 'react';

class Hello {
    constructor(x, y) {
        console.log('this is contructor')
    }
};
const hello = new Hello();
console.log(hello)

// import( /* webpackChunkName: "moduleA" */'./modules/moduleA');
import( /* webpackChunkName: "moduleB" */'./modules/moduleB');
import(/* webpackChunkName: 'moduleC' */'./modules/moduleC')
import( /* webpackChunkName: 'moduleD'*/'./modules/moduleD')