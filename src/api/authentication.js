import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"


export const login = async (params) => {
    return new Promise((resolve, reject) => {
        try {
            axios({
                method: "post",
                url: "http://restapi.adequateshop.com/api/authaccount/login",
                data: params
            })
                .then(res => {
                    console.log(res, "CODEEEEEEEEEEEEE");
                    resolve(res)
                    AsyncStorage.setItem("user",JSON.stringify(res.data))
                })
                .catch(err => {
                    console.log(err.response.data, "ERRRRRRRRRRRRRRRRRRR");
                    reject(err.response)
                })
        } catch (error) {
            console.log(error, "CODEEEEEEEEEEEEE");
            reject(error)
        }
    })
}