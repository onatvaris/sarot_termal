import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'
import {
    View, Text,
    Dimensions,
    TextInput,
    Image,
    TouchableWithoutFeedback,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native'
import { RootStackParamList } from '../Route/type'
import LinearGradient from 'react-native-linear-gradient';
import { colorizer } from '../Helpers/color';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Data } from '../Utils/Data';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, RootState } from '../Redux';
import { ScrollView } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');
interface LoginProps {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>
}

const Login: React.FunctionComponent<LoginProps> = ({ navigation }) => {
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [secure, setSecure] = useState(true)
    const [check, setCheck] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.userResponse)
    console.log(`user`, user)
    const LoginAction = () => {
        if (Name && Password) {
            const field = Data.find((item) => item.name = 'Ercan Demir')
            if (Password === field?.password) {
                field.rememberMe = check
                dispatch(loginAction(field))
                navigation.reset({ index: 0, routes: [{ name: 'Main' }] })
            } else {
                Alert.alert('Hatalı Şifre', 'Tekrar deneyin', [
                    {
                        text: 'Tamam',
                        onPress: () => console.log("ok pressed")
                    }
                ])
            }
        } else {
            Alert.alert('Eksik Bilgi Girdiniz', 'Tekrar deneyin', [
                {
                    text: 'Tamam',
                    onPress: () => console.log("ok pressed")
                }
            ])
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ alignItems: 'center', height: hp('30%'), justifyContent: 'center' }}>
                    <Image
                        style={{ height: 86, width: 357, resizeMode: 'contain' }}
                        source={require('../Assets/Logo_Sarot.jpeg')}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#b38914' }}>Operasyon Merkezi</Text>
                    <View style={{ height: hp('40%'), width: wp('80%'), marginTop: wp('20%'), }}>
                        <View style={styles.inputContainer}>
                            <Image
                                style={styles.image}
                                source={require('../Assets/account_circle.png')}
                            />
                            <TextInput
                                onChangeText={setName}
                                placeholder='Kullanıcı Adı'
                                placeholderTextColor='#ccc'
                                style={{ flex: 1, marginLeft: 10 }} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Image
                                style={styles.image}
                                source={require('../Assets/vpn_key.png')}
                            />
                            <TextInput
                                onChangeText={setPassword}
                                placeholder='Şifre'
                                placeholderTextColor='#ccc'
                                secureTextEntry={secure}
                                autoCorrect={false}
                                style={{ flex: 1, marginLeft: 10 }} />
                            <TouchableOpacity onPress={() => {
                                setSecure(!secure)
                            }}>
                                <Image
                                    style={[styles.image, { marginRight: 5 }]}
                                    source={!secure ?
                                        require('../Assets/visibility.png') : require('../Assets/visibility_off.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5, paddingTop: 15 }}>
                            <TouchableOpacity style={{ marginRight: 15 }}
                                onPress={() => setCheck(!check)}
                            >
                                <Image
                                    style={styles.image}
                                    source={!check ?
                                        require('../Assets/check_box_outline_blank.png') : require('../Assets/check_box.png')}
                                />
                            </TouchableOpacity>
                            <Text>Beni Hatırla</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => LoginAction()}
                            style={styles.button}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Giriş Yap</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default Login

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        marginBottom: 10
    },
    image: {
        height: 27,
        width: 27,
        resizeMode: 'contain',
    },
    button: {
        height: 50,
        width: wp('40%'),
        backgroundColor: '#b38914',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 25
    }
})