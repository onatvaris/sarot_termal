import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {
    StyleSheet, Text, View, TextInput,
    ScrollView
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addBreakdown, RootState } from '../Redux'
import DesignButton from '../Components/DesignButton'
import LinearGradient from 'react-native-linear-gradient'
import { colorizer } from '../Helpers/color'
import { RootStackParamList } from '../Route/type'


interface Props {
    navigation: StackNavigationProp<RootStackParamList, 'AddBreakdown'>
}

const AddBreakdown = ({ navigation }: Props) => {
    const [no, setNo] = useState(0)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [proje, setProje] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [info, setInfo] = useState('')
    const user = useSelector((state: RootState) => state.userResponse)
    const dispatch = useDispatch()
    useEffect(() => {
        const number = Math.floor(Math.random() * 100);
        const date = new Date().toLocaleDateString()
        const time = new Date().toLocaleTimeString()
        setTime(time)
        setDate(date)
        setNo(number)
    }, [])

    const cancel = () => {
        navigation.goBack()
    }

    const addAction = () => {
        dispatch(addBreakdown({
            category, date,
            time, project: proje,
            no, user, location,
            info,
        }))
        navigation.navigate('Main')
    }

    return (
        <LinearGradient colors={colorizer.backgroundColor} style={{ flex: 1 }}>
            <ScrollView style={{ padding: 20, }}>
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
                        onChangeText={setProje}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Arıza Yeri :</Text>
                    <TextInput
                        onChangeText={setLocation}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Arıza Kategori :</Text>
                    <TextInput
                        onChangeText={setCategory}
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
                        onChangeText={setInfo}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <DesignButton text={'Vazgeç'} height={50} width={150} click={cancel} />
                    <DesignButton text={'Ekle'} height={50} width={150} click={addAction} />
                </View>
            </ScrollView>
        </LinearGradient>

    )
}

export default AddBreakdown

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
