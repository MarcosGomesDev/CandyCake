import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps{
    children: React.ReactNode;
    onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({children, onPress, ...rest}) => {
    return (
        <Container
            onPress={onPress}
            {...rest}
        >
            {children}
        </Container>
    );
}

export default Button;