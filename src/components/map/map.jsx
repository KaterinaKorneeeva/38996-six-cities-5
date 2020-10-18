import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
class Map extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers, cityCoord} = this.props;
    const offerCords = offers.map((offer) => offer.coords);

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoomMap = 12;
    const map = leaflet.map(`map`, {
      zoom: zoomMap,
      center: cityCoord,

      zoomControl: false,
      marker: true
    });

    map.setView(cityCoord, zoomMap);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    offerCords.forEach((coords) => {
      leaflet
        .marker(coords, {icon})
        .addTo(map);
    });
  }

  render() {
    return <section id="map" className="cities__map map"></section>;
  }
  // componentDidUpdate(props) {
  //   const zoomMap = 12;
  //   const {cityCoord} = this.props;


  //   map.setView(cityCoord, zoomMap);

  //   leaflet
  //   .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
  //     attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  //   })
  //   .addTo(map);

  //   offerCords.forEach((coords) => {
  //     leaflet
  //       .marker(coords, {icon})
  //       .addTo(map);
  //   });
  // };
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  cityCoord: PropTypes.array.isRequired,
};

export default Map;
