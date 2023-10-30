export const getScoreElement = (): HTMLElement | null => {
  return document.querySelector(".form__score-value");
};

export const updateScore = (): void => {
  const userScore = getScoreElement();
  if (userScore) {
    let score = parseInt(userScore.innerHTML);
    score++;
    userScore.innerHTML = score.toString();
  }
};
