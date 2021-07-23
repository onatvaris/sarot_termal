import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {
    StyleSheet, Text, View, TextInput,
    ScrollView, Dimensions, Modal,
    Image,
    TouchableOpacity
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addBreakdown, RootState } from '../Redux'
import DesignButton from '../Components/DesignButton'
import LinearGradient from 'react-native-linear-gradient'
import { colorizer } from '../Helpers/color'
import { RootStackParamList } from '../Route/type'
import ImagePickerModal from '../Components/ImagePickerModal'
import ImagePicker, { Options } from 'react-native-image-crop-picker';


const { height, width } = Dimensions.get('window');

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
    const [modalVisibility, setModalVisibility] = useState(false)
    const [selectedVisibility, setSelectedVisibility] = useState(false)
    const [selectedImage, setSelectedImage] = useState<Options | undefined>()

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
            info, imageBreakdown: selectedImage
        }))
        navigation.navigate('Main')
    }

    const changedSelectedVisibility = () => {
        console.log("object")
        setSelectedVisibility(!selectedVisibility)
    }

    const cameraImagePicker = () => {
        setSelectedVisibility(!selectedImage)
        ImagePicker.openCamera({}).then((image: Options) => {
            console.log(image);
            setSelectedImage(image)
            setModalVisibility(!modalVisibility)
        });
    }

    const galleryImagePicker = () => {
        setSelectedVisibility(!selectedImage)
        ImagePicker.openPicker({}).then((res: Options) => {
            setSelectedImage(res)
            setModalVisibility(!modalVisibility)
        })
    }

    const changedModalVisibility = () => {
        setModalVisibility(!modalVisibility)
    }


    return (
        <LinearGradient colors={colorizer.backgroundColor} style={{ flex: 1 }}>
            <ScrollView style={{ paddingHorizontal: 20, }}>
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
                    <Text>Kategori :</Text>
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
                <View style={{ marginTop: 5, justifyContent: 'space-around', height: 120, paddingBottom: 10 }}>

                    <DesignButton text={'Vazgeç'} height={50} width={width * 0.9} click={cancel} style={{ alignSelf: 'center' }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                        <DesignButton text={'Resim Ekle'} height={50} width={150} click={changedSelectedVisibility} />
                        <DesignButton text={'Kaydet'} height={50} width={150} click={addAction} />

                    </View>
                </View>
            </ScrollView>
            <Modal
                style={{ flex: 1 }}
                animationType="fade"
                transparent
                visible={selectedVisibility}>
                <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent: 'flex-end' }}>
                    <View style={{
                        height: width * 0.2,
                        width,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        marginBottom: 30,
                        flexDirection: 'row'
                    }}>
                        <TouchableOpacity onPress={cameraImagePicker}>
                            <Image
                                style={{ height: 40, width: 40 }}
                                source={require('../Assets/camera_alt.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={galleryImagePicker}>
                            <Image
                                style={{ height: 40, width: 40 }}
                                source={require('../Assets/folder.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelectedVisibility(false)}>
                            <Image
                                style={{ height: 40, width: 40 }}
                                source={require('../Assets/cancel.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {modalVisibility && <ImagePickerModal setModalVisibility={changedModalVisibility} image={selectedImage} />}
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
