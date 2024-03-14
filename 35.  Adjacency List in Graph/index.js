let adjList = {
  "a": ["b", "c"],
  "b": ["a", "c", "d"],
  "c": ["a", "b"],
  "d": ["b"],
};

console.log(adjList.c) // c kis kis se conected hai aise check krte hai
// Output :- [ 'a', 'b' ]