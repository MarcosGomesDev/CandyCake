import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import AuthStack from './AuthStack';
import { useAuth } from '../context/Auth';
import { ActivityIndicator, Text, View } from 'react-native';

const Router = () => {
    const { authData, loading } = useAuth()

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    style={{marginBottom: 20}}
                >
                    Carregando...
                </Text>
                <ActivityIndicator size="large" color="green" />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {authData ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}

export default Router;
