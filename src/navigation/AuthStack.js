import { createStackNavigator } from '@react-navigation/stack';
import React from "react"
import LoginPage from '../containers/auth/Login';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name="Login" component={LoginPage} />
        </Stack.Navigator>
    );
}

export default MyStack