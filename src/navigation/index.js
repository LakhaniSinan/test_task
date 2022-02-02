import React, { useEffect, useState } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from "../navigation/AuthStack"
import AppStack from "../navigation/AppStack"
import { useSelector } from "react-redux";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"

const Stack = createStackNavigator();

export default function Navigation() {
    const values = useSelector(state => state.login)
    const [loginState, setLoginState] = useState(false)
    console.log(values, "D");
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        let item = await AsyncStorage.getItem("user")
        console.log(item, "ITEMS");
        if (item != null) {
            setLoginState(true)
        }
        else {

        }
    }



    console.log(loginState, "LOGINNNN");

    return (
        <NavigationContainer>
            {loginState == true ?
                <AppStack />
                :
                    loginState == false && values.data != null ?
                        <AppStack />
                        :
                        <AuthStack />
            }
        </NavigationContainer>
    );
}

