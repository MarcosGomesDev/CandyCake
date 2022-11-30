import styled from 'styled-components/native';
import Colors from '../../../styles/Colors';

export const Container = styled.View`
    width: 100%;
`;

export const ImageContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
`;

export const Button = styled.TouchableOpacity`
    margin: 0 5px;
    align-items: center;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
    margin: 0 5px;
    border-radius: 10px;
`;

export const AddImageBtn = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    background: ${Colors.primary};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;