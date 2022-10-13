import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import TagDetailsScreen from './screens/TagDetailsScreen';

import { rootReducer } from './Reducer';


const store = configureStore({
  reducer: rootReducer, 
});

function ListTabStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Details' component={DetailsScreen}/>
    </Stack.Navigator>
  )
}

function SettingsTabStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='SettingsHome' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SettingsHome' component={SettingsScreen}/>
      <Stack.Screen name='TagDetails' component={TagDetailsScreen}/>
    </Stack.Navigator>
  )
}

function AppContainer() {
  const Tabs = createBottomTabNavigator();

  const initListItems = [
    { text: 'Get costume', key: Date.now() },
    { text: 'Get candy', key: Date.now() + 1}
  ];

  const [listItems, setListItems] = useState(initListItems);

  return(
    <Provider store={store}>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{headerShown: false}}
        >
          <Tabs.Screen 
            name="List" 
            component={ListTabStack}
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <Icon 
                    name="list"
                    type="font-awesome"
                    color={color}
                    size={size}
                  />
                );
              }
            }}
          />
          <Tabs.Screen 
            name="Settings" 
            component={SettingsTabStack}
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <Icon 
                    name="gear"
                    type="font-awesome"
                    color={color}
                    size={size}
                  />
                );
              }
            }}/>
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default AppContainer;