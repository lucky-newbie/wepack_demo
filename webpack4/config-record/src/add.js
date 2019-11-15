function add() {
  const dom = document.createElement('div');
  dom.innerHTML = 1;
  dom.setAttribute('id', 'id');
  dom.onclick = function() {
    // document.getElementById('id');
    dom.innerHTML = parseInt(dom.innerHTML) + 1
  }
  document.body.appendChild(dom)
}

function plus (a, b) {
  console.log(a + b);
  return a + b;
}


export {
  add,
  plus
};
