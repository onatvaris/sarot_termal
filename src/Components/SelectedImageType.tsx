import React from 'react'
import { StyleSheet, Modal, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import ImagePicker, { Options } from 'react-native-image-crop-picker';

const { height, width } = Dimensions.get('window');


interface Props {
    selectedVisibility: boolean
}

const SelectedImageType = (props: Props) => {

    const [modalVisibility, setModalVisibility] = React.useState(false)
    const [selectedVisibility, setSelectedVisibility] = React.useState(false)
    const [selectedImage, setSelectedImage] = React.useState<Options | undefined>()

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
        <Modal
            style={{ flex: 1 }}
            animationType="fade"
            transparent
            visible={selectedVisibility}
        >
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
    )
}

export default SelectedImageType

const styles = StyleSheet.create({})
