import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from "../../const";

const User = ({authorizationStatus, handleLoginClick, userInfo}) => {
  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#" onClick={handleLoginClick}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        {authorizationStatus === AuthorizationStatus.NO_AUTH
          ? <span className="header__login">Sign in</span>
          : <span className="header__user-name user__name">{userInfo.email}</span>
        }
      </a>
    </li>
  );
};

User.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
};

const mapStateToProps = (({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userInfo: USER.userInfo
}));

export {User};
export default connect(mapStateToProps)(User);
