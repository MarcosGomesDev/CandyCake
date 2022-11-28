//import liraries
import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../../styles/Colors';
import Text from '../../Text';

import { AddToFavoritesBtn, Container, ProductContainer, ProductImage } from './styles';

interface IProps {
    data: any;
    onPress: () => void;
}

const ProductListItem: React.FC<IProps> = ({data, onPress}) => {
    let item = data

    return (
        <Container
            onPress={onPress}
        >
            <ProductContainer>
                <ProductImage source={{uri: item.images[0]}} />
                <Text
                    weight={700}
                    color={Colors.primary}
                    style={{paddingLeft: 10}}
                >
                    {item.category.name}
                </Text>
                <Text
                    weight={700}
                    numberOfLines={1}
                    color={Colors.black}
                    style={{ width: 170, paddingTop: 5, paddingLeft: 10}}
                >
                    {item.name}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text
                    size={18}
                    weight={700}
                    color={Colors.black}
                    style={{flex: 1, paddingLeft: 12, marginTop:15, paddingBottom: 10}}
                >
                    R$ {item.price}
                </Text>
                <AddToFavoritesBtn 
                    
                >
                    <Icon name="add" size={24} color={Colors.white} />
                </AddToFavoritesBtn>
                </View>
            </ProductContainer>
        </Container>
    );
};

export default ProductListItem;
