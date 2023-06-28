import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const List = ({ markers, onFavoritePressn, onMarkerPress}) => {
    const renderListItem = ({ Item }) => {
        return (
            <View style={StyleSheet.listItem}>
                <Text style={StyleSheet.title}>
                    {Item.title}
                </Text>
                <TouchableOpacity onPress={() => onFavoritePress(item.id)}>
                <Text style={styles.buttonText}>{item.favorite ? 'Unfavorite' : 'Favorite'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onMarkerPress(item.id)}>
                <Text style={styles.buttonText}>Go to Marker</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <FlatList
        data={markers}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    );
};

const styles = StyleSheet.create({
    list: {
      flex: 1,
    },
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonText: {
      fontSize: 14,
      color: 'blue',
    },
  });


export default List;
