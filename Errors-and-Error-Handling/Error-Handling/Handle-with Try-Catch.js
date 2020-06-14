function capAllElements(arr){
	arr.forEach((el, index, array) => {
    array[index] = el.toUpperCase();
  });
}

capAllElements('Incorrect argument');