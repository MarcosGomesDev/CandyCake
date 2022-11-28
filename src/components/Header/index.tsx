import { useNavigation } from '@react-navigation/native';
import Text from '../Text';
import { Heart, MagnifyingGlass } from 'phosphor-react-native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import Colors from '../../styles/Colors';

import GoBackBtn from '../GoBackBtn';
import OpenDrawer from '../OpenDrawer';

import { Button, Container, OptionsContainer } from './styles';

interface HeaderProps {
    goBack?: boolean;
    showTitle?: boolean;
    title?: string;
    showOptions?: boolean;
}

const Header: React.FC<HeaderProps> = ({ goBack, showTitle, title, showOptions }) => {
    const navigation = useNavigation()

    return (
        <Container>
            {goBack ? (
                <GoBackBtn />
            ) : (
                <OpenDrawer />
            )}

            {showTitle && (
                <Text
                    size={24}
                    color={Colors.primary}
                    style={{ flex: 1 }}
                >
                    {title}
                </Text>
            )}

            {showOptions && (
                <OptionsContainer>
                    <Button
                        onPress={() => navigation.navigate('Buscar')}
                    >
                        <MagnifyingGlass size={20} color={Colors.primary} weight="bold" />
                    </Button>
                    <Button>
                        <Heart size={22} color={Colors.primary} weight="bold" />
                    </Button>
                </OptionsContainer>
            )}
        </Container>
    );
}

export default Header;