let data = [5, 9, 13, 17]; // agr aapke pass 5 element hote to aap Math.floor function use kroge kyu ki vo points ko remove kr deta hai 11/2 = 5
let find = 17;
let start = 0;
let end = data.length - 1;
let position = undefined;
//mid point ke liye hum usko 2 se divide kar dete hai

while (start <= end) {
  let midd = Math.floor((start + end) / 2);
  //   console.log(data[midd]);
  if (data[midd] === find) {
    position = midd;
    break;
  }
  // ye left side search karega
  else if (data[midd] < find) {
    start = midd + 1;
  } else {
    //ye right side search karega
    end = midd - 1;
  }
}

// console.log(start + end) :- 3

console.log(position); // 3
