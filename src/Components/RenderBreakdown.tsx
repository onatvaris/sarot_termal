import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { colorizer } from '../Helpers/color'
import { Breakdown } from '../Redux/Types'

interface Props {
    item: Breakdown
}

const RenderBreakdown = ({ item }: Props) => {
    const navigation = useNavigation()
    console.log(`item`, item)

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Breakdown', { item: item })
            }}>
            <LinearGradient colors={colorizer.backgroundColor} style={styles.cardContainer}>
                <View style={styles.topView}>
                    <View style={styles.leftFieldContainer}>
                        <Image
                            style={styles.image} source={require('../Assets/date_range.png')}
                        />
                        <Text style={styles.text}>{item.date}</Text>
                    </View>
                    <View style={styles.leftFieldContainer}>
                        {/* <Image
                            style={styles.image}
                            source={require('../Assets/access_time.png')}
                        /> */}
                        <Text style={styles.text}>{item.time}</Text>
                    </View>
                </View>
                <View style={[styles.bottomView]}>
                    <View style={[styles.leftFieldContainer,]}>
                        <Image
                            style={styles.image}
                            source={require('../Assets/event_available.png')}
                        />
                        <Text style={[styles.text, { width: widthPercentageToDP('79%') }]}>{item.location}</Text>
                    </View>
                    <View style={styles.leftFieldContainer}>
                        <Image
                            style={styles.image} source={require('../Assets/error_outline.png')}
                        />
                        <ScrollView style={{ maxHeight: 130, }}>
                            <Text style={[styles.text,]}>
                                {item.info}
                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default RenderBreakdown

const styles = StyleSheet.create({
    cardContainer: {
        maxHeight: 175,
        paddingHorizontal: 15,
        paddingVertical: 2,
        margin: 10,
        borderRadius: 10
    },
    leftFieldContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
    },
    rightFieldContainer: {
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
    },
    image: { height: 24, width: 24, resizeMode: 'contain', marginRight: 10 },
    text: {
        fontSize: 16,
    },
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomView: {
        alignItems: 'flex-start'
    }
})




{/* <View
                    style={{ alignItems: 'flex-start' }}>

                </View>
                <View style={{ justifyContent: 'space-between' }}>

                    {/* <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Breakdown', { item: item })
                    }}
                    style={[styles.rightFieldContainer, { justifyContent: 'flex-end' }]}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Detay</Text>
                    <Image
                        style={{ width: 22, height: 15, resizeMode: 'cover', marginLeft: 10 }}
                        source={require('../Assets/arrow_right_alt.png')}
                    />
                </TouchableOpacity> 
                </View> */}