export const updateScore = (): void => {
  let userScore = document.querySelector(".form__score-value");
  if (userScore) {
    let score = parseInt(userScore.innerHTML);
    score++;
    userScore.innerHTML = score.toString();
  }
};
