import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colorizer } from '../Helpers/color'
import { Breakdown } from '../Redux/Types'

interface Props {
    item: Breakdown
}

const RenderBreakdown = ({ item }: Props) => {
    const navigation = useNavigation()
    console.log(`item`, item)

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
                    <Text style={styles.text}>{item.solution?.status ? item.solution?.status : 'Güncel'}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Breakdown', { item: item })
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

export default RenderBreakdown

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
