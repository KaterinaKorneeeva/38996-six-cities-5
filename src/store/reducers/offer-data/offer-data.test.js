import {offerData} from "./offer-data";
import {ActionType} from "../../action";
import {offerList, comments} from "../../../mocks/mocks";

describe(`offerData reduser test`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(offerData(void 0, {})).toEqual({
      offers: [],
      offerList: [],
      offer: [],
      offerListByCity: [],
      comments: [],
      offersNearby: [],
      favoritesOffers: []
    });
  });

  it(`Reducer should update offers by load offers`, () => {
    expect(offerData({
      offerList: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offerList,
    })).toEqual({
      offerListByCity: offerList,

    });
  });

  it(`Reducer load offers nearby`, () => {
    expect(offerData({
      offersNearby: [],
    }, {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offerList,
    })).toEqual({
      offersNearby: offerList
    });
  });

  it(`Reducer load offers favorite`, () => {
    expect(offerData({
      favoritesOffers: [],
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: offerList,
    })).toEqual({
      favoritesOffers: offerList
    });
  });

  it(`Reducer load offer comments`, () => {
    expect(offerData({
      comments: [],
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    })).toEqual({
      comments
    });
  });
});
