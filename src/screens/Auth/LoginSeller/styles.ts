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

export const Form = styled.View`
    flex: 1;
    padding: 0 10px;
    margin-top: 20px;
    margin-bottom: 50px;
`;

export const ButtonOut = styled.TouchableOpacity`
    margin: 0px 0 40px 0;
    align-self: flex-end;
    padding-right: 20px;
`;
