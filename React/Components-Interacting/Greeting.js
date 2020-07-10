import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1></h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Groberta' />, 
  document.getElementById('app')
);