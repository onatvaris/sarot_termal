import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
    text: string
    height: number
    width: number
    click: () => void
}

const DesignButton = ({ text, height, width, click }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => click()}
            style={{
                height,
                width,
                backgroundColor: '#E5E5E5',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text style={{ fontSize: 18 }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default DesignButton

const styles = StyleSheet.create({})
