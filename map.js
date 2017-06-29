var words = ["ground", "control", "to", "major", "tom"];


//Take two arguments, array + callback function
//callback map function = return new array



function map(wordArray, callback){
  total = [];
  wordArray.forEach(function(item) { // (item, index, array)
    total.push(callback(item));
  })
  console.log(total);
}

map(words, function(word) {
  return word.length;
});

//[6, 7, 2, 5, 3]
