import { SignOut } from 'phosphor-react-native';
import React from 'react';
import { useAuth } from '../../context/Auth';
import Colors from '../../styles/Colors';
import Text from '../Text';

import { Button } from './styles';

const SignOutBtn: React.FC = () => {
    const {signOut} = useAuth()

    return (
        <Button
            onPress={signOut}
        >
            <SignOut
                size={28}
                color={Colors.primary}
                weight="bold"
                style={{marginRight: 10}}
            />
            <Text
                color={Colors.primary}
            >Sair</Text>
        </Button>
    );
}

export default SignOutBtn;