import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/main/MainScreen';
import AddScreen from '../screens/add/AddScreen';

const Stack = createStackNavigator();

const MainNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          options={{title: 'Список'}}
          component={MainScreen}
        />
        <Stack.Screen
          name="add"
          options={{title: 'Добавить'}}
          component={AddScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
