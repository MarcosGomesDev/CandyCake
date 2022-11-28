import React from 'react';
import { CaretLeft } from 'phosphor-react-native';

import { Button } from './styles';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../styles/Colors';

const GoBackBtn: React.FC = () => {
    const navigation = useNavigation()

    return (
        <Button
            onPress={() => navigation.goBack()}
        >
            <CaretLeft size={26} color={Colors.primary} />
        </Button>
    );
}

export default GoBackBtn;