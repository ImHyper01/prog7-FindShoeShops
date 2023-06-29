import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, Switch, TouchableOpacity, State } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';
import { StyleSheet } from 'react-native';
import translations from '../languages/locales';


const SettingsPage = () => {
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('nederlands');

 

  const toggleLanguage = () => {
    const newLanguage = language === 'nederlands' ? 'engels' : 'nederlands';
    setLanguage(newLanguage);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.settingRow}>
        <Text style={[styles.settingLabel, { color: theme.color }]}>Donkere modus</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => {
            setDarkMode(value);
            EventRegister.emit('ChangeTheme', value);
          }}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={[styles.settingLabel, { color: theme.color }]}>Taal</Text>
        <TouchableOpacity onPress={toggleLanguage}>
          <Text style={[styles.languageText, { color: theme.color }]}>{language}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  settingLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  languageText: {
    fontSize: 18,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default SettingsPage;
