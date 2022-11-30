import React from 'react';
import { Modal, ModalProps } from 'react-native';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CloseModalBtn, Container, Content, Footer, Header, Image, OptionsBtn } from './styles';
import Text from '../Text';

interface IModal extends ModalProps {
    isVisible: boolean;
    image: string | any;
    onDeleteImage: () => void;
    onCancel: () => void;
    onEditImage: () => void;
}

const ImagesModal: React.FC<IModal> = ({
    isVisible,
    image,
    onDeleteImage,
    onEditImage,
    onCancel,
}) => {
    return (
        <Modal
            transparent={true}
            visible={isVisible}
            style={{ marginHorizontal: 0, marginBottom: 0 }}>
            <Container>
                <Header>
                    <Text
                        size={22}
                        weight={700}
                        color={Colors.primary}
                    >
                        Imagem do produto
                    </Text>
                    <CloseModalBtn onPress={onCancel}>
                        <Icon name="close" size={36} color={Colors.primary} />
                    </CloseModalBtn>
                </Header>
                <Content>
                    <Image
                        source={{ uri: image }}
                    />
                </Content>
                <Footer>
                    <OptionsBtn
                        onPress={onDeleteImage}
                        style={{ backgroundColor: '#ff0000' }}>
                        <Icon name="delete" size={24} color="#fff" />
                    </OptionsBtn>
                    <OptionsBtn
                        onPress={onEditImage}
                        style={{ backgroundColor: '#808080' }}>
                        <Icon name="edit" size={24} color="#fff" />
                    </OptionsBtn>
                </Footer>
            </Container>
        </Modal>
    );
};

export default ImagesModal;
