import './index.css';
import icon from './1.png';

function createDom() {
 const dom = document.createElement('div');
 dom.innerHTML = 'hello , this is test';
 dom.classList.add('hello');
 const img = new Image();
 img.src = icon;
 dom.appendChild(img)
 document.body.appendChild(dom)
}
createDom()

// if (module.hot) {
//   module.hot.accept('./HRMTrigger.js', function() {
//     console.log('hot?')
//   });
// }