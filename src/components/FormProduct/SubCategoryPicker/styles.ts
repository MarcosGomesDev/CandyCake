import styled from 'styled-components/native';
import Colors from '../../../styles/Colors';

export const Container = styled.View`
    width: 100%;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 55px;
    background: ${Colors.primary};
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`;
