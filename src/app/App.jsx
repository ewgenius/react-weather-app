import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MyTheme from './theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import Firebase from 'firebase';
import {Router, Route, Link, browserHistory} from 'react-router';
import Shell from './components/Shell/Shell.jsx';
import Login from './components/Login.jsx';

export default class App extends React.Component {
  constructor() {
    super();
  }

  getChildContext() {
    return {muiTheme: ThemeManager.getMuiTheme(MyTheme)};
  }

  componentWilMount() {
    this.firebase = new Firebase("https://react-weather-app.firebaseio.com/items/");
  }

  render() {
    return <div>
      <Router history={browserHistory}>
        <Route path="/" component={Shell}>
          <Route path="login" component={Login}></Route>
        </Route>
      </Router>
    </div>
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};
