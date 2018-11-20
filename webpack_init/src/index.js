
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Test = ({text}) => {
  return (<div>{text}</div>)
}
Test.propTypes = {
  text: PropTypes.string
}

// export function test () {
ReactDOM.render(<Test text='这是测试demo' />, document.getElementById('app'))
// }
