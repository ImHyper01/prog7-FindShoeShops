import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import themeContext from '../theme/themeContext';


const MapScreen = () => {

  const theme = useContext(themeContext);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    fetchMarkers();
  }, []);

  const fetchMarkers = async () => {
    try {
      const response = await fetch('map.json');
      const data = await response.json();
      setMarkers(data.markers);
    } catch (error) {
      console.error('Error fetching data:', error);
  }
};
 
  return (
      <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <MapView style={styles.map}> 
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ 
              title: marker.title,
              description: marker.description,
              latitude: marker.latitude,
              longitude: marker.longitude,
             }}
          />
        ))}
      </MapView>
    </View>
    );
  };
  

  //  <View style={[styles.container, {backgroundColor: theme.backgroundColor} ]}>
  //    <MapView
  //      style={styles.map}
  //      region={{
  //        latitude: 51.91972,
  //        longitude: 4.47778,
  //        latitudeDelta: 0.015,
  //        longitudeDelta: 0.0121,
  //      }}
  //    >
  //     {/* <Marker coordinate={Woei}><Image source={require('./Images/Woei.png')} style={{height: 20, width:21.5  }} /></Marker>
  //     <Marker coordinate={Ansh46}><Image source={require('./Images/anhs46.jpg')} style={{height: 20, width:21.5  }} /></Marker> 
  //     <Marker coordinate={Oqium} ><Image source={require('./Images/oqium.png')} style={{height: 20, width:21.5  }} /></Marker>
  //     <Marker coordinate={Snipes} ><Image source={require('./Images/snipes.png')} style={{height: 50, width:21.5  }} /></Marker>
  //     <Marker coordinate={FootLocker} ><Image source={require('./Images/footlockerlogo.png')} style={{height: 30, width: 21.5 }} /></Marker>
  //     <Marker coordinate={Pirri} ><Image source={require('./Images/pirri.png')} style={{height: 30, width:21.5  }} /></Marker>
  //     <Marker coordinate={Sport2000} ><Image source={require('./Images/sport2000.png')} style={{height: 30, width:21.5  }} /></Marker>
  //     <Marker coordinate={JdSports} ><Image source={require('./Images/jdsport.png')} style={{height: 20, width:21.5  }} /></Marker>
  //     <Marker coordinate={SideStep} ><Image source={require('./Images/sidesteplogo.png')} style={{height: 50, width:21.5  }} /></Marker>
  //     <Marker coordinate={x21} ><Image source={require('./Images/x21.png')} style={{height: 20, width:21.5  }} /></Marker> */}
  //    </MapView>

  //    <Text style={[styles.text, {color: theme.color}]}> Welkom op de map, zie hier boven alle sneakers stores </Text>
  //  </View>

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

    text: {
      fontSize: 25,
      textAlign: 'center',
      marginBottom: -125
    },
   });
   
export default MapScreen
