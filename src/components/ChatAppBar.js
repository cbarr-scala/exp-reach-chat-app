import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import ChatAppBarMenuConnected from './ChatAppBarMenuConnected';
import ChatAppBarMenuDisconnected from './ChatAppBarMenuDisconnected';

class ChatAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: true,
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event, connected) {
    this.setState({ connected });
  }

  render() {
    return (
      <div>
        <AppBar
          title="EXP React Chat App"
          iconElementRight={this.state.connected ? <ChatAppBarMenuConnected handleShowDeviceListClick={this.props.handleShowDeviceListClick} /> : <ChatAppBarMenuDisconnected />}
        />
      </div>
    );
  }
}

export default ChatAppBar;
