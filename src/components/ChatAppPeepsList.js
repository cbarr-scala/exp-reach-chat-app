import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

import {
  red900,
  pink900,
  purple900,
  indigo900,
  cyan900,
  teal900,
  grey900,
  blueGrey900,
  brown900,
  orange900,
  deepOrange900,
  red500,
  pink500,
  purple500,
  indigo500,
  cyan500,
  teal500,
  grey500,
  blueGrey500,
  brown500,
  orange500,
  deepOrange500,
} from 'material-ui/styles/colors';

const listItemStyle = { margin: 5 };
const listItemSize = 30;

class ChatPeepsList extends React.Component {
  constructor(props) {
    super(props);

    const devices = props.deviceList;

    const backgroundColorsPool = [
      red900,
      pink900,
      purple900,
      indigo900,
      cyan900,
      teal900,
      grey900,
      blueGrey900,
      brown900,
      orange900,
      deepOrange900,
      red500,
      pink500,
      purple500,
      indigo500,
      cyan500,
      teal500,
      grey500,
      blueGrey500,
      brown500,
      orange500,
      deepOrange500,
    ];

    const backgroundColorsInUse = [];

    this.state = {
      devices,
      backgroundColorsPool,
      backgroundColorsInUse,
    };

    this.getRandomAvatarColor = this.getRandomAvatarColor.bind(this);
  }

  render() {
    return (
      <div>
        <Subheader>Devices in channel</Subheader>
        <Divider />
        <List>
          {this.state.devices.map(device =>
            (
              <ListItem
                primaryText={device.name}
                key={device.id}
                leftAvatar={
                  <Avatar
                    size={listItemSize}
                    style={listItemStyle}
                    backgroundColor={this.getRandomAvatarColor()}
                  >
                    {device.nickname}
                  </Avatar>
                }
              />
            ),
          )}
        </List>
      </div>
    );
  }

  getRandomAvatarColor() {
    const colors = this.state.backgroundColorsPool;

    const color = colors[Math.floor(Math.random() * colors.length)];

    return color;
  }
}

export default ChatPeepsList;
