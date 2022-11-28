import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/Auth';

// import { Container } from './styles';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                placeholder='email'
                value={email}
                onChangeText={setEmail}
                style={{
                    paddingVertical: 14,
                    width: '90%',
                    borderWidth: 1,
                    marginBottom: 10
                }}
                autoCapitalize={'none'}

            />
            <TextInput
                placeholder='senha'
                value={password}
                onChangeText={setPassword}
                style={{
                    paddingVertical: 14,
                    width: '90%',
                    borderWidth: 1,
                    marginBottom: 10
                }}
            />

            <TouchableOpacity
                onPress={() => signIn(email, password)}
                style={{
                    backgroundColor: 'purple',
                    paddingVertical: 14,
                    paddingHorizontal: 24
                }}
            >
                <Text>Configurações</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignIn;