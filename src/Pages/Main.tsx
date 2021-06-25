import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ListRenderItem } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { colorizer } from '../Helpers/color'
import { FloatingAction, IFloatingActionProps } from "react-native-floating-action";
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../Route/type'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux'
import { useEffect } from 'react'
import { Breakdown, UserBreakdownInterface } from '../Redux/Types'
import { useState } from 'react'
import RenderBreakdown from '../Components/RenderBreakdown'

interface Props {
    navigation: StackNavigationProp<RootStackParamList, 'Main'>
}

const actions = [
    {
        text: "Arıza Ekle",
        icon: require('../Assets/warning.png'),
        name: "bt_ariza_add",
        position: 2,
        color: 'white',
        tintColor: 'black',

    },
    {
        text: "Filtrele",
        icon: require('../Assets/filter_list.png'),
        name: "bt_filter",
        position: 1,
        color: 'white',
        tintColor: 'black'
    },
];

const Main = ({ navigation }: Props) => {

    const user = useSelector((state: RootState) => state.userResponse)
    const { breakdowns } = useSelector((state: RootState) => state.breakdownResponse)
    const [Data, setData] = useState([])


    const renderItem = ({ item }: { item: Breakdown }) => {
        return <RenderBreakdown item={item} />
    }

    return (
        <LinearGradient colors={colorizer.backgroundColor} style={{ flex: 1, }}>
            <FlatList
                data={breakdowns}
                renderItem={renderItem}
                keyExtractor={(item: Breakdown, index: number) => index.toString()}
                refreshing={false}
            />
            <FloatingAction
                overlayColor='rgba(255,255,255,0.3)'
                actions={actions}
                onPressItem={name => {
                    if (name === 'bt_ariza_add') {
                        navigation.navigate('AddBreakdown')
                    }
                }}
                position='left'
            />
        </LinearGradient >
    )
}

export default Main

const styles = StyleSheet.create({
    cardContainer: {
        height: 200,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        borderRadius: 10
    },
    leftFieldContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
    rightFieldContainer: {
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
    },
    image: { height: 24, width: 24, resizeMode: 'contain', marginRight: 10 },
    text: {
        fontSize: 16,
    }
})
