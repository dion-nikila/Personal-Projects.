import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NameGuesser from './NameGuesser';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false 
        }}
      >
        <Stack.Screen name="NameGuesser" component={NameGuesser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;