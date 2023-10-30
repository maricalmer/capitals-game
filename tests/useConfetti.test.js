import { throwConfettis } from '../hooks/useConfetti';
import JSConfetti from 'js-confetti';

jest.mock('js-confetti');

describe('throwConfettis', () => {
  test('adds confetti with random color', () => {
    const mockColor = '#B4436C';
    const mockJSConfetti = { addConfetti: jest.fn() };
    JSConfetti.mockImplementation(() => mockJSConfetti);
    Math.random = jest.fn(() => 0);
    throwConfettis();
    expect(mockJSConfetti.addConfetti).toHaveBeenCalledWith({
      confettiColors: [mockColor]
    });
  });
});
