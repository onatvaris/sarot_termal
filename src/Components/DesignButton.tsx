import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'

interface Props {
    text: string
    height: number
    width: number
    click: () => void,
    style?: StyleProp<ViewStyle>
}

const DesignButton = ({ text, height, width, click, style }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => click()}
            style={[{
                height,
                width,
                backgroundColor: '#e5e5e5',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',

            }, style]}
        >
            <Text style={{ fontSize: 18 }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default DesignButton

const styles = StyleSheet.create({})
