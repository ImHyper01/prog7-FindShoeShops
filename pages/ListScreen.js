import React, { useState, useEffect, useContext} from 'react'
import { StyleSheet, Marker ,Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import themeContext from '../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const List = () => {

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

return(
<ScrollView style={[styles.container, { color: theme.color }]} >
    <TouchableOpacity>
      { data.map((item) => {
        return(
          <View style={[styles.view, { color: theme.color }]}>
            <Text style={[styles.item, { color: theme.color }]}>{item.title}</Text>
          </View>
        )
      })}
  </TouchableOpacity> 
</ScrollView>
);
};

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
})

export default List;
