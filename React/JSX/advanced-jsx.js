/* url https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-jsx-u/lessons/react-jsx-advanced/exercises/jsx-classname-class */
/* Workshop - class vs className 
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = <div className="big">I AM A BIG DIV</div>;
ReactDOM.render(myDiv, document.getElementById('app'))
*/
/* Workshop - Self-Closing Tags 
const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="images/jenkins.png" />
      <article>
        I LIKE TO SIT
        <br />
        JENKINS IS MY NAME
        <br />
        THANKS HA LOT
      </article>
    </div>
  );
*/
/* Workshop - JavaScript In Your JSX In Your JavaScript */
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
  <h1>2 + 3</h1>,
  document.getElementById('app')
);