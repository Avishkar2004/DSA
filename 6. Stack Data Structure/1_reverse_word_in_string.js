//! Ques 1 : Given an input string s, reverse the order of the words

//! Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
//! Input: "  hello world  "     ----->>>>>     Output: "world hello"
//! Input: "a good   example"    ----->>>>>     Output: "example good a"

//! "the sky is blue" => [the,sky,is,blue] //split the sentence by white spaces
//! [] => [the,sky,is,blue] => blue is sky the //created new stack, we will iterate throght element then pop then adding in string

const reverseWord = function (s) {
  const splits = s.split(" ");
  const stack = [];

  for (let i of splits) {
    stack.push(i);
  }
  let finalString = " ";

  while (stack.length) {
    const current = stack.pop();

    if (current) {
      finalString += " " + current;
    }
  }
  return finalString.trim();
};

console.log(reverseWord("the sky is blue"));
console.log(reverseWord("a good   example"));

// time com :- O(n)
// space com :- O(n)
