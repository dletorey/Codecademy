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
/* Workshop - JavaScript In Your JSX In Your JavaScript 
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
  <h1>2 + 3</h1>,
  document.getElementById('app')
);
*/
/* Workshop - Curly Braces in JSX 
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);
*/
/* Workshop - 20 Digits of Pi in JSX */
/* example code from pi.js - this shows that the variable pi is treated as JSX except for the curly braces that are treated as JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);
*/
/*
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math = <h1>2 + 3 = {2 + 3}</h1>;
ReactDOM.render(math, document.getElementById('app'));
*/
/* Workshop - Variables in JSX 
import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));
*/
/* Workshop - Variable Attributes in JSX 
import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose} />;
ReactDOM.render(gooseImg,document.getElementById('app'));
*/

/* Workshop - Event Listeners in JSX 
import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" onClick={makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app'));
*/
/* Workshop - JSX Conditionals: If Statements That Do Work */
/* Example in if.js */
/*
import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);
*/

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === "heads") {
  img = <img src={pics.kitty} alt="cat" />
} else {
  img = <img src={pics.doggy} alt="dog" />
}
ReactDOM.render(img, document.getElementById('app'));