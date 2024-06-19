ek se jyada object store karane ho to array banana padega.

- A HashMap is a data structure in JavaScript that allows you to store key-value pairs. It provides fast access to values based on their keys and is commonly used to optimize lookup operations.

How to Use Hash Tables with Object and Map Classes in JavaScript
-The most common example of a Hash Table in JavaScript is the Object data type, where you can pair the object's property value with a property key.

-In the following example, the key Nathan is paired with the phone number value of "555-0182" and the key Jane is paired with the value "315-0322":

let obj = {
  Nathan: "555-0182",
  Jane: "315-0322"
}

But JavaScript's Object type is a special kind of Hash Table implementation for two reasons:

- It has properties added by the Object class. Keys you input may conflict and overwrite default properties inherited from the class.

- The size of the Hash Table is not tracked. You need to manually count how many properties are defined by the programmer instead of inherited from the prototype.

const obj = {};
obj.name = "Nathan";

console.log(obj.hasOwnProperty("name")); // true

JavaScript doesn't block an attempt to overwrite the hasOwnProperty() method, which may cause an error like this:


const obj = {};
obj.name = "Nathan";
obj.hasOwnProperty = true;

console.log(obj.hasOwnProperty("name")); 
// Error: obj.hasOwnProperty is not a function
JavaScript object inherited property gets overwritten

To handle these shortcomings, JavaScript created another implementation of the Hash Table data structure which is called Map


Just like Object, Map allows you to store key-value pairs inside the data structure. Here's an example of Map in action:

const collection = new Map();

collection.set("Nathan", "555-0182");
collection.set("Jane", "555-0182");

console.log(collection.get("Nathan")); // 555-0182
console.log(collection.size); // 2

JavaScript Map class is another implementation of Hash Table

Unlike the Object type, Map requires you to use the set() and get() methods to define and retrieve any key-pair values that you want to be added to the data structure.

You also can't overwrite Map inherited properties. For example, the following code tried to overwrite the size property value to false:

const collection = new Map();

collection.set("Nathan", "555-0182");
collection["size"] = false;

console.log(collection.get("size")); // undefined
console.log(collection.size); // 1

Map type property can't be overwritten
As you can see from the code above, you can't add a new entry to the Map object without using the set() method.
The Map data structure is also iterable, which means you can loop over the data as follows:

const myMap = new Map();

myMap.set("Nathan", "555-0182");
myMap.set("Jane", "315-0322");

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

Now that you've learned how JavaScript implements Hash Tables in the form of Object and Map data structures, let's see how you can create your own Hash Table implementation next.

- How to Implement a Hash Table Data Structure in JavaScript
Although JavaScript already has two Hash Table implementations, writing your own Hash Table implementation is one of the most common JavaScript interview questions.

You can implement a Hash Table in JavaScript in three steps:

- Create a HashTable class with table and size initial properties
- Add a hash() function to transform keys into indices
- Add the set() and get() methods for adding and retrieving key/value pairs from the table.

Alright, let's start with creating the HashTable class. The code below will create a table of buckets with the size of 127:

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }
}

HashTable class initial properties

All your key/value pairs will be stored inside the table property.


How to write the hash() method
Next, you need to create the hash() method that will accept a key value and transform it into an index.

A simple way to create the hash would be to sum the ASCII code of the characters in the key using the charCodeAt() method as follows. Note that the method is named using _ to indicate that it's a private method:

_hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash;
}

But since the HashTable class only has 127 buckets, this means that the _hash() method must return a number between 0 and 127.

To ensure that the hash value doesn't exceed the bucket size, you need to use the modulo operator as shown below:

_hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.table.length;
}

Now that you have the _hash() method completed, it's time to write the set() and get() methods.

How to write the set() method
To set the key/value pair in your Hash Table, you need to write a set() method that accepts  (key, value) as its parameters:

- The set() method will call the _hash() method to get the index value.
- The [key, value] pair will be assigned to the table at the specified index
- Then, the size property will be incremented by one

set(key, value) {
  const index = this._hash(key);
  this.table[index] = [key, value];
  this.size++;
}

Now that the set() method is complete, let's write the get() method to retrieve a value by its key.

How to write the get() method

To get a certain value from the Hash Table, you need to write a get() method that accepts a key value as its parameter:

- The method will call the _hash() method to once again retrieve the table index
- Return the value stored at table[index]
get(key) {
  const index = this._hash(key);
  return this.table[index];
}

This way, the get() method will return either the key/value pair back or undefined when there is no key/value pair stored in the specified index.

So far so good. Let's add another method to delete key/value pair from the Hash Table next.

How to write the remove() method
To delete a key/value pair from the Hash Table, you need to write a remove() method that accepts a key value as its parameter:

- Retrieve the right index using the _hash() method
- Check if the table[index] has a truthy value and the length property is greater than zero. Assign the undefined value to the right index and decrement the size property by one if it is.
- If not, simply return false

remove(key) {
  const index = this._hash(key);

  if (this.table[index] && this.table[index].length) {
    this.table[index] = undefined;
    this.size--;
    return true;
  } else {
    return false;
  }
}

With that, you now have a working remove() method. Let's see if the HashTable class works properly.

How to Test the Hash Table Implementation
It's time to test the Hash Table implementation. Here's the full code for the Hash Table implementation again:

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const target = this._hash(key);
    return this.table[target];
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = [];
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}

The HashTable implementation in JavaScript

Here's the complete HashTable class code again with the collision avoidance applied for your reference:

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

Complete HashTable class implementation

You can test the implementation by creating a new HashTable instance and do some insertion and deletion:

const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht.size); // 3
ht.remove("Spain");
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]
Another HashTable test

Now there's no collision inside the HashTable instance. Great work!

============
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


console.log(data.getName()); :- avishkar

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