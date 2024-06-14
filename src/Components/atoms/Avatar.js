import React from 'react';
import {Image} from 'react-native';

const defaultImage = require('../../Assets/user.png');

const Avatar = ({propsStyle, images}) => {
  const isHttpsUrl =
    images && (images.startsWith('https') || images.startsWith('http://'));
  const imageUrl = isHttpsUrl ? {uri: images} : defaultImage;
  return <Image style={propsStyle} source={imageUrl} />;
};

export default Avatar;
