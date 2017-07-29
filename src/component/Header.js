import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {NavBar, Icon, Button, List} from 'antd-mobile';

export default class Header extends Component {

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        goBack: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  }

  onLeftClick = () => {
    if (!this.props.onLeftClick || !this.props.onLeftClick()) {
      const { history } = this.context.router;
      history.goBack();
    }
  };

  render() {
    return <NavBar {...this.props} onLeftClick={this.onLeftClick} />;
  }
}