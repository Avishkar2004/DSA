function Piyush() {
  return Rehana();
}

function Rehana() {
  return Vadant();
}

function Vadant() {
  return Chirag();
}

function Chirag() {
  return Ajay();
}

// base case
function Ajay() {
  return true;
}

// console.log(Piyush());

function gotoLunch(person) {
  if (person === 5) return true;
  console.log(person)
  return gotoLunch(person + 1);
}

console.log("outcome: ",gotoLunch(1))

1
2
3
4
outcome:  true


why do we need recursion :-
tree, graph reversal, sorting, wide and conqurer, backtracking, dynamic programming.


Loops vs recursion:-
