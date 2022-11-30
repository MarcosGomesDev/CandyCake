import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import TitleInput from './TitleInput';
import PriceInput from './PriceInput';
import DescriptionInput from './DescriptionInput';
import CategoryPicker from './CategoryPicker';
import SubCategoryPicker from './SubCategoryPicker';
import ImagesPicker from './ImagesPicker';
import Colors from '../../styles/Colors';
import { useDispatch } from 'react-redux';
import { showToast } from '../../store/modules/toast/actions';
import { Container, Form } from './styles';
import Button from '../Button';
import Text from '../Text';

interface IProps {
    productData: any;
    handleSubmit: (product: Product) => void;
    titleBtn: string;
}

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: string | number;
    images: Array<string>;
    category: string;
    subcategory: string;
}

const NewProduct: React.FC<IProps> = ({ productData, handleSubmit, titleBtn }) => {
    const dispatch = useDispatch()

    let data: Product = {
        _id: productData?._id ?? '',
        name: productData?.name ?? '',
        description: productData?.description ?? '',
        price: productData?.price ?? '',
        images: productData?.images ?? [],
        category: productData?.category?.name ?? '',
        subcategory: productData?.subcategory?.name ?? '',
    };

    const [product, setProduct] = useState(data || {});
    const [name, setName] = useState(product?.name || '');
    const [price, setPrice] = useState(product?.price || '0,00');
    const [description, setDescription] = useState(product?.description || '');
    const [category, setCategory] = useState(product?.category || '');
    const [subcategory, setSubCategory] = useState(product?.subcategory || '');
    const [images, setImages] = useState(product?.images || []);

    console.log(price)

    function submit() {
        if (
            name === '' ||
            price === '' ||
            category === '' ||
            subcategory === '' ||
            images === null
        ) {
            dispatch(showToast('Preencha todos os campos!', 'error', 'error'));
            return;
        }
        handleSubmit(product);
    }

    return (
        <Container>
            <KeyboardAwareScrollView extraScrollHeight={20}>
                <ScrollView style={{ paddingHorizontal: 15, marginBottom: 5 }}>
                    <Form>
                        <TitleInput
                            value={name}
                            onChangeText={(text: string) => {
                                setName(text);
                                setProduct({ ...product, name: text });
                            }}
                        />

                        <PriceInput
                            value={price}
                            onChangeTextValue={(text: string) => {
                                setPrice(text);
                                setProduct({ ...product, price: parseInt(text) });
                            }}
                        />

                        <DescriptionInput
                            value={description}
                            onChangeTextValue={(text: string) => {
                                setDescription(text);
                                setProduct({ ...product, description: text });
                            }}
                        />

                        <CategoryPicker
                            category={category}
                            onChangeCategory={(e: string) => {
                                setCategory(e);
                                setProduct({ ...product, category: e });
                            }}
                        />

                        <SubCategoryPicker
                            subCategory={subcategory}
                            onChangeSubCategory={(e: string) => {
                                setSubCategory(e);
                                setProduct({ ...product, subcategory: e });
                            }}
                        />

                        <ImagesPicker
                            values={images}
                            onChangeImages={(e: any) => {
                                setImages(e);
                                setProduct({ ...product, images: e });
                            }}
                        />
                    </Form>
                    <Button
                        onPress={submit}
                    >
                        <Text
                            color={Colors.white}
                            weight={700}
                        >
                            {titleBtn}
                        </Text>
                    </Button>
                </ScrollView>
            </KeyboardAwareScrollView>
        </Container>
    );
};

export default NewProduct;
