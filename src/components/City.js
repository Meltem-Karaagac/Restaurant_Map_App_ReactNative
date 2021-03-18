import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons'

import { cityStyle } from '../styles';

const City = (props) => {
  return (
   <TouchableOpacity style={cityStyle.container}
   onPress = {props.onSelect}
   >
     <Icon name = 'ios-home' size = {20} color ='crimson'/>
     <Text style={cityStyle.text}>{props.CityName}</Text>
   </TouchableOpacity>
  );
};

export {City};
