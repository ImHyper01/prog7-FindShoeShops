import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import themeContext from '../theme/themeContext';

import * as Location from 'expo-location';


const MapScreen = () => {

  const theme = useContext(themeContext);
  const [data, setData] = useState([]);


  const fetchMarkers = async () => {
    try {
      const response = await fetch('https://stud.hosted.hr.nl/1027469/map.json');
      const json = await response.json();
      setData(json.index);
    } catch (error) {
      console.error(error);
  } finally {
    setLoading(false)
  }
};

useEffect(() => {
  fetchMarkers();
}, []);


useEffect(() => {
  (async () => {
    
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);

    setPin({
      latitude: location.coords.latitude,
      longitude: location.longitude,
    });
  })();
}, []);


 
  return (
  <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
    <MapView style={styles.map} region={{
      latitude: 51.91972,
              longitude: 4.47778,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          onUserLocationChange={(e) => {
            e.nativeEvent
          }}
          > 
          {data.map((item) => 
      <Marker 
          coordinate={{
            latitude: item.latitude,
             longitude: item.longitude,
              latitudeDelta: 0.01,
               longitudeDelta:0.01}}
               title={item.title}
               description= {item.description}>
               </Marker>)}
      </MapView>
      <Text style={[styles.text, {color: theme.color}]}> Welkom op de map, zie hier boven alle sneakers stores </Text>
    </View>
    );
  };
  
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
    marker: {
      height: 50,
      width: 21.50,
    },
   });
   
export default MapScreen;
