import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View.attrs({
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.primary
})`
    background: ${Colors.white};
    max-height: 65px;
    padding: 25px 0;
    justify-content: space-between;
    align-items: center;
    elevation: 2;
    z-index: 2;
    position: static;
    flex-direction: row;
`;

export const OptionsContainer = styled.View`
    flex-direction: row;
    margin-right: 7px;
`;


export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #f0f0f0;
    border-radius: 20px;
    margin: 0px 5px;
`;