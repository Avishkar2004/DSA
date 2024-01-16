function fun(n) {
 if(n > 0) {
  console.log(" " + n);
  // calling once
  fun( n - 1)
  // calling twice
  fun(n - 1)
 }
}

var x = 3
fun(x)