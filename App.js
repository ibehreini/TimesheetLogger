import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Log from './screens/Log';
import Overview from './screens/Overview';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Log" component={Log} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;