import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Colors from '../../../styles/Colors';
import Input from '../../Input';
import Text from '../../Text';
import { Container } from './styles';

interface IProps {
    value: string;
    onChangeText: (param: any) => void;
}

const TitleInput: React.FC<IProps> = ({ value, onChangeText }) => {
    return (
        <Container>
            <Text
                color={Colors.primary}
                weight={700}
                style={{
                    marginBottom: 5,
                    marginTop: 15,
                    textAlign: 'left',
                }}
            >
                Título do produto
            </Text>
            <Input
                iconName=''
                placeholder="Bolo de cenoura"
                placeholderTextColor="#aaa"
                value={value}
                onChangeText={onChangeText}
            />
        </Container>
    );
};

export default TitleInput;
