import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text, View, ScrollView,
    TouchableWithoutFeedback,
    KeyboardAvoidingView, Keyboard, Platform
} from 'react-native'
import { RootStackParamList } from '../Route/type'
import LinearGradient from 'react-native-linear-gradient'
import { colorizer } from '../Helpers/color'
import DesignButton from '../Components/DesignButton'
interface Props {
    navigation: StackNavigationProp<RootStackParamList, 'Breakdown'>
    route: RouteProp<RootStackParamList, 'Breakdown'>
}

const Breakdown = ({ navigation, route }: Props) => {
    const [scroll, setScroll] = useState(false)
    const { item } = route.params
    useEffect(() => {
        console.log(`item`, item)
        item ?
            navigation.setOptions({ title: 'Detay - Düzenle' }) : navigation.setOptions({ title: 'Arıza Ekle' })
    }, [])

    return (
        <View>
            <Text>
                asdfasdf
            </Text>
        </View>
        // <LinearGradient colors={colorizer.backgroundColor} style={{ flex: 1 }}>
        //     <ScrollView style={{ padding: 30, flex: 1, }} >
        //     </ScrollView>
        // </LinearGradient>
    )
}

export default Breakdown

const styles = StyleSheet.create({})
