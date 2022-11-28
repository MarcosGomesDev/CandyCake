import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../../../components/Header';
import ProductList from '../../../../components/ProductList';
import StatusBarCustom from '../../../../components/StatusBarCustom';

import { Container } from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <StatusBarCustom
                backgroundColor='#fff'
                barStyle='dark-content'
            />
            <Header
                showOptions
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ProductList />
            </ScrollView>
        </Container>
    );
}

export default Main;