import { updateScore } from '../hooks/useScore';

describe('updateScore', () => {
  test('increments score value', () => {
    const mockElement = document.createElement('div');
    mockElement.className = 'form__score-value';
    mockElement.innerHTML = '0';
    document.querySelector = jest.fn(() => mockElement);
    updateScore();
    expect(mockElement.innerHTML).toBe('1');
  });

  test('does nothing if score element not found', () => {
    document.querySelector = jest.fn(() => null);
    updateScore();
    expect(document.querySelector).toHaveBeenCalledWith('.form__score-value');
  });
});
