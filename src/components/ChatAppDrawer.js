import React from 'react';
import Drawer from 'material-ui/Drawer';
import ChatPeepsList from './ChatAppPeepsList';

export default class ChatAppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: props.open };
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Drawer open={this.props.open} docked={false} onRequestChange={(open) => this.setState({ open })} >
        <ChatPeepsList deviceList={this.props.deviceList} />
      </Drawer>
    );
  }
}
