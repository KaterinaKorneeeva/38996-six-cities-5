import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from 'react-redux';
class Map extends PureComponent {

  constructor(props) {
    super(props);

    this._map = null;
  }

  componentDidMount() {
    this._initMap();
    this._updateMap();
  }

  render() {
    return <section id="map" className = {this.props.type === `cities_map` ? `cities__map map` : `property__map map`}></section>;
  }

  componentDidUpdate() {
    this._updateMap();
  }

  _initMap() {
    const {cityCoord} = this.props;
    const zoomMap = 12;
    this._map = leaflet.map(`map`, {
      zoom: zoomMap,
      center: cityCoord,

      zoomControl: false,
      marker: true
    });
  }

  _updateMap() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    const zoomMap = 12;

    const {offers, cityCoord, offerIdActive} = this.props;

    this._map.setView(cityCoord, zoomMap);

    offers.forEach((offer) => {
      leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon: offer.id === offerIdActive ? iconActive : icon})
        .addTo(this._map);
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  cityCoord: PropTypes.arrayOf(PropTypes.number),
  type: PropTypes.string.isRequired,
  offerIdActive: PropTypes.number.isRequired
};


const mapStateToProps = ({DATA}) => ({
  offerIdActive: DATA.offerIdActive,
});


export {Map};
export default connect(mapStateToProps)(Map);
