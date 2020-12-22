import React from 'react'
import { View, Text } from 'react-native'
import Home from '../screens/Home'
import  { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()
const DrawerNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name = 'Home' component = {Home}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav
