import React, { useState } from 'react';
import {FlatList, Modal, ModalProps} from 'react-native';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { useQuery } from '@tanstack/react-query';
import { api } from '../../services/api';
import Text from '../Text';
import { ButtonCancel, ButtonClearInput, ButtonItem, Container, Footer, Header, InputContainer } from './styles';
import Input from '../Input';

interface IModal extends ModalProps {
    isVisible: boolean;
    onConfirm: (name: any) => void;
    onCancel: () => void;
}

const CategoryModal: React.FC<IModal> = ({isVisible, onConfirm, onCancel}) => {
    const [search, setSearch] = useState('')

    const {data, isLoading} = useQuery(['categories-list'], api.getAllCategories)

    const filteredCategories = search.length > 0
        ? data.filter((item: any) => item.name.includes(search))
        : data?.sort(function (a: any, b: any) {
            if(a.name < b.name) return -1
        })
    
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={isVisible}
            style={{marginHorizontal: 0, marginBottom: 0}}
        >
            <Container>
                <Header>
                    <Text
                        color={Colors.primary}
                        size={22}
                        weight={700}
                    >
                        Categorias
                    </Text>
                </Header>
                <InputContainer>
                    <Icon name="search" size={26} color={Colors.primary} />
                    <Input
                        iconName=''
                        onChangeText={(text) => setSearch(text)}
                        value={search}
                        placeholder='Procurar por...'
                        placeholderTextColor="#a9a9a9"
                    />
                    {search.length > 0 ? 
                        <ButtonClearInput
                            onPress={() => setSearch('')}
                        >
                            <Icon name="close" size={26} color={Colors.primary} />
                        </ButtonClearInput>
                    : <></>}
                </InputContainer>
                <FlatList
                    data={filteredCategories}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => (
                        <ButtonItem
                            onPress={() => {
                                onConfirm(item.name)
                                setSearch('')
                            }}
                        >
                            <Text
                                color={Colors.white}
                                size={22}
                            >
                                {item.name}
                            </Text>
                        </ButtonItem>
                    )}
                />
                <Footer
                >
                    <ButtonCancel onPress={onCancel}>

                    </ButtonCancel>
                </Footer>
            </Container>
        </Modal>
    );
};

export default CategoryModal;