import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Home from '../Pages/Login';
import { RootStackParamList } from './type';
import Main from '../Pages/Main';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Breakdown from '../Pages/Breakdown';
import AddBreakdown from '../Pages/AddBreakdown';
import SolutionCenter from '../Pages/SolutionCenter';

const RootStack = createStackNavigator<RootStackParamList>();

const optionHeaderBar: StackNavigationOptions = {
    headerBackTitleVisible: false,
    title: 'İyi Çalışmalar',
    headerTitleAlign: 'center',
    headerTintColor: '#ffff',
    headerStyle: {
        backgroundColor: '#97ABFF',
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    }
}

const Navigation = () => {
    const { Navigator, Screen } = RootStack
    return (
        <Navigator initialRouteName={'Login'}>
            <Screen name={'Login'} component={Home} options={{ headerShown: false, }} />
            <Screen name={'Main'} component={Main} options={optionHeaderBar} />
            <Screen name={'Breakdown'} component={Breakdown} options={optionHeaderBar} />
            <Screen name={'AddBreakdown'} component={AddBreakdown} options={optionHeaderBar} />
            <Screen name={'SolutionCenter'} component={SolutionCenter} options={optionHeaderBar} />
        </Navigator>
    )
}

export default Navigation
