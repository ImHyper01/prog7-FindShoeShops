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


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


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

  const [darkMode, setDarkMode] = useState(false)

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
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#3c85d9' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
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
            }else if (route.name === 'SettingsStack') {
              iconName = focused
                ? 'cog'
                : 'cog-outline';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}>

        <Tab.Screen
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