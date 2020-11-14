import React from "react";
import PropTypes from "prop-types";
import {CITY_LIST} from "../../const";

const CityList = (props) => {
  const {selectedCity, toggleCity} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITY_LIST.map((city, i) =>
            <li key={`location-${i}`}
              className="locations__item"
              onClick={(evt) => {
                evt.preventDefault();
                toggleCity(city);
              }}
            >
              <a className = {selectedCity === city ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#">
                <span>{city}</span>
              </a>
            </li>

          )}

        </ul>
      </section>
    </div>
  );
};
CityList.propTypes = {
  toggleCity: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired,
};
export default CityList;
