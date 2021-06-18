import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home';
import { RootStackParamList } from './type';

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    const { Navigator, Screen } = RootStack
    return (
        <Navigator initialRouteName={'home'}>
            <Screen name={'home'} component={Home} options={{ headerShown: false, }} />
        </Navigator>
    )
}

export default Navigation
