import { View, Text } from 'react-native'
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ComingSoonScreen from './screens/ComingSoonScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons,MaterialIcons,Ionicons} from '@expo/vector-icons'
import ProfileScreen from './screens/ProfileScreen';

const BottomTabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
    screenOptions={{headerShown:false}}>
        <Tab.Screen name ="Now showing" component={HomeScreen} options={{
        tabBarIcon:({color,size})=>(
          <MaterialCommunityIcons name="theater" size={32} color="black" />
  )}}/>
        <Tab.Screen name ="Coming soon" component={ComingSoonScreen} options={{
          tabBarIcon:({color,size})=>(
            <MaterialIcons name="theaters" size={32} color="black" />
    )}}/>
      <Tab.Screen name ="Profile" component={ProfileScreen} options={{
            tabBarIcon:({color,size})=>(
              <Ionicons name="menu" size={32} color="black" />
      )}}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;