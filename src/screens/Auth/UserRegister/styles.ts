import styled from 'styled-components/native';
import Colors from '../../../styles/Colors';
import { heightPercent } from '../../../utils/dimensions';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background: #fff;
`;

export const Header = styled.View`
    height: ${heightPercent('25')}px;
    background-color: ${Colors.secondary};
    align-items: flex-start;
    justify-content: flex-end;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 15px;
    right: 15px;
    height: 35px;
    width: 35px;
    background: ${Colors.primary};
    border-radius: 17px;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.View`
    flex: 1;
    padding: 0 10px;
    margin-top: 20px;
    margin-bottom: 50px;
`;
