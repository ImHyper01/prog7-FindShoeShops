
import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, Switch, TouchableOpacity, useColorScheme } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';
import { StyleSheet } from 'react-native-web';
import { Colors } from 'react-native/Libraries/NewAppScreen';




const SettingsPage = () => {

    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('nederlands');

    const toggleLanguage = () => {
      const newLanguage = language === 'nederlands' ? 'engels' : 'nederlands';
      setLanguage(newLanguage);
    };


  return (
  <View>
      <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <Text style={[styles.text, {color: theme.color}]}>Donkere modus</Text>
        <Switch value={darkMode} 
        onValueChange={(value) => {
          setDarkMode(value);
          EventRegister.emit('ChangeTheme', value)
        }} 
      />
    </View>

    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <Text style={[styles.text, {color: theme.color}]}>Taal</Text>
        <TouchableOpacity onPress={toggleLanguage}>
          <Text>{language}</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  
})

export default SettingsPage;