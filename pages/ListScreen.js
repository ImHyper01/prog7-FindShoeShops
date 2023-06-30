//hier importeer ik alles wat ik wil gebruiken in de applicatie
import React, { useState, useEffect, useContext} from 'react'
import { StyleSheet, Marker ,Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import themeContext from '../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const List = () => {
  //hier roep ik de dark modus aan via de theme
  //Hier maak ik variables om dadelijk de data te kunnen fetchen
  const theme = useContext(themeContext);
  const [data, setData] = useState([]);

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

//Hier haal ik de functie op, om zo de data te kunnen gebruiken
useEffect(() => {
  fetchMarkers();
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
          </View>
        )
      })}
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
