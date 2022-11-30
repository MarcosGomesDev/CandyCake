
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../styles/Colors';
import { Container } from './styles';

// create a component
const SearchInput = () => {
    const navigation = useNavigation()

    return (
        <Container
            onPress={() => navigation.navigate('Buscar')}
        >
            <Icon style={{ fontWeight: 'bold'}} name="search" size={22} color={Colors.primary} />
        </Container>
    );
};

export default SearchInput;
