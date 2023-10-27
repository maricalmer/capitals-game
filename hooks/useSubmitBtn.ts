import { Map } from '../src/Map';
import { throwConfettis } from '../hooks/useConfetti';

const updateScore = (): void => {
  let userScore = document.querySelector(".form__score-value");
  if (userScore) {
    let score = parseInt(userScore.innerHTML);
    score++;
    userScore.innerHTML = score.toString();
  }
};

const reloadMap = (): void => {
  const map = new Map();
  checkAnswer(map);
}

export const checkAnswer = (map: Map): void => {
  const button = document.querySelector(".form__submit");
  button?.addEventListener("click", function myCallback(event) {
    event.preventDefault();
    const answer = map.marker.cityData["name"].toLowerCase();
    let inputField = (document.querySelector(".form__input") as HTMLInputElement | null);
    if (inputField?.value.toLowerCase() === answer) {
      updateScore();
      inputField.innerHTML = "";
      inputField.classList.remove("form__input--wrong-input");
      throwConfettis();
      reloadMap();
      this.removeEventListener('click', myCallback);
    } else {
      inputField?.classList.add("form__input--wrong-input");
    };
  })
}
