import React from "react"
import { View, Image, TouchableOpacity, Text } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { user_logout } from "../../redux/actions/login"
import Entypo from "react-native-vector-icons/Entypo"
import { useDispatch, useSelector } from "react-redux"
const Home = () => {
    const dispatch = useDispatch()

    const logOutUser = () => {
        dispatch(user_logout())
        AsyncStorage.removeItem("user")
    }
    return (
        <View style={{ flex: 1 }}>
            <Image source={require("../../assets/photod.jpg")} style={{ width: null, height: 200 }} />
            <View style={{
                flex: 1,
                alignItems: "flex-end",
                marginRight: 10,
                marginTop: 10,
                position: "absolute",
                right: 10
            }}>
                <TouchableOpacity onPress={logOutUser}>
                    <Entypo name="login" size={24} color={"white"} />
                </TouchableOpacity>
            </View>
          
        </View>

    )
}

export default Home