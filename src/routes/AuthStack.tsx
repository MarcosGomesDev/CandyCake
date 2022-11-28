import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserRegister from '../screens/Auth/UserRegister';
import LoginSeller from '../screens/Auth/LoginSeller';
import LoginUser from '../screens/Auth/LoginUser';
import SellerRegister from '../screens/Auth/SellerRegister';
import AddressInfo from '../screens/Auth/SellerRegister/AddressInfo';
import EmailInfo from '../screens/Auth/SellerRegister/EmailInfo';

const Stack = createNativeStackNavigator()

const AuthStack: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="LoginUser" component={LoginUser} />
            <Stack.Screen name="LoginSeller" component={LoginSeller} />
            <Stack.Screen name="UserRegister" component={UserRegister} />
            <Stack.Screen name="SellerRegister" component={SellerRegister} />
            <Stack.Screen name="AddressInfo" component={AddressInfo} />
            <Stack.Screen name="EmailInfo" component={EmailInfo} />
        </Stack.Navigator>
    )
}

export default AuthStack;