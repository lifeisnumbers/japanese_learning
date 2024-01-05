import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { AuthContext } from './AuthContext';
import MainScreen from './Stack/MainScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {

  return (
    
    <NavigationContainer>
      <Stack.Navigator>      
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default AppNavigator;
