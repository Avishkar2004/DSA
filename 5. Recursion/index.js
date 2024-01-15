let money = 100;
let totalapple = 0;

function buyApple(x) {
  // console.log(x);
  if (x > 0) {
    console.log("I Have", x, "RS", totalapple);
    buyMore(x);
  } else {
    console.log("I dont have more money", totalapple);
  }
}

function buyMore(x) {
  totalapple++;
  buyApple(x - 20);
  // console.log("Buy More", x);
}

buyApple(money);
