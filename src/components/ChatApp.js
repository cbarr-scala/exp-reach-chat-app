import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ChatAppDrawer from './ChatAppDrawer';
import ChatAppBar from './ChatAppBar';

export default class ChatApp extends React.Component {
  constructor(props) {
    super(props);

    this.chatAppDrawer = null;

    this.state = {
      deviceList: [
        { name: 'Chrome Device', nickname: 'C', id: 'chrome-device-01' },
        { name: 'Safari Device', nickname: 'S', id: 'safari-device-01' },
        { name: 'Android Device', nickname: 'D', id: 'android-device-01' },
      ],
      deviceListOpen: false,
    };

    this.handleShowDeviceListClick = this.handleShowDeviceListClick.bind(this);
  }

  handleShowDeviceListClick() {
    this.setState({ deviceListOpen: !this.state.deviceListOpen });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <ChatAppBar handleShowDeviceListClick={this.handleShowDeviceListClick} />
          <ChatAppDrawer deviceList={this.state.deviceList} open={this.state.deviceListOpen} />
        </div>
      </MuiThemeProvider>
    );
  }
}

