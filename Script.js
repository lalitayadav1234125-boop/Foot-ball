let score = 0;

document.getElementById("ball").onclick = function() {
  let outcome = Math.random(); // 50-50 chance
  if (outcome > 0.5) {
    document.getElementById("result").textContent = "GOAL! 🎯";
    score++;
  } else {
    document.getElementById("result").textContent = "Miss 😞";
  }
  document.getElementById("score").textContent = score;
}
