// for (let i = 0; i <= 4; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(i + " ");
//   }
// }

//  a)   1
//      2 2
//      3 3 3
//      4 4 4 4

// for (let i = 0; i <= 4; i++) {
//     for (let j = 1; j <= i; j++) {
//       console.log(j + " ");
//     }
//   }

// b)   1
//      1 2
//      1 2 3
//      1 2 3 4

// let count = 1;
// for (let i = 0; i <= 4; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(count + " ");
//     count++;
//   }
// }

//c)    1
//      2 3
//      4 5 6
//      7 8 9 10


// for(let i= 1; i<= 4; i++) {
//     for(let j = 4; j >= i; j--) {
//         document.write("&nbsp;")
//     }
//      for(let k = 1; k <=i ; k++) {
//         document.write(i + " ")
//      }
// }


// for(let i= 1; i<= 4; i++) {
//     for(let j = 4; j >= i; j--) {
//         document.write("&nbsp;")
//     }
//      for(let k = 1; k <=i ; k++) {
//         document.write(i + " ")
//      }
// }


// e) 1
//      1 2 
//      1 2 3 
//      1 2 3 4 



let count = 1;
for(let i= 1; i<= 4; i++) {
        for(let j = 4; j >= i; j--) {
            document.write("&nbsp;")
        }
         for(let k = 1; k <=i ; k++) {
            document.write(count + " ")
            count++
         }
    }

    // f) 1
    // 2 3 
    // 4 5 6 
    // 7 8 9 10
