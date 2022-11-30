import React, { useState } from 'react';
import CategoryModal from '../../CategoryModal';
import Colors from '../../../styles/Colors'
import Text from '../../Text';
import { Button, Container } from './styles';

interface IProps {
    category: string;
    onChangeCategory: (params: any) => void;
}

const CategoryPicker: React.FC<IProps> = ({category, onChangeCategory}) => {
    const [modalVisible, setModalVisible] = useState(false)

    const onCategoryPress = (item: any) => {
        onChangeCategory(item)
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
                Categoria
            </Text>
            <Button
                onPress={() => setModalVisible(true)}
            >
                <Text
                    color={Colors.white}
                    weight={700}
                >
                    {category || 'Selecione'}
                </Text>
            </Button>
            <CategoryModal
                isVisible={modalVisible}
                onConfirm={onCategoryPress}
                onCancel={onClosePress}
            />
        </Container>
    );
};

export default CategoryPicker;
