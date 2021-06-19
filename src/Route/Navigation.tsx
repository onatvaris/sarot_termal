import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Home from '../Pages/Login';
import { RootStackParamList } from './type';
import Main from '../Pages/Main';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    const { Navigator, Screen } = RootStack
    return (
        <Navigator initialRouteName={'Login'}>
            <Screen name={'Login'} component={Home} options={{ headerShown: false, }} />
            <Screen name={'Main'} component={Main}
                options={{
                    headerBackTitleVisible: false,
                    title: 'İyi Çalışmalar',
                    headerTitleAlign: 'center',
                    headerStyle:{
                        backgroundColor:'rgba(255,255,255,0.3)'
                    }
                }} />
        </Navigator >
    )
}

export default Navigation
