export const offersByCity = (offers = [],  city = "Paris") => {

  console.log('city',offers);
  return offers.filter((item) => item.city.name === city
  );
};
export const offerById = (offers = [], id = 6) => {
    console.log('ididid',id);
    return offers.filter((item) => item.id === id)[0];
};

export const getCoordByCity = (city) => {
  switch (city) {
    case `Paris`:
      return [48.88, 2.35];

    case `Brussels`:
      return [50.8488, 4.35];

    case `Hamburg`:
      return [53.58333, 10.0];

    case `Amsterdam`:
      return [52.38333, 4.9];

    case `Dusseldorf`:
      return [51.38333, 6.46];
    default:
      return [48.88, 2.35];
  }


};
