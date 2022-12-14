
import React from 'react';
import { ActivityIndicator } from 'react-native';
import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../styles/Colors';
import ProductListItem from './ProductListItem';
import {api} from '../../services/api'
import { widthPercent } from '../../utils/dimensions';
import { useQuery } from '@tanstack/react-query';
import { Container } from './styles';

const ProductList = () => {
    const navigation = useNavigation()
    const {data, isError, isLoading} =useQuery(['product-list'], api.getProducts)
    return (
        <>
            {isLoading && (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                </View>
            )}
            <Container>
                {data?.map((item: any) => (
                    <ProductListItem
                        data={item}
                        key={item._id}
                        onPress={() => navigation.navigate<any>('ProductItem', item._id)}
                    />
                ))}
            </Container>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: widthPercent(100),
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
});

export default ProductList