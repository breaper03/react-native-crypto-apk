
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import Navigation from './src/components/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  console.log("app reloaded")
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <View style={{flex:1}}>
            <Navigation/>
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
