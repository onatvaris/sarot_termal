import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import { RootStackParamList } from '../Route/type'
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';

interface HomeProps {
    navigation: StackNavigationProp<RootStackParamList, 'home'>
}

const Home: React.FunctionComponent<HomeProps> = (props) => {
    return (
        <LinearGradient colors={['#97ABFF', '#123597']} style={{ flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ height: 86, width: 357, resizeMode: 'contain' }}
                    source={require('../Assets/Logo_Sarot.png')}
                />
            </View>
        </LinearGradient>
    )
}

export default Home
