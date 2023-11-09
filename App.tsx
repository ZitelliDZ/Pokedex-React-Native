import React from 'react'
import { Navigator } from './src/navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import Tabs from './src/navigation/Tabs'

const App = () => {
  return (
          
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
    
  )
}

export default App
