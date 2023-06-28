import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from "react-native-maps";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image
  } from 'react-native';

  
  const BeachClub = {
    "title": "Sneaker World",
    "description": "A leading sneaker store in Rotterdam offering a wide range of popular brands.",
    "latitude": 51.9225,
    "longitude": 4.47917
  };
  const TwoSeaons = {
    "title": "Kicks Avenue",
    "description": "Discover the latest sneaker releases and limited editions at Kicks Avenue in Rotterdam.",
    "latitude": 51.91833,
    "longitude": 4.47667
  };
  const Villa = {
    "title": "SoleJunction",
    "description": "Find your perfect pair of sneakers at Sole Junction, a trendy store located in the heart of Rotterdam.",
    "latitude": 51.92222,
    "longitude": 4.48028
  };
  const Bing = {
    latitude:  51.98733719450499,
    longitude: 4.103833120679355,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const FF = {
    latitude: 51.98703266371214,
    longitude: 4.103351195779682,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };



  // {
  //   "stores": [
  //     {
  //       "title": "Sneaker World",
  //       "description": "A leading sneaker store in Rotterdam offering a wide range of popular brands.",
  //       "latitude": 51.9225,
  //       "longitude": 4.47917
  //     },
  //     {
  //       "title": "Kicks Avenue",
  //       "description": "Discover the latest sneaker releases and limited editions at Kicks Avenue in Rotterdam.",
  //       "latitude": 51.91833,
  //       "longitude": 4.47667
  //     },
  //     {
  //       "title": "Sole Junction",
  //       "description": "Find your perfect pair of sneakers at Sole Junction, a trendy store located in the heart of Rotterdam.",
  //       "latitude": 51.92222,
  //       "longitude": 4.48028
  //     },
  //     {
  //       "title": "Sneaker Central",
  //       "description": "Visit Sneaker Central for a wide selection of sneakers and streetwear in Rotterdam.",
  //       "latitude": 51.92056,
  //       "longitude": 4.4775
  //     },
  //     {
  //       "title": "Foot Locker",
  //       "description": "A well-known sneaker retailer with a branch in Rotterdam, offering a variety of athletic footwear.",
  //       "latitude": 51.91972,
  //       "longitude": 4.47778
  //     },
  //     {
  //       "title": "Urban Kicks",
  //       "description": "Experience the urban sneaker culture at Urban Kicks, located in a vibrant neighborhood of Rotterdam.",
  //       "latitude": 51.92444,
  //       "longitude": 4.4825
  //     },
  //     {
  //       "title": "Sneaker Spot",
  //       "description": "Sneaker Spot offers a curated selection of sneakers and accessories in Rotterdam.",
  //       "latitude": 51.9175,
  //       "longitude": 4.47444
  //     },
  //     {
  //       "title": "Fresh Soles",
  //       "description": "Fresh Soles is the go-to destination for sneaker enthusiasts in Rotterdam.",
  //       "latitude": 51.91667,
  //       "longitude": 4.47139
  //     },
  //     {
  //       "title": "Sneak Avenue",
  //       "description": "Discover the latest trends and classic sneaker styles at Sneak Avenue in Rotterdam.",
  //       "latitude": 51.92139,
  //       "longitude": 4.47639
  //     },
  //     {
  //       "title": "Sneaker District",
  //       "description": "With a wide range of sneakers and exclusive releases, Sneaker District is a must-visit store in Rotterdam.",
  //       "latitude": 51.92194,
  //       "longitude": 4.47472
  //     }
  //   ]
  // }
  



const MapScreen = () => {
    return (
   <View style={styles.container}>
     <MapView
       style={styles.map}
       region={{
         latitude: 51.99098,
         longitude: 4.10808,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
      <Marker coordinate={BeachClub}><Image source={require('./Images/pngwing.png')} style={{height: 50, width:21.5  }} /></Marker>
      <Marker coordinate={Bing} />
      <Marker coordinate={FF} />
      <Marker coordinate={Villa} />
      <Marker coordinate={TwoSeaons} />
     </MapView>

     <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: -125
            }}>
            You are on Map Screen
          </Text>
   </View>
    );
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
   
export default MapScreen
