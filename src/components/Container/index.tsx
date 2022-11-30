import React from 'react';
import { View } from 'react-native';
import Toast from '../Toast';

import { ContainerScreen } from './styles';

interface IContainer {
    children: React.ReactNode
}

const Container: React.FC<IContainer> = ({children}) => {
    return (
        <ContainerScreen style={{backgroundColor: '#fff'}}>
            <Toast />
            {children}
        </ContainerScreen>
    );
}

export default Container;