let data = {
  name: "avishkar",
  age: 19,
  mail: "avishkar2004@gmail.com",
  getName:function() {
  return  this.name;
  }
};

//! This is used to insert data in object
data.age = 11;
// console.log(data.age) //! 11

//! This is used to delete data in object
delete data.mail
// console.log(data) // { name: 'avishkar', age: 11, getName: [Function: getName] }


//! This is used to Update data in object
data.name = "jyoti"
// console.log(data) // { name: 'jyoti', age: 11, getName: [Function: getName] }


// console.log(data.getName()) //! avishkar


//! loop
for(x in data) {
    // console.log(x) //name,age,getName
    // console.log(data[x]) //jyoti ,11,[Function: getName]
}


//! object ki sari ki sari property nikalke dikhao

// console.log(Object.keys(data)) // [ 'name', 'age', 'getName' ]

//! object ki key value ki pair de dega
console.log(Object.values(data)) //[ 'jyoti', 11, [Function: getName] ]