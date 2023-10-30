import { pickRandomCapital } from '../utils/randomCapital';

test('pickRandomCapital function to return different randomCapital objects', () => {
  const firstRandomCapital = pickRandomCapital();
  const secondRandomCapital = pickRandomCapital();
  const thirdRandomCapital = pickRandomCapital();
  expect(firstRandomCapital["country"]).not.toBe(secondRandomCapital["country"]);
  expect(secondRandomCapital["country"]).not.toBe(thirdRandomCapital["country"]);
  expect(thirdRandomCapital["country"]).not.toBe(firstRandomCapital["country"]);
});
