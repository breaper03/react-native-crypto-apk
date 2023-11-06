import { NavigationContainer, useRoute } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, Transactions, Pay, Send, Swap, Orbit } from '../screens'
import { View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Icon } from "@rneui/themed"
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../theme'

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  backgroundColor: "transparent",
  tabBarStyle:{
    position: "absolute",
    height: 60,
    backgroundColor: theme.colors.white,
    borderRadius: 100,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 100
  }
}

const Navigation = () => {
  
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
        name="Home" 
        component={MyStack} 
        options={{
          tabBarIcon: ({focused}) => (
            <View 
              style={{
                alignItems: "center", justifyContent: "center", backgroundColor: `${focused ? theme.colors.blue : "transparent"}`,
                borderWidth: 2.5, borderRadius: 10, borderColor: `${focused ? theme.colors.blue : theme.colors.blurBlue}`, padding: 5,
                
              }}
              > 
              <Entypo name="home" size={24} color={focused ? theme.colors.white: theme.colors.blue} />
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Orbit" 
        component={Orbit} 
        options={{
          tabBarIcon: ({focused}) => (
            <View 
              style={{
                alignItems: "center", justifyContent: "center", backgroundColor: `${focused ? theme.colors.blue : "transparent"}`,
                borderWidth: 2.5, borderRadius: 10, borderColor: `${focused ? theme.colors.blue : theme.colors.blurBlue}`, padding: 5,
                
              }}
              > 
              <Icon name="brain" type="font-awesome-5" size={24} color={focused ? theme.colors.white: theme.colors.blue} />
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Transactiones" 
        component={Transactions} 
        options={{
          tabBarIcon: ({focused})=>(
            <View
            style={{
              alignItems: "center", justifyContent: "center", backgroundColor: `${focused ? theme.colors.blue : "transparent"}`,
              borderWidth: 2.5, borderRadius: 10, borderColor: `${focused ? theme.colors.blue : theme.colors.blurBlue}`, padding: 5,
            }}
            > 
              <FontAwesome name="exchange" size={24} color={focused ? theme.colors.white: theme.colors.blue} />
            </View>
          ),
        }}
        />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="HomeScreen" 
        component={Home} 
      />
      <Stack.Screen 
        name="transactions" 
        component={Transactions} 
      />
      <Stack.Screen 
        name="Pay" 
        component={Pay} 
      />
      <Stack.Screen 
        name="Send" 
        component={Send} 
      />
      <Stack.Screen 
        name="Swap" 
        component={Swap} 
      />
    </Stack.Navigator>
  );
}

export default Navigation