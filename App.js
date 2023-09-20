import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Screens/Restaurant/HomeScreen";
import WelcomeScreen from './Screens/Restaurant/WelcomeScreen';
import RecipeDetailScreen from './Screens/Restaurant/RecipeDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipe" component={RecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App