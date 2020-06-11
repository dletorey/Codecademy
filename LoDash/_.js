const _ = {
    clamp(num, min, max) {
      return num <= min ? min : num >= max ? max : num;
    },
    inRange(num, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      };
      if (start > end) {
        tempStart = end;
        end = start;
        start = tempStart;
      };
      if (num >= start && num < end) {
        return true;
      } else {
        return false;
      }
    },
    words(phrase) {
      wordArr = phrase.split(' ');
      return wordArr;
    },
    pad(str,leng) {
      let newStr = '';
      if (str.length >= leng) {
        newStr = str;
      } else {
        let preStr = Math.floor((leng - str.length) / 2);
        let postStr = Math.ceil((leng - str.length) / 2);
        newStr = ' '.repeat(preStr) + str + ' '.repeat(postStr);
      }
      return newStr;
    },
    has(obj, key) {
      let hasValue = Object.keys(obj);
      let tempVal;
      for (let i = 0; i < hasValue.length; i++) {
        if (hasValue[i] === key) {
          tempVal = true;
        } else {
          tempVal = false;
        }
      }
      hasValue = tempVal;
      return hasValue;
    },
    invert(obj) {
      return Object.entries(obj).reduce((ret, entry) => {
        const [ key, value ] = entry;
        ret[ value ] = key;
        return ret;
      }, {});
    },
    findKey(obj, pred) {
      let ret = undefined;
      for (const key in obj) {
        if (pred(obj[key])) {
          ret = key;
        };
        return ret;
      };
    },
    drop(arr, num=1) {
      let newArr = arr.slice(num);
      return newArr;
    },
    dropWhile(arr, pred) {
      let dropNum = arr.findIndex(function(element, index){return !pred(element, index, arr)});
      let droppedArray = this.drop(arr, dropNum);
      return droppedArray;
    },
    chunk(arr,len=1) {
      let newArr = [];
      for (let i = 0; i < arr.length; i += len) {
        let chunk = arr.slice(i, i+len);
        newArr.push(chunk);
      };
      return newArr;
    }
  };
  // Do not write or modify code below this line.
  module.exports = _;