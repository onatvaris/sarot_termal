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
import { useSelector } from 'react-redux';
import { RootState } from '../Redux';

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

    const { rememberMe } = useSelector((state: RootState) => state.userResponse)

    const { Navigator, Screen } = RootStack
    return (
        <Navigator initialRouteName={rememberMe ? 'Main' : 'Login'}>
            <Screen name={'Login'} component={Home} options={{ headerShown: false, }} />
            <Screen name={'Main'} component={Main} options={{title:'Yeni Kayıt'}} />
            <Screen name={'Breakdown'} component={Breakdown} options={{title:'Detay'}} />
            <Screen name={'AddBreakdown'} component={AddBreakdown} options={{title:'Arıza Ekle'}} />
            <Screen name={'SolutionCenter'} component={SolutionCenter} options={{title:'Çözüm Merkezi'}} />
        </Navigator>
    )
}

export default Navigation
