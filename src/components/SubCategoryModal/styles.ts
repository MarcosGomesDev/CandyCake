import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
    flex: 1;
    background: ${Colors.white};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: 60px;
    margin: 0;
    padding: 0;
`;

export const Header = styled.View.attrs({
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.primary
})`
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const InputContainer = styled.View.attrs({
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.primary
})`
    padding: 0 10px;
    flex-direction: row;
    align-items: center;
    height: 50;
    width: 100%;
`;

export const ButtonClearInput = styled.TouchableOpacity`
    padding: 0 10px 0 0;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

export const ButtonItem = styled.TouchableOpacity`
    background: ${Colors.primary};
    border-radius: 15px;
    margin: 10px 20px;
    padding: 20px;
`;

export const Footer = styled.View``;

export const ButtonCancel = styled.TouchableOpacity``;