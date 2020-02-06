import React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Color';

const CustomHeaderButton = props => {
  return (
    <HeaderButtons
      {...props}
      IconComponent={Ionicons}
      iconSize={25}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButton;
