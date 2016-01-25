import React from 'react';
import Card from 'material-ui/lib/card/card';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Login extends React.Component {
  render() {
    return <div>
      <RaisedButton label="login" primary={true} backgroundColor="#FF0000"/>
    </div>
  }
}
