import JSConfetti from 'js-confetti';

export const throwConfettis = (): void => {
  const colors = ['#B4436C', '#114B5F', '#A53860', '#2F4858', '#7C77B9', '#574B60', '#2D3319', '#673C4F', '#13293D', '#1E3231'];
  const randomColor = colors[colors.length * Math.random() | 0];
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    confettiColors: [randomColor]
  });
};
