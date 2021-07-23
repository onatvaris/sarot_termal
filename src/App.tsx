import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './Redux'
import Navigation from './Route/Navigation'

interface Props {

}

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
