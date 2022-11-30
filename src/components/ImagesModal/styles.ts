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
    borderBottomColor: Colors.primary,
})`
    height: 60px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Image = styled.Image`
    width: 500px;
    height: 500px;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const CloseModalBtn = styled.TouchableOpacity``;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    bottom: 30px;
    padding: 0 20px;
`;

export const OptionsBtn = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 150px;
    align-items: center;
    justify-content: center;
`;

