
import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import SortingItem from '../sorting-item/sorting-item';
import {SortingType} from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

class Sorting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sortingIsOpen: true,
      offerList: [],

    };
    this._handleSortingClick = this._handleSortingClick.bind(this);
    this._onSortingItemClick = this._onSortingItemClick.bind(this);
  }

  render() {
    const sortingTypeNames = Object.values(SortingType);
    const {activeItem} = this.props;
    const openClassName = this.state.sortingIsOpen ? `places__options--opened` : ``;

    return (
      <Fragment>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0" onClick={this._handleSortingClick}>
            {activeItem}
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className={`places__options places__options--custom ${openClassName}`}>
            {sortingTypeNames.map((type, i) =>
              <SortingItem
                itemName={type}
                key={i}
                onSortingItemClick={this._onSortingItemClick}
                isActive={activeItem === type}
              />
            )}
          </ul>
        </form>
      </Fragment>
    );
  }

  componentDidUpdate() {
    const {activeItem, sortPopular, sortLowToHigh, sortHighToLow, sortTopRated} = this.props;
    switch (activeItem) {
      case SortingType.POPULAR:
        sortPopular();
        break;
      case SortingType.LOW_TO_HIGH:
        sortLowToHigh();
        break;
      case SortingType.HIGH_TO_LOW:
        sortHighToLow();
        break;
      case SortingType.TOP_RATED:
        sortTopRated();
    }
  }

  _onSortingItemClick(evt) {
    this.props.updateSortingType(evt.target.dataset.sorting);

    this.setState((state) => ({
      sortingIsOpen: !state.sortingIsOpen,
    }));
  }

  _handleSortingClick() {
    this.setState((state) => {
      return {
        sortingIsOpen: !state.sortingIsOpen,
      };
    });
  }
}

Sorting.propTypes = {
  activeItem: PropTypes.string.isRequired,
  updateSortingType: PropTypes.func.isRequired,
  sortPopular: PropTypes.func.isRequired,
  sortLowToHigh: PropTypes.func.isRequired,
  sortHighToLow: PropTypes.func.isRequired,
  sortTopRated: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  return {
    activeItem: state.sortingType,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateSortingType(sortingType) {
    dispatch(ActionCreator.updateSortingType(sortingType));
  },
  sortLowToHigh() {
    dispatch(ActionCreator.sortLowToHigh());
  },
  sortPopular() {
    dispatch(ActionCreator.sortPopular());
  },
  sortHighToLow() {
    dispatch(ActionCreator.sortHighToLow());
  },
  sortTopRated() {
    dispatch(ActionCreator.sortTopRated());
  }
});


export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
