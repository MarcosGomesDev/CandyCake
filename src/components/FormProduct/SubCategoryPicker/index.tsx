import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import SubCategoryModal from '../../SubCategoryModal';
import Colors from '../../../styles/Colors'
import { Button, Container } from './styles';
import Text from '../../Text';

interface IProps {
    subCategory: String;
    onChangeSubCategory: (item: any) => void;
}

const CategoryPicker: React.FC<IProps> = ({subCategory, onChangeSubCategory}) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const onSubCategoryPress = (item: any) => {
        onChangeSubCategory(item)
        onClosePress()
    }

    const onClosePress = () => {
        setModalVisible(false)
    }

    return (
        <Container>
            <Text
                color={Colors.primary}
                weight={700}
                style={{
                    marginBottom: 15,
                    textAlign: 'left',
                }}
            >
                Sub Categoria
            </Text>
            <Button
                onPress={() => setModalVisible(true)}
            >
                <Text
                    color={Colors.white}
                    weight={700}
                >
                    {subCategory || 'Selecione'}
                </Text>
            </Button>
            <SubCategoryModal
                isVisible={modalVisible}
                onConfirm={onSubCategoryPress}
                onCancel={onClosePress}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    titleInput: {
        
        color: Colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    btn: {
        width: '100%',
        height: 55,
        backgroundColor: Colors.primary,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    textBtn: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CategoryPicker;
