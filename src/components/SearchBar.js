import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"

import {searchbarStyle} from '../styles';

const SearchBar = (props) => {
  return (
    <View style={searchbarStyle.container}>
      <Icon name = 'ios-search' size = {20} color= 'crimson'/>
      <TextInput
      style={searchbarStyle.input}
      placeholder = 'search a city'
      onChangeText ={(value => props.onSearchText(value))}
      />
    </View>
  );
};

export {SearchBar};
