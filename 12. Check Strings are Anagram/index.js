//! An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other. Examples: Input: str1 = “listen” str2 = “silent”

function CheckAnagram(str1, str2) {
  let charcount = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (ch of str1) {
    charcount[ch] = (charcount[ch] || 0) + 1;
  }
  //   console.log(ch);
  for (ch of str2) {
    // console.log(charcount[ch]);
    if (!charcount[ch]) {
      return false;
    }
    charcount[ch]--;
  }
  return true;
}

// console.log(CheckAnagram("helo", "ehllo")) //false

console.log(CheckAnagram("hello", "ehllo")); // true
