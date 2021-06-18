import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Navigation from './Route/Navigation'
interface Props {

}

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
