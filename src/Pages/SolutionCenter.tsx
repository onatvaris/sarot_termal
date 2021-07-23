import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, {
    useEffect,
    useState
} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    Modal,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { useDispatch, useSelector } from 'react-redux'
import DesignButton from '../Components/DesignButton'
import { colorizer } from '../Helpers/color'
import { addSolution, RootState } from '../Redux'

import { RootStackParamList } from '../Route/type'
import ImagePickerModal from '../Components/ImagePickerModal'
import ImagePicker, { Options } from 'react-native-image-crop-picker'

interface Props {
    navigation: StackNavigationProp<RootStackParamList, 'SolutionCenter'>
    route: RouteProp<RootStackParamList, 'SolutionCenter'>
}
const { height, width } = Dimensions.get('window');

const SolutionCenter = ({ route, navigation }: Props) => {

    console.log(`route`, route)
    const { name, id, departman, password } = useSelector((state: RootState) => state.userResponse)
    const { breakdowns } = useSelector((state: RootState) => state.breakdownResponse)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [status, setStatus] = useState('')
    const [info, setInfo] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false)
    const [selectedImage, setSelectedImage] = useState<Options | undefined>()
    const [selectedVisibility, setSelectedVisibility] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const date = new Date().toLocaleDateString()
        const time = new Date().toLocaleTimeString()
        console.log(`route.params.item.solution?.imageSolutionCenter`, route.params.item.solution?.imageSolutionCenter)
        route.params.item.solution?.status === 'Çözümlendi' && setSelectedImage(route.params.item.solution?.imageSolutionCenter)

        setTime(time)
        setDate(date)
    }, [])

    const SaveAction = () => {
        console.log(breakdowns)
        const user = {
            name, id, departman, password
        }

        dispatch(
            addSolution({
                date,
                time,
                user,
                imageSolutionCenter: selectedImage,
                status: 'Çözümlendi',
                breakdownNo: route.params.item.no,
                info
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

    return (
        <LinearGradient colors={colorizer.backgroundColor} style={{ flex: 1 }}>
            <ScrollView>
                {/* <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image
                        style={{ height: 200, width: 250, backgroundColor: '#cccc', marginBottom: 20 }}
                        source={{uri:"file:///storage/emulated/0/Android/data/com.sarot_termal/files/Pictures/image-5bf648cb-2061-47d5-9083-a7ed5cabaf544999888953917279955.jpg"}}
                    />
                    <DesignButton text={'Resim Ekle'} click={() => console.log("object")} width={widthPercentageToDP('45%')} height={50} />
                </View> */}
                <View style={{ padding: 30 }}>
                    <View style={styles.textContainer}>
                        <Text>{name}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text>{date}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text>{time}</Text>
                    </View>
                    <View style={styles.inputContainer}>

                        {route.params.item.solution?.status === 'Çözümlendi' ?
                            <Text>
                                Açıklama:  {route.params.item.solution?.info}
                            </Text> :
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
                            />}
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        {route.params.item.solution?.status === 'Çözümlendi' ?
                            <DesignButton text={`Resmi Görüntüle`} height={50} width={widthPercentageToDP('45%')}
                                style={{ marginBottom: 15 }}
                                click={() => setModalVisibility(!modalVisibility)} /> :
                            <DesignButton text={'Resim Ekle'} height={50} width={widthPercentageToDP('45%')}
                                style={{ marginBottom: 15 }}
                                click={changedSelectedVisibility} />}
                        <DesignButton text={'Kaydet'} height={50} width={widthPercentageToDP('45%')} click={SaveAction} />
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
            {modalVisibility && <ImagePickerModal setModalVisibility={() => setModalVisibility(!modalVisibility)} image={selectedImage} />}
        </LinearGradient>
    )
}

export default SolutionCenter

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: '#FFF6F6',
        borderRadius: 10,
        marginVertical: 7,
        paddingVertical: 10
    },
    textContainer: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#FFF6F6',
        padding: 15
    },
    textInput: {
        flex: 1
    }
})
