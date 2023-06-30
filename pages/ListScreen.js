//hier importeer ik alles wat ik wil gebruiken in de applicatie
import React, { useState, useEffect, useContext} from 'react'
import { StyleSheet, Marker ,Text, TouchableOpacity, View, SafeAreaView,Image, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import themeContext from '../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const List = () => {
  //hier roep ik de dark modus aan via de theme
  //Hier maak ik variables om dadelijk de data te kunnen fetchen
  const theme = useContext(themeContext);
  const [data, setData] = useState([]);
  const [savedStores, setSavedStores] = useState([]);

  //hier fetch ik data uit de json file die op de stud hosted staat
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


const getSavedStores = async () => {
  try {
    const savedStoreJson = await AsyncStorage.getItem('savedStore');
    if (savedStoreJson !== null) {
      setSavedStores(JSON.parse(savedStoreJson));
    }
  } catch (error) {
    console.error('Error retrieving saved cars:', error);
  }
};

const handleSaveStore = async (storeTitle) => {
  try {
    const index = savedStores.indexOf(storeTitle);
    if (index === -1) {
      // Car is not saved, add it to the saved cars list
      const updatedSavedStore = [...savedStores, storeTitle];
      setSavedStores(updatedSavedStore);

      await AsyncStorage.setItem('savedStore', JSON.stringify(updatedSavedStore));
      alert('Store saved successfully!');
    } else {
      // Car is already saved, remove it from the saved cars list
      const updatedSavedStore = savedStores.filter((savedStore) => savedStore !== storeTitle);
      setSavedStores(updatedSavedStore);

      await AsyncStorage.setItem('savedStore', JSON.stringify(updatedSavedStore));
      alert('Store removed from favorites!');
    }
  } catch (error) {
    console.error('Error saving store:', error);
  }
};

const isStoreSaved = (storeTitle) => {
  return savedStores.includes(storeTitle);
};

//Hier haal ik de functie op, om zo de data te kunnen gebruiken
useEffect(() => {
  fetchMarkers();
  getSavedStores();
}, []);

return(
  //hier laat ik de data zien in een lijst vorm
<ScrollView style={[styles.container, { color: theme.color }]} >
    <TouchableOpacity>
      { data.map((item) => {
        return(
          <View style={[styles.view, { color: theme.color }]}>
            <Text style={[styles.item, { color: theme.color }]}>{item.title}</Text>
            <Text style={[styles.discription, { color: theme.color }]}>{item.description}</Text>

            <TouchableOpacity onPress={() => handleSaveStore(item.title)}>
            <Icon
                    name={isStoreSaved(item.title) ? 'cards-heart' : 'cards-heart-outline'}
                    size={30}
                    color={isStoreSaved(item.title) ? 'red' : 'black'}
                  />
            </TouchableOpacity>
          </View>
          )
        })}
      </TouchableOpacity> 

      <TouchableOpacity
          style={styles.heartButton}
          onPress={() => navigation.navigate('Saved')}
        >
          <Icon name="cards-heart" size={30} color="red" />
        </TouchableOpacity>

    </ScrollView>
  );
};
//style changes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    fontSize: 20,
  },

  discription: {
    fontSize: 10,
  },

  ScrollView: {
    
  },  
})

export default List;
