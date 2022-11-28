import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// import { Container } from './styles';

const Settings: React.FC = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Help')}
                style={{backgroundColor: 'purple', padding: 30}}
            >

            </TouchableOpacity>
        </View>
    );
}

export default Settings;