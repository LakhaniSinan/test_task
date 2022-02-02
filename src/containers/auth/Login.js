import React, { useEffect, useState } from "react"
import { user_login } from "../../redux/actions/login"
import { useDispatch, useSelector } from "react-redux"
import { View, Image } from "react-native"
import { vh } from "../../constants"
import { Input, Button } from "../../components"

const LoginPage = () => {
    const dispatch = useDispatch()


    const [inputs, setInputs] = useState({
        email: "testtask@gmail.com",
        password: "123456"
    })

    // useEffect(() => {
    //     let params = {
    //         email,
    //         password
    //     }

    //     dispatch(Login(params))
    // }, [])

    const onChangeValue = (name, value) => {
        console.log(name, value, "THINGSSS");
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const FacebookLogin = () => {
        console.log("facebook login");
    }

    const LoginUser = () => {
        const { email, password } = inputs
        if (email && password) {
            let params = {
                email,
                password
            }
            dispatch(user_login(params))
        }
        else {
            alert("Please enter valid email and password")
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: vh * 0.1, alignItems: "center", borderRadius: 200 }}>
                <Image
                    style={{ height: 150, width: 150, borderRadius: 200 }}
                    source={require("../../assets/travelImage.jpg")}
                />
            </View>
            <View style={{ marginTop: vh * 0.1, marginBottom: 30 }}>
                <Input
                    placeholder={"Email"}
                    value={inputs.email}
                    onChangeText={(text) => onChangeValue("email", text)}
                    secureTextEntry={false}
                />
                <Input
                    placeholder={"Password"}
                    value={inputs.password}
                    onChangeText={(text) => onChangeValue("password", text)}
                    secureTextEntry={true}
                />
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Button color={"#3B5998"} title={"Facebook Login"} onPress={FacebookLogin} />
                <Button color={"#FF5733"} title="Login" onPress={LoginUser} />
            </View>
        </View >
    )
}

export default LoginPage