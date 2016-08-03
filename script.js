
function truthCheck(collection, pre) {
  console.log(collection);
  console.log(pre);
  // Is everyone being true?
  var result=true;

for (var i = 0; i < collection.length; i++) {
console.log(collection[i][pre]);
// console.log(collection[i].pre==false);

  if(!collection[i][pre])
  {
    result=false;
    break;
  }

}

  return result;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
