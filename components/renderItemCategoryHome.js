import React, { Component } from 'react'
import { Text, View,TouchableOpacity, Image } from 'react-native'

export function renderItemCategoryHome (item) {
  
        return (
            <TouchableOpacity style = {{width: 70, height: 70, borderRadius: 8, backgroundColor:'orange', margin: 8}}>
                <Image source = {item.CatImage} style = {{width: 50, height: 50}} />
                <Text>{item.CatName}</Text>
            </TouchableOpacity>
        )
    }

export default renderItemCategoryHome
