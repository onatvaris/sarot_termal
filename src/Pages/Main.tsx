import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { colorizer } from '../Helpers/color'
import { FloatingAction, IFloatingActionProps } from "react-native-floating-action";
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../Route/type'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux'
import { useEffect } from 'react'
import { Breakdown } from '../Redux/Types'
import { useState } from 'react'

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

export type TypeData = {
    id: number,
    arızaYeri: string,
    nedeni: string
    tarih: string
    saat: string
    durum: string
}



const Main = ({ navigation }: Props) => {

    const user = useSelector((state: RootState) => state.userResponse)
    const { breakdowns } = useSelector((state: RootState) => state.breakdownResponse)
    const [Data, setData] = useState([])

    useEffect(() => {
        setData(breakdowns)
        // const fetch = async () => {
        //     let data: Breakdown[] = []
        //     await breakdowns.map((v, i, a) => {
        //         console.log(`v`, v)
        //         data.push(v)
        //     })
        //     setData(data)
        // }
        // fetch()
    }, [breakdowns])


    const renderItem = ({ item }: { item: Breakdown }) => {
        return (
            <LinearGradient colors={colorizer.backgroundColor} style={styles.cardContainer}>
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={styles.leftFieldContainer}>
                        <Image
                            style={styles.image}
                            source={require('../Assets/event_available.png')}
                        />
                        <Text style={styles.text}>{item.location}</Text>
                    </View>
                    <View style={styles.leftFieldContainer}>
                        <Image
                            style={styles.image} source={require('../Assets/error_outline.png')}
                        />
                        <Text style={styles.text}>{item.info}</Text>
                    </View>
                    <View style={styles.leftFieldContainer}>
                        <Image
                            style={styles.image} source={require('../Assets/date_range.png')}
                        />
                        <Text style={styles.text}>{item.date}</Text>
                    </View>
                    <View style={styles.leftFieldContainer}>
                        <Image
                            style={styles.image}
                            source={require('../Assets/access_time.png')}
                        />
                        <Text style={styles.text}>{item.time}</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'space-between' }}>
                    <View style={styles.rightFieldContainer}>
                        <Image
                            style={styles.image}
                            source={require('../Assets/help_outline.png')}
                        />
                        <Text style={styles.text}>{item.info}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            // navigation.navigate('Breakdown', { item })
                            // navigation.setOptions({ title: 'Updated!' })
                        }}
                        style={[styles.rightFieldContainer, { justifyContent: 'flex-end' }]}>
                        <Text style={{ color: 'white', fontSize: 17 }}>Detay</Text>
                        <Image
                            style={{ width: 22, height: 22, resizeMode: 'contain', marginLeft: 10 }}
                            source={require('../Assets/arrow_right_alt.png')}
                        />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )
    }

    return (
        <LinearGradient colors={colorizer.backgroundColor} style={{ flex: 1, }}>
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item: TypeData, index: number) => index.toString()}
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
