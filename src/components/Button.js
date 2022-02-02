import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

const Button = ({ title, color, onPress }) => {
    return (
        <View style={{
            backgroundColor: color,
            marginHorizontal: 20,
            marginBottom: 10,
            borderRadius: 10
        }}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    paddingVertical: 10,
                    alignItems: "center",
                }}>
                <Text style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold"
                }}>{title}</Text>
            </TouchableOpacity>
        </View>

    )
}

export default Button