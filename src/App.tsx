import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './Redux'
import Navigation from './Route/Navigation'

interface Props {

}

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
