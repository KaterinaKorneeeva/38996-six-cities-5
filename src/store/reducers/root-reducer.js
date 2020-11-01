import {combineReducers} from "redux";
// import {gameProcess} from "./game-process/game-process";
import {offerData} from "./offer-data/offer-data";

export const NameSpace = {
  DATA: `DATA`,
  // GAME: `GAME`,
};

export default combineReducers({
  [NameSpace.DATA]: offerData,
  // [NameSpace.GAME]: gameProcess,
});
