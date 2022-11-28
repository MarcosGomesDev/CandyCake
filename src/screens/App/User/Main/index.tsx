import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../../../../components/Header';
import StatusBarCustom from '../../../../components/StatusBarCustom';

import { Container } from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <StatusBarCustom
                backgroundColor='#fff'
            />
            <Header
                showOptions
            />
        </Container>
    );
}

export default Main;