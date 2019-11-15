import React from 'react';
import ReactDOM from 'react-dom';


class Test extends React.PureComponent{

  render () {
    return <button>12312</button>
  }
}


function render (id) {
  ReactDOM.render(<Test />, document.getElementById(id))
}

export default render;
