// class Hello {
//     constructor(x, y) {
//         console.log('this is contructor')
//     }
// };

import( /* webpackChunkName: "moduleA" */'./modules/moduleA');
import( /* webpackChunkName: "moduleB" */'./modules/moduleB');
import(/* webpackChunkName: 'moduleC' */'./modules/moduleC')
import( /* webpackChunkName: 'moduleD'*/'./modules/moduleD')