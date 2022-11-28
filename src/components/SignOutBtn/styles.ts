import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 5px 20px;
    height: 50px;
    border-top: 1px solid ${Colors.primary};
`;
