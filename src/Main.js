import Axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { City, RestaurantDetail, SearchBar } from "./components";
import {mapStyle} from './styles'

let originalList = [];
const Main = (props) => {
  const [cityList, setCityList] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const mapRef = useRef(null);
  const fetchData = async () => {
    const { data } = await Axios.get(
      "https://opentable.herokuapp.com/api/cities"
    );

    setCityList(data.cities);
    originalList = [...data.cities];
  };

  const searchText = (value) => {
    const filteredList = originalList.filter((item) => {
      const userText = value.toUpperCase();
      const cityName = item.toUpperCase();
      return cityName.indexOf(userText) > -1;
    });
    setCityList(filteredList);
  };

  const citySelect = async (city) => {
    const {
      data: { restaurants },
    } = await Axios.get(
      "https://opentable.herokuapp.com/api/restaurants?city=" + city
    );
    setRestaurants(restaurants);
   
    const restaurantsCoordinates = restaurants.map((item) => {
      return {
        latitude: item.lat,
        longitude: item.lng,
      };
    });
  
 
    mapRef.current.fitToCoordinates(restaurantsCoordinates, {
      edgePadding: {
        top: 50,
        right: 25,
        bottom: 25,
        left: 25,
      },
    });
  };

  const onRestaurantselect = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setModalFlag(true);
  };
  


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapRef}
          customMapStyle={mapStyle}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {restaurants.map((r, index) => (
            <Marker
              key={index}
              image={require('./assets/3.png')}
              coordinate={{
                latitude: r.lat,
                longitude: r.lng,
              }}
              onPress={() => onRestaurantselect(r)}
            />
          ))}
        </MapView>
        <View style={{ position: "absolute" }}>
          <SearchBar onSearchText={searchText} />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            data={cityList}
            renderItem={({ item }) => (
              <City CityName={item} onSelect={() => citySelect(item)} />
            )}
          />

          <RestaurantDetail
            isVisible={modalFlag}
            restaurant={selectedRestaurant}
            onClose={() => setModalFlag(false)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
