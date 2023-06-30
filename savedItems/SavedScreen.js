import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SavedScreen = () => {
    const [savedStore, setSavedStores] = useState([]);

    useEffect(() => {
        getSavedStores();
      }, []);

      const getSavedStores = async () => {
        try {
          const savedStoreJson = await AsyncStorage.getItem('savedStore');
          if (savedStoreJson !== null) {
            setSavedStores(JSON.parse(savedStoreJson));
          }
        } catch (error) {
          console.error('Error retrieving saved stores:', error);
        }
      };

      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 16 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.header}>
                Your favorites
              </Text>
              {savedStore.length > 0 ? (
            savedStore.map((store, index) => (
              <View key={index} style={{ marginBottom: 10 }} >
                <Text styles={styles.textItem}>{store}</Text>
              </View>
            ))
          ) : (
            <Text>No saved stores found.</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },

  textItem: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SavedScreen;