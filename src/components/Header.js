import React from "react"
import { View, Text } from "react-native"


const Header = ({ title }) => {
    return (
        <View style={{height:60,backgroundColor:"#136BC3",justifyContent:"center",alignItems:"center"}}>
            <Text style={{
                color:"white",
                fontSize:18,
                fontWeight:"bold"
            }}>{title}</Text>
            
        
        </View>
    )
}

export default Header