import { Map } from '../src/Map';
import { throwConfettis } from '../hooks/useConfetti';
import { updateScore } from '../hooks/useScore';

const reloadWithNewMap = (): void => {
  const map = new Map();
  attachClickHandler(map);
}

export const handleButtonClick = (event: Event, map: Map): void => {
  event.preventDefault();
  const answer = map.marker.cityData["name"].toLowerCase();
  let inputField = (document.querySelector(".form__input") as HTMLInputElement | null);
  if (inputField?.value.toLowerCase() === answer) {
    updateScore();
    inputField.value = "";
    inputField.classList.remove("form__input--wrong-input");
    throwConfettis();
    reloadWithNewMap();
  } else {
    inputField?.classList.add("form__input--wrong-input");
  };
}

export const attachClickHandler = (map: Map): void => {
  const button = document.querySelector(".form__submit");
  button?.addEventListener("click", (event) => handleButtonClick(event, map));
}
