import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

interface ButtonProps {
    color?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    width: 90%;
    height: 55px;
    background: ${({color}) => color || Colors.primary};
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    align-self: center;
`;
