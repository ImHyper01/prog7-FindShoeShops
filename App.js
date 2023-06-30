//hier importeer ik alles wat ik wil gebruiken in de applicatie
import  React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EventRegister } from 'react-native-event-listeners';
import theme from './theme/theme';
import themeContext from './theme/themeContext';

import HomeScreen from './pages/HomeScreen';
import ListScreen from './pages/ListScreen';
import SettingsScreen from './pages/SettingsScreen';
import MapScreen from './pages/MapScreen';
import SavedScreen from './savedItems/SavedScreen';

//navigatie bar gebruiken
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//hier roep ik de navigatie aan
function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        >
          <Stack.Screen
          name="Home"
          component={HomeScreen} />
      </Stack.Navigator>
  );
}
//hier roep ik de navigatie aan
function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen} />
    </Stack.Navigator>
  );
}
//hier roep ik de navigatie aan
function ListStack() {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="List"
        component={ListScreen} />
    </Stack.Navigator>
  );
}
//hier roep ik de navigatie aan
function SavedStack() {
  return (
  <Stack.Navigator
        initialRouteName="Save"
        screenOptions={{headerShown: false}}
        >
          <Stack.Screen
          name="Save"
          component={SavedScreen} />
      </Stack.Navigator>
  );
}
//hier roep ik de navigatie aan
function MapStack() {
  return (
    <Stack.Navigator
      initialRouteName="Map"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Map"
        component={MapScreen} />
    </Stack.Navigator>
  );
}

function App() {
  //hier begin ik aan de darkmodus
  const [darkMode, setDarkMode] = useState(false)
  //event listener toevoegen om te kunnen toggle tussen dark en light modus
  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)
      
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])
 
  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
    <NavigationContainer theme={darkMode === true ? DarkTheme: DefaultTheme}>
      <Tab.Navigator
      //styling van de navigator en het kop stukje van mijn applicatie
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#eb9e34' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            //Via hier gaat de routes werken om naar de verschillende pagina's te kunnen gaan. ik wijzig hier ook de icons
            if(route.name === 'HomeStack') {
              iconName = focused
                ? 'home-circle'
                : 'home-circle-outline';
            }else if(route.name === 'MapStack') {
              iconName = focused
                ? 'map-marker'
                : 'map-marker-outline';
            }else if(route.name === 'ListStack') {
              iconName = focused
                ? 'format-list-bulleted'
                : 'format-list-bulleted';
            }else if(route.name === 'SaveStack') {
              iconName = focused
                ? 'save'
                : 'save';
            }else if (route.name === 'SettingsStack') {
              iconName = focused
                ? 'cog'
                : 'cog-outline';
            }
            return (
              //icon name met groote en de kleur van de icon
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}>
        
        <Tab.Screen
        //Hier zorg ik ervoor als de bottom navigatie werkt 
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
          }}  />
        <Tab.Screen
          name="MapStack"
          component={MapStack}
          options={{
            tabBarLabel: 'Map',
            title: 'Map'
          }} /> 
        <Tab.Screen
          name="ListStack"
          component={ListStack}
          options={{
            tabBarLabel: 'List',
            title: 'List'
          }} /> 
          <Tab.Screen
          name="SavedStack"
          component={SavedStack}
          options={{
            tabBarLabel: 'Saved',
            title: 'Saved'
          }} /> 
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            title: 'Setting'
          }} />
      </Tab.Navigator>
    </NavigationContainer>
    </themeContext.Provider>
  );
}
export default App;