import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDraw: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDraw: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDraw: !prevState.showSideDraw};
    });
  }

  render() {
      return (
        <Aux>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
          <SideDrawer open={this.state.showSideDraw} closed={this.sideDrawerClosedHandler} />
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </Aux>

      );
  }
}

export default Layout;
