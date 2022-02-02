import React from "react"
import { TextInput, View } from "react-native"


const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <View style={{
            borderWidth: 1,
            margin: 10,
            borderRadius: 10,
            opacity: 0.7,
            borderColor: "#a3a3a3"
        }}
        >
            <TextInput
                style={{ paddingLeft: 20, backgroundColor: "#d3d3d3", borderRadius: 10 }}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>

    )
}

export default Input