import React, { useState } from "react";
import {
    Alert, Modal, StyleSheet, Text, Pressable, View,
    Dimensions,
    TouchableOpacity,
    Image
} from "react-native";
import { Options } from "react-native-image-crop-picker";
import DesignButton from "./DesignButton";



interface Props {
    setModalVisibility: () => void,
    image: Options | undefined
}
const { height, width } = Dimensions.get('window');

const App = ({
    setModalVisibility,
    image
}: Props) => {

    console.log(`image`, image.path)

    const openImagePicker = () => {
        setModalVisibility()
    }

    const changedModalVisibility = () => {
        setModalVisibility()
    }


    return (
        <Modal
            style={{ flex: 1 }}
            animationType="slide"
            transparent
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={{ position: 'absolute', right: 0, margin: 20, }}
                        onPress={() => setModalVisibility()}>
                        <Image
                            style={{ height: 25, width: 25, tintColor: '#b38914' }}
                            source={require('../Assets/cancel.png')}
                        />
                    </TouchableOpacity>
                    <View style={{
                        zIndex: -1,
                        alignItems: "center",
                    }}>
                        {/* <View style={{ height: width * 0.7, width: width * 0.87, backgroundColor: '#cccc' }} /> */}
                        <Image
                            style={{ height: width * 0.7, width: width * 0.87, backgroundColor: '#cccc' }}
                            source={{ uri: image?.path }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                            <DesignButton
                                text={'Ekle'}
                                height={50} width={100}
                                click={openImagePicker}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default App;