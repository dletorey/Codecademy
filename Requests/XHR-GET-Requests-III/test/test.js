console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const url = $url
    };
    
    const varCallbacks = [
      function($url){
      	if ($url.value !== 'https://api.datamuse.com/words?') {
        	return { failure: 'Did you set `const url` equal to the supplied URL?' }
        }
				return true;
    	}
    ]

    let isMatchOne = Structured.match(code, structureOne, { varCallbacks });
    assert.isOk(isMatchOne, varCallbacks.failure || 'Did you create a `const url` and assign it `\'https://api.datamuse.com/words?\'`?');
  });
});