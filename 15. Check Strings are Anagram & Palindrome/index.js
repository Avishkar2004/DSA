function anagram(str1, str2) {
  let charcount = {};
  if (str1.lenght !== str2.lenght) {
    return false;
  }

  for (ch of str1) {
    charcount[ch] = (charcount[ch] || 0) + 1;
  }

  for (ch of str2) {
    if (!charcount[ch]) {
      return false;
    }
    charcount[ch]--;
  }
  return true;
}

console.log(anagram("hello", "ehllo")); // true
