import {Dimensions, StyleSheet} from 'react-native';

export const searchbarStyle = StyleSheet.create({

  container: {
backgroundColor:'white',
padding:5,
borderRadius:10,
width:Dimensions.get('screen').width  * 0.8,
top:10,
left:10,
alignSelf:'center',
flexDirection:'row',
alignItems:'center',
marginBottom:20


  },
  input: {
    padding:5,
  },
});

export const cityStyle = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    margin:10,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#e0e0e0',
    flexDirection:'row',
    alignItems:'center',
    
    


  },
  text: {
fontWeight:'bold',
marginLeft:5
  },
});

export const detailStyle = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,

  },
  name: {
      fontSize:20,
      fontWeight:'bold',
      color:'#424242',
  },
  address: {
      fontSize:12
  },
  phone: {
    fontWeight:'bold',
    marginLeft:5
  },
  line:{
    borderWidth:1,
    borderColor:'lightgray',
    width:Dimensions.get('screen').width / 3,
    alignSelf:'center',
   
    

  }
});

export const mapStyle =[
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#72ee7a"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ee9b9b"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#70e676"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#eab2ae"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ebf740"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c4c0c0"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#84d0f6"
      }
    ]
  }
]
