import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import {
    StyleSheet, Text, View, TextInput,
    ScrollView
} from 'react-native'
import { RootStackParamList } from '../Route/type'
import LinearGradient from 'react-native-linear-gradient'
import { colorizer } from '../Helpers/color'
import DesignButton from '../Components/DesignButton'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
interface Props {
    navigation: StackNavigationProp<RootStackParamList, 'Breakdown'>
    route: RouteProp<RootStackParamList, 'Breakdown'>
}



const Breakdown = ({ navigation, route }: Props) => {

    const [scroll, setScroll] = useState(false)
    const { user, no, date, time, project, location, category, info } = route.params.item

    const cancel = () => {
        navigation.goBack()
    }

    const addAction = () => {
        navigation.navigate('Main')
    }


    return (
        <LinearGradient colors={colorizer.backgroundColor} style={{ flex: 1 }}>
            <ScrollView style={{ padding: 30, flex: 1, }} >
                <View style={styles.textContainer}>
                    <Text>Kayıt No : {no}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>Arıza Bildiren : {user.name}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>Departman : {user.departman}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>Tarih : {date}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>Saat : {time}</Text>
                </View>
                <View style={[styles.inputContainer, { marginTop: 10 }]}>
                    <Text>Proje :</Text>
                    <TextInput
                        value={project}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Arıza Yeri :</Text>
                    <TextInput
                        value={location}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Arıza Kategori :</Text>
                    <TextInput
                        value={category}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{
                            textAlignVertical: 'top',
                            flex: 1
                        }}
                        multiline={true}
                        numberOfLines={4}
                        placeholder='Açıklama...'
                        placeholderTextColor='black'
                        value={info}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <DesignButton text={'Çözüm Merkezi'} height={50} width={wp('70%')}
                        click={() =>
                            navigation.navigate('SolutionCenter',
                                { item: route.params.item })} />
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default Breakdown

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: '#FFF6F6',
        borderRadius: 10,
        marginVertical: 7
    },
    textContainer: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#FFF6F6',
        padding: 15
    },
    textInput: {
        flex: 1,
        justifyContent: 'flex-start'
    }
})
