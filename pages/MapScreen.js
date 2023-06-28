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

  
  const Woei = {
    "title": "Woei",
    "description": "Woei is a boutique sneaker store that offers a carefully curated selection of sneakers, clothing, and accessories.",
    latitude: 51.92274,
    longitude: 4.49352
  };
  const Ansh46 = {
    "title": "Ansh46",
      "description": "Ansh46 is a high-end sneaker store featuring a blend of luxury fashion and streetwear brands.",
      "latitude": 51.91925,
      "longitude":  4.47421
  };
  const Oqium = {
    "title": "Oqium",
    "description": "Its an sneaker store where u can find special releases and nba merch.",
    latitude: 51.92187,
    longitude: 4.47548
  };
  const Snipes ={
    "title": "Snipes",
    "description": "It's an german base sneaker brand that sells the newest sneakers in the game.",
    latitude: 51.92104,
    longitude: 4.47693
  };
  const FootLocker = {
    "title": "Foot Locker",
    "description": "A well-known sneaker retailer with a branch in Rotterdam, offering a variety of athletic footwear.",
    latitude: 51.92097,
    longitude: 4.47670
  }
  const Pirri = {
    "title": "Pirri",
    "description": "Sells shoes for resell, got the most exclusive sneakers in the game in store.",
    latitude: 51.91911,
    longitude: 4.47358
  }
  const Sport2000 ={
    "title": "Sport 2000",
    "description": "The Sport 2000 is a global retail chain specializing in athletic footwear and sportswear.",
    "latitude": 51.92060,
    "longitude": 4.48372
  }
  const JdSports = {
    "title": "JD Sports",
    "description": "Its an sport store where u can get most of you sport sneakers to run.",
    latitude: 51.91992,
    longitude: 4.47725
  }
  const SideStep = {
    "title": "Side Step",
    "description": "Discover the latest trends and classic sneaker styles at Side Step in Rotterdam.",
    latitude: 51.92026,
    longitude: 4.47736
  }
  const x21 = {
    "title": "x21",
    "description": "With a wide range of sneakers and exclusive cloathing brands, is a must-visit store in Rotterdam.",
    latitude: 51.92087,
    longitude: 4.48524
  }

   
const MapScreen = () => {
    return (
   <View style={styles.container}>
     <MapView
       style={styles.map}
       region={{
         latitude: 51.91972,
         longitude: 4.47778,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
      <Marker coordinate={Woei}><Image source={require('./Images/Woei.png')} style={{height: 20, width:21.5  }} /></Marker>
      <Marker coordinate={Ansh46}><Image source={require('./Images/anhs46.jpg')} style={{height: 20, width:21.5  }} /></Marker> 
      <Marker coordinate={Oqium} ><Image source={require('./Images/oqium.png')} style={{height: 20, width:21.5  }} /></Marker>
      <Marker coordinate={Snipes} ><Image source={require('./Images/snipes.png')} style={{height: 50, width:21.5  }} /></Marker>
      <Marker coordinate={FootLocker} ><Image source={require('./Images/footlockerlogo.png')} style={{height: 30, width: 21.5 }} /></Marker>
      <Marker coordinate={Pirri} ><Image source={require('./Images/pirri.png')} style={{height: 30, width:21.5  }} /></Marker>
      <Marker coordinate={Sport2000} ><Image source={require('./Images/sport2000.png')} style={{height: 30, width:21.5  }} /></Marker>
      <Marker coordinate={JdSports} ><Image source={require('./Images/jdsport.png')} style={{height: 20, width:21.5  }} /></Marker>
      <Marker coordinate={SideStep} ><Image source={require('./Images/sidesteplogo.png')} style={{height: 50, width:21.5  }} /></Marker>
      <Marker coordinate={x21} ><Image source={require('./Images/x21.png')} style={{height: 20, width:21.5  }} /></Marker>
     </MapView>

     <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: -125
            }}>
            Welkom op de map, zie hier boven alle sneakers stores
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
