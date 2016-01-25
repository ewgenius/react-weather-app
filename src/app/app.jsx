import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MyTheme from './theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import Firebase from 'firebase';

export default class App extends React.Component {
  constructor() {
    super();
  }

  getChildContext() {
    return {muiTheme: ThemeManager.getMuiTheme(MyTheme)};
  }

  componentWilMount() {
    this.firebase = new Firebase("https://react-periodic-table.firebaseio.com/items/");
  }

  render() {
    return (
      <div>
        <AppBar></AppBar>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};
