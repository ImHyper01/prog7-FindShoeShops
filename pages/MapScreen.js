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
    latitude: 51.98866299707557,
    longitude: 4.1074257216358525,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const TwoSeaons = {
    latitude: 51.988184637289315,
    longitude: 4.106383320478913,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const Villa = {
    latitude: 51.988011123756976,
    longitude: 4.105871599572002,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
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
