export const offersByCity = (offers = [], city = `Paris`) => {
  return offers.filter((item) => item.city.name === city
  );
};
export const offerById = (offers = [], id = 6) => {
  return offers.filter((item) => item.id === id)[0];
};

const getIndex = (array, item) => {
  return array.findIndex((it) => it.id === item.id);
};

export const replaceItem = (array, item) => {
  const itemIndex = getIndex(array, item);
  return [
    ...array.slice(0, itemIndex),
    item,
    ...array.slice(itemIndex + 1)
  ];
};

export const getCoordByCity = (city) => {
  switch (city) {
    case `Paris`:
      return [48.88, 2.35];

    case `Brussels`:
      return [50.84, 4.35];

    case `Hamburg`:
      return [53.58, 10.0];

    case `Amsterdam`:
      return [52.38, 4.9];

    case `Dusseldorf`:
      return [51.22, 6.77];
    default:
      return [48.88, 2.35];
  }
};

export const adaptData = (offer) => {
  return Object.assign({}, offer, {
    isPremium: offer.is_premium,
    isFavorite: offer.is_favorite,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,

    host: Object.assign({}, offer.host, {
      avatar: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    }),
  });
};

export const adaptCommentData = (comment) => {
  return Object.assign({}, comment, {
    user: Object.assign({}, comment.user, {
      avatarUrl: comment.user.avatar_url
    }),
  });
};
