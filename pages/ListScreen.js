import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect} from 'react'
import { StyleSheet, Marker ,Text, TouchableOpacity, View, Image, ScrollView, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-web';
import themeContext from '../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const List = () => {

  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState({});

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

const handleFavoriteToggle = (itemId) => {
  if (favorites.includes(itemId)) {
    setFavorites(favorites.filter((id) => id !== itemId));
  } else {
    setFavorites([...favorites, itemId]);
  }
};

const renderItems = () => {
  const items = [];
  for (let i = 1; i <= 10; i++) {
    const itemId = `item_${i}`;
    const isFavorite = favorites.includes(itemId);

    items.push(
      <View key={itemId} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>{`Item ${i}`}</Text>
        <TouchableOpacity onPress={() => handleFavoriteToggle(itemId)}>
          <Icon
            name={isFavorite ? 'cards-heart' : 'cards-heart-outline'}
            size={24}
            color={isFavorite ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>
    );  
}
return items;
};

useEffect(() => {
  fetchMarkers();
}, []);

return(
<ScrollView style={styles.container}>
    <TouchableOpacity>
      { data.map((item) => {
        return(
          <View>
            <Text style={styles.item}>{item.title}</Text>
            <View>{renderItems()}</View>
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
    backgroundColor: '#fff',
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
