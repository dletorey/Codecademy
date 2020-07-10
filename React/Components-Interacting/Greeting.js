import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

/* commented as on 5/13
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Groberta' />, 
  document.getElementById('app')
);
*/