import './index.css';
import icon from './1.png';

const test = 123;
console.log(test, 'test123',1)


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