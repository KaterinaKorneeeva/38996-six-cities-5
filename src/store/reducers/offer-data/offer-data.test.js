import {offerData} from "./offer-data";
import {ActionType} from "../../action";
import {offerList as mockOffers, comments as mockComments} from "../../../mocks/mocks";
import {offersByCity} from "../../../offers";

describe(`offerData reduser test`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(offerData(void 0, {})).toEqual({
      selectedCity: `Paris`,
      offerList: [],
      offerListByCity: [],
      sortingType: `POPULAR`,
      offerIdActive: 0,
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
      payload: mockOffers,
    })).toEqual({
      offerList: mockOffers,
      offerListByCity: offersByCity(mockOffers, `Paris`)

    });
  });

  it(`Reducer load offers nearby`, () => {
    expect(offerData({
      offersNearby: [],
    }, {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: mockOffers,
    })).toEqual({
      offersNearby: mockOffers
    });
  });

  it(`Reducer load offers favorite`, () => {
    expect(offerData({
      favoritesOffers: [],
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: mockOffers,
    })).toEqual({
      favoritesOffers: mockOffers
    });
  });

  it(`Reducer load offer comments`, () => {
    expect(offerData({
      comments: [],
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: mockComments,
    })).toEqual({
      comments: mockComments
    });
  });
});
