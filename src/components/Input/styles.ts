import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    margin-bottom: 25px;
`;

export const InputContainer = styled.View.attrs({
    borderBottomWidth: 0.8, borderBottomColor: Colors.primary
})`
    width: 90%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const InputText = styled.TextInput`
    flex: 1;
    height: 50px;
    padding: 0 0 0 10px;
    color: ${Colors.primary};
`;

export const Button = styled.TouchableOpacity`
    height: 50px;
    justify-content: center;
    align-items: center;
`;