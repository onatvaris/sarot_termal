import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import {
    StyleSheet, Text, View, TextInput,
    ScrollView,
    Modal,
    Dimensions,
    TouchableOpacity,
    Image
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


const { height, width } = Dimensions.get('window');

const Breakdown = ({ navigation, route }: Props) => {

    const [scroll, setScroll] = useState(false)
    const [selectedVisibility, setSelectedVisibility] = useState(false)
    const { user, no, date, time, project, location, category, info, imageBreakdown } = route.params.item

    const cancel = () => {
        navigation.goBack()
    }

    const addAction = () => {
        navigation.navigate('Main')
    }


    return (
        <LinearGradient colors={colorizer.backgroundColor} style={{ flex: 1, }}>
            <ScrollView style={{ paddingHorizontal: 30, flex: 1, }} >
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
                <View style={{ justifyContent: 'space-around', marginTop: 15, alignItems: 'center', paddingBottom: 30 }}>
                    <DesignButton text={'Resmi Görüntüle'} height={50} width={wp('70%')}
                        click={() => setSelectedVisibility(!selectedVisibility)}
                    />
                    <DesignButton
                        text={'Çözüm Merkezi'} height={50} width={wp('70%')}
                        style={{ marginTop: 15 }}
                        click={() =>
                            navigation.navigate('SolutionCenter',
                                { item: route.params.item })}
                    />
                </View>
            </ScrollView>
            <Modal
                style={{ flex: 1 }}
                animationType="fade"
                transparent
                visible={selectedVisibility}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 22
                }}>
                    <View style={{
                        margin: 20,
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: 15,
                    }}>
                        <View style={{
                        }}>
                            <TouchableOpacity
                                style={{ position: 'absolute', right: 0, margin: 10, }}
                                onPress={() => setSelectedVisibility(false)}>
                                <Image
                                    style={{ height: 25, width: 25, tintColor: '#b38914' }}
                                    source={require('../Assets/cancel.png')}
                                />
                            </TouchableOpacity>
                            <Image
                                style={{ height: width * 0.7, width: width * 0.87, backgroundColor: '#cccc', zIndex: -1 }}
                                source={{ uri: imageBreakdown?.path }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
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
