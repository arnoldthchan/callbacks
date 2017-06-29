// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }
  arr.forEach(function(i){
      if (i === "Waldo") {
        found(arr.indexOf(i));   // execute callback
      }
  })
}

function actionWhenFound(indexNum) {
  console.log("Found Waldo at index " + indexNum + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

