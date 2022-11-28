import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Settings from "../screens/App/Settings";
import MyDrawer from "./DrawerNav";
import Help from "../screens/App/Help";

const Stack = createNativeStackNavigator()

export function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Main" component={MyDrawer} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
    )
}
