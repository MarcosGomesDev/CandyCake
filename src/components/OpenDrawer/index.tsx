import React from 'react';
import { List } from 'phosphor-react-native';

import { Button } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Colors from '../../styles/Colors';

const OpenDrawer: React.FC = () => {
    const navigation = useNavigation()

    return (
        <Button
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
            <List size={26} color={Colors.primary} />
        </Button>
    );
}

export default OpenDrawer;