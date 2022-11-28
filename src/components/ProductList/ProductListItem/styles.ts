import styled from 'styled-components/native';
import Colors from '../../../styles/Colors';

export const Container = styled.TouchableOpacity`
    width: 190px;
    border-radius: 10px;
    margin: 5px 0;
    align-items: center;
    background: #fff;
    elevation: 5;
`;

export const ProductContainer = styled.View`
    width: 100%;
`;

export const ProductImage = styled.Image`
    width: 100%;
    height: 150px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 10px;
`;

export const AddToFavoritesBtn = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    justify-content: center; 
    align-items: center; 
    background: ${Colors.primary};
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    // position: 'absolute',
    right: 0;
    top: 10px;
`;
