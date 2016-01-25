import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

import './Shell.scss';

export default class Shell extends React.Component {
  getInitialState() {
    return {
      sidebarOpen: false
    };
  }

  handleToggle() {
    console.log(this);
  }

  render() {
    return <div className="Shell">
      <button onClick={this.handleToggle}></button>
      /*<AppBar
        iconElementLeft={<IconButton onClick={this.handleToggle}><NavigationMenu/></IconButton>}/>
      <LeftNav open={this.state.sidebarOpen}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </LeftNav>*/
    </div>
  }
}
