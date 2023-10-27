import { countriesData } from '../utils/capitals';

export const pickRandomCapital = (): { country: string; name: string; lat: number; lng: number } => {
  const randomIndex = Math.floor(Math.random() * 251);
  const capitalData = {
    country: countriesData[randomIndex][0],
    name: countriesData[randomIndex][1],
    lat: countriesData[randomIndex][2],
    lng: countriesData[randomIndex][3]
  }
  return capitalData;
};
