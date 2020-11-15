
import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import SortingItem from '../sorting-item/sorting-item';
import {SortingType} from "../../const";
import {connect} from "react-redux";
import {updateSortingType, sortLowToHigh, sortHighToLow, sortPopular, sortTopRated} from "../../store/action";

class Sorting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sortingIsOpen: false,
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
    const {activeItem, sortPopularAction, sortLowToHighAction, sortHighToLowAction, sortTopRatedAction} = this.props;
    switch (activeItem) {
      case SortingType.POPULAR:
        sortPopularAction();
        break;
      case SortingType.LOW_TO_HIGH:
        sortLowToHighAction();
        break;
      case SortingType.HIGH_TO_LOW:
        sortHighToLowAction();
        break;
      case SortingType.TOP_RATED:
        sortTopRatedAction();
    }
  }

  _onSortingItemClick(evt) {
    this.props.updateSortingTypeAction(evt.target.dataset.sorting);

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
  updateSortingTypeAction: PropTypes.func.isRequired,
  sortPopularAction: PropTypes.func.isRequired,
  sortLowToHighAction: PropTypes.func.isRequired,
  sortHighToLowAction: PropTypes.func.isRequired,
  sortTopRatedAction: PropTypes.func.isRequired,
};


const mapStateToProps = ({DATA}) => {
  return {
    activeItem: DATA.sortingType,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateSortingTypeAction(sortingType) {
    dispatch(updateSortingType(sortingType));
  },
  sortLowToHighAction() {
    dispatch(sortLowToHigh());
  },
  sortPopularAction() {
    dispatch(sortPopular());
  },
  sortHighToLowAction() {
    dispatch(sortHighToLow());
  },
  sortTopRatedAction() {
    dispatch(sortTopRated());
  }
});


export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
