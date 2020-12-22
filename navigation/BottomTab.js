import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home'
import Statistical from "../screens/Statistical";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createMaterialBottomTabNavigator()
const BottomTab = () => {
    return (
        <Tab.Navigator 
        inactiveColor = '#b9c0b9'
        shifting = {true}     
      barStyle = {{backgroundColor: '#e91e63', elevation: 8}}
        >
            <Tab.Screen name = 'Home' component = {Home} options = {{
                tabBarIcon : ({color})=>(<Icon name = 'home'  size = {26} color = {color}/>)
            }} />
            <Tab.Screen name = 'Statistical' component = {Statistical} options = {{
                 tabBarIcon : ({color})=>(<Icon name = 'chart-arc' size = {26} color = {color}/>)
            }}  />
        
        </Tab.Navigator>
    )
}

export default BottomTab
