function roleDice() {
  var randomNum1 = Math.floor(Math.random() * 6) + 1;
  var randomNum2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").src = "images/dice" + randomNum1 + ".png";

  document.querySelector(".img2").src = "images/dice" + randomNum2 + ".png";

  if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "晃の勝ち！💁🏽‍♂️";
  } else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "優の勝ち！🙋🏻‍♀️";
  } else {
    document.querySelector("h1").innerHTML = "引き分け！🫱🏻‍🫲🏼";
  }
}
roleDice();

