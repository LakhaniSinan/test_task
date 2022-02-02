import { createStackNavigator } from '@react-navigation/stack';
import React from "react"
import Home from '../containers/app/HomePage';
import About from '../containers/app/AboutPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }}
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}

function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }}
                name="Home"
                component={About}
            />
        </Stack.Navigator>
    )
}

function MyStack() {
    return (

        <Tab.Navigator
            barStyle={{
                backgroundColor: "#fff",
            }}
        >
            <Tab.Screen name="Home" component={HomeStack}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color }) => {
                        return (
                            <AntDesign name="home" size={24} color="#000" />
                        )
                    },
                }}
            />
            <Tab.Screen name="About" component={AboutStack}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color }) => {
                        return (
                            <AntDesign name="infocirlceo" size={24} color="#000" />
                        )
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default MyStack