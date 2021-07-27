let randomNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
const short = function (messages) {
  document.querySelector(".sec").textContent = messages;
};

document.querySelector(".btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".box").value);
  console.log(guess);

  if (!guess) {
    short("No Number");
  } else if (guess === randomNumber) {
    short("Correct Number");
    document.querySelector(".High").textContent = score;
    document.querySelector(".doubt").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "red";
  } else if (guess !== randomNumber) {
    short(guess < randomNumber ? "Too Low" : "Too High");
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    short(" You Losse");
  }
});
document.querySelector(".btn1").addEventListener("click", function () {
  score = 20;
  short("Start Guessing");
  document.querySelector(".box").value = "";
  document.querySelector(".doubt").textContent = "?";
  document.querySelector(".score").textContent = score;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "grey";
});
