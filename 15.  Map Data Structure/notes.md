let data = new Map([
  ["name", "test"],
  [true, "bool key"],
  [100, "number"],
]);

console.log(data);

Map(3) { 'name' => 'test', true => 'bool key', 100 => 'number' }

//! How to add value in it

let data = new Map([
  ["name", "test"],
  [true, "bool key"],
  [100, "number"],
]);

data.set("age", 19);
console.log(data);

Map(4) {
  'name' => 'test',
  true => 'bool key',
  100 => 'number',
  'age' => 19
}


