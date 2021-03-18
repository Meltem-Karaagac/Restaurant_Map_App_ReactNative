import React from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";

import { detailStyle } from "../styles";

const RestaurantDetail = (props) => {

 function showPrice(lenght) {
  const priceLabel =[]
  for (let i = 0;i < lenght;i++) {
    priceLabel.push(<Icon key ={i} name='dollar' size= {25} color = '#33691e'/>)
  } 
  return priceLabel 
 }

  return (
    
    <Modal 
    isVisible={props.isVisible}
    style={{justifyContent:'flex-end',margin:10,marginHorizontal:10}}
    onBackdropPress ={props.onClose}
    swipeDirection='down'
    onSwipeComplete= {props.onClose}
    >
      <View style={detailStyle.container}>
        <View style ={detailStyle.line}/>
        <Text style={detailStyle.name}>{props.restaurant.name}</Text>
        <Text style={detailStyle.address}>{props.restaurant.address}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name="phone" size={20} color="crimson" />
            <Text style={detailStyle.phone}>{props.restaurant.phone}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            {showPrice(props.restaurant.price)}
          </View>
        </View>
        <Text>
          Upgrading this package often requires the font files linked to your
          projects to be updated as well. If the automatic linking works for
          you, running this again should update the fonts. Otherwise you need to
          follow the steps outlined in the installation section.
        </Text>
      </View>
    </Modal>
    
  );
};

export { RestaurantDetail };
