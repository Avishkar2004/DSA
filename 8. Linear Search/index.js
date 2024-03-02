// let data = [30, 13, 14, 75, 56, 17, 48, 29];
// let find = 56;
// let pos = undefined;
// for (let i = 0; i < data.length; i++) {
//   if (data[i] == find) {
//     pos = i;
//     break;
//   }
// }

// console.log(pos);

// if(!pos) {
//     alert("Element not found")
// }

// Eg 2:-

// var linearSearch = function (city, value) {
//   for (let i = 0; i <= city.length; i++) {
//     if (city[i] === value) return i;
//   }
//   return -1;
// };

// var city = [
//   "kathmandu",
//   "pokhara",
//   "butwal",
//   "birgunj",
//   "mahendranagar",
//   "janakpur",
//   "dharan",
//   "narangadh",
//   "bhairawa",
// ];
// console.log(linearSearch(city, "butwal"));
// Output :- 2


// Eg :- 3
function naiveSearch(str, word) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < word.length; j++) {
      if (word[j] !== str[i + j]) break;
      if (j === word.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("search and find", "find"));
