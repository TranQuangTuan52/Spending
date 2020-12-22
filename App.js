import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/Home'
import BottomTab from './navigation/BottomTab'
import Drawer from './navigation/DrawerNav'
const Stack = createStackNavigator()
const App = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator 
        headerMode = 'none'
     >
       <Stack.Screen name = 'BottomTab' component = {Drawer}/>
     </Stack.Navigator>

   </NavigationContainer>

  )
}

export default App
