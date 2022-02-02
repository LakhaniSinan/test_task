import React from "react"
import { View, Text } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { user_logout } from "../../redux/actions/login"
import Entypo from "react-native-vector-icons/Entypo"
import { useDispatch, useSelector } from "react-redux"
import Header from "../../components/Header"
const Home = () => {
    const dispatch = useDispatch()

    const logOutUser = () => {
        dispatch(user_logout())
        AsyncStorage.removeItem("user")
    }
    return (
        <View style={{ flex: 1 }}>
            <Header title={"About The App"} />
            <View style={{ marginHorizontal: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Task Description</Text>
                <Text style={{ marginTop: 2 }}>Create A Simple App where user status is persisted using redux and authentication flow is also done using redux</Text>
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Libraries Used</Text>
                <Text style={{ marginTop: 10 }}>Redux, Redux Thunk, Promise Middleware, React Navigation</Text>
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Authentication Flow</Text>
                <Text style={{ marginTop: 10 }}>I have implemented a dummy api call to store data using redux an action is called using redux and then reducers store data in my global state</Text>
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>User Status Persist flow</Text>
                <Text style={{ marginTop: 10 }}>Upon laucnhing of the application async storage is checked first for user data</Text>
            </View>

            <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}> Simple Application but completed all the mentioned task</Text>
            </View>
        </View>

    )
}

export default Home