import { countriesData } from '../utils/capitals';

test('check that first array has a city starting with "a"', () => {
  expect(countriesData[0][1][0]).toEqual('A');
});

test('check that last array has a city starting with "Z"', () => {
  expect(countriesData[countriesData.length - 1][1][0]).toEqual('Z');
});

test('length of array is 252', () => {
  expect(countriesData.length).toBe(252);
});
