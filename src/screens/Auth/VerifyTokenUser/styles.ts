import styled from 'styled-components/native';
import Colors from '../../../styles/Colors';
import { heightPercent } from '../../../utils/dimensions';

export const Container = styled.View`
    flex: 1;
    background: #fff;
`;

export const Content = styled.View`
    margin: 0 20px;
    margin-bottom: 20px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
`;

export const InputContainer = styled.View.attrs({
    borderRadius: 10,
    borderColor: Colors.primary,
    borderWidth: 0.8,
})``;

export const Input = styled.TextInput`
    font-size: 25px;
    color: ${Colors.primary};
    padding: 14px 16px;
    text-align: center;
`;

export const Footer = styled.View`
    flex: 1;
    align-items: center;
    padding: 10px;
    margin-top: 40px;
    height: ${heightPercent('60%')}px;
    width: 95%;
`;

export const FooterContent = styled.View`
    margin-bottom: 50px;
    align-items: center;
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    width: 45%;
    height: 50px;
    margin: 0 10px;
    justify-content: center;
`;
