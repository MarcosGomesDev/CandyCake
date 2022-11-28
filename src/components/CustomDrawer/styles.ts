import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
    flex: 1;
    background: ${Colors.white};
    margin-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
    width: 100%;
`;

export const Header = styled.View.attrs({
    borderBottomWidth: 0.8, borderBottomColor: Colors.primary
})`
    flex-direction: row;
    padding-bottom: 20px;
    flex: 1;
    align-items: center;
`;

export const Image = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1.5px solid ${Colors.primary};
`;

export const UserContainer = styled.View`
    flex-direction: row;
    margin-left: 25px;
`;

export const UserDetails = styled.View`
    padding-left: 20px;
    align-items: center;
    justify-content: center;
`;

export const Footer = styled.SafeAreaView.attrs({
    borderTopWidth: 0.8, borderTopColor: Colors.primary, justifyContent: 'center'
})``;
