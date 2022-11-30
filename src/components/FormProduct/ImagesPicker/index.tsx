/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import {
    PermissionsAndroid,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';
import ImagesModal from '../../ImagesModal';
import * as ImagePicker from 'react-native-image-picker';
import { ImageLibraryOptions, ImagePickerResponse } from 'react-native-image-picker';
import { AddImageBtn, Button, Container, Image, ImageContainer } from './styles';
import Text from '../../Text';

interface IProps {
    values: any;
    onChangeImages: (values: any) => void;
}

const ImagesPicker: React.FC<IProps> = ({ values, onChangeImages }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [item, setItem] = useState({});

    const options: ImageLibraryOptions = {
        selectionLimit: 1,
        mediaType: 'photo',
    };

    const deleteImage = (image: any) => {
        const index = values.indexOf(image);

        Alert.alert('Remover', 'Você deseja realmente remover essa imagem?', [
            {
                text: 'cancelar',
                onPress: () => { },
            },
            {
                text: 'ok',
                onPress: () => {
                    if (index > -1) {
                        values.splice(index, 1);

                        onChangeImages(values);
                    }
                    setModalVisible(false);
                },
            },
        ]);
    };

    const editImage = async (image: any) => {
        const data: ImagePickerResponse = await ImagePicker.launchImageLibrary(options);
        if (data.didCancel) {
            console.log('User cancelled image picker');
            return;
        }
        if (data.errorMessage) {
            return;
        }
        if (!data.assets) {
            return;
        }

        const newImage = data.assets;

        const index = values.findIndex((item: any) => {
            return item === image;
        });

        if (index !== -1) {
            values[index] = newImage[0].uri;
            setModalVisible(false);
        }
        onChangeImages(values);
    };

    const getImages = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Permissão para acessar suas fotos',
                    message: 'O app precisa de acesso as suas fotos',
                    buttonNegative: 'Cancelar',
                    buttonPositive: 'Ok',
                },
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                const data: ImagePickerResponse = await ImagePicker.launchImageLibrary(options);
                if (data.didCancel) {
                    console.log('User cancelled image picker');
                    return;
                }
                if (data.errorMessage) {
                    return;
                }
                if (!data.assets) {
                    return;
                }

                const image = data.assets;

                const final = [];

                final.push({
                    uri: image[0].uri,
                    type: image[0].type,
                });

                const send = values.concat(final);

                onChangeImages(send);
            } else {
                Alert.alert('Permissão a galeria negada');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Text
                color={Colors.white}
                weight={700}
                style={{
                    marginBottom: 20,
                    textAlign: 'left',
                }}
            >
                Images
            </Text>
            <ImageContainer
                style={{ justifyContent: values.length === 3 ? "center" : undefined }}
            >
                {values.map((item: any, index: any) => {
                    return (
                        <Button
                            onPress={() => {
                                setModalVisible(true);
                                setItem(item.uri || item);
                            }}
                            key={index}
                            style={{
                                    width: values.length === 3 ? '30.3%' : '22%',
                                    height: values.length === 3 ? 120 : 80,
                                }}
                        >
                            <Image
                                source={{ uri: item.uri || item }}
                            />
                        </Button>
                    );
                })}
                {values.length < 3 ? (
                    <AddImageBtn
                        onPress={() => getImages()}
                    >
                        <Icon name="add" size={32} color={Colors.white} />
                    </AddImageBtn>
                ) : (
                    <></>
                )}
            </ImageContainer>

            <ImagesModal
                isVisible={modalVisible}
                image={item}
                onEditImage={() => editImage(item)}
                onDeleteImage={() => deleteImage(item)}
                onCancel={() => setModalVisible(false)}
            />
        </Container>
    );
};

export default ImagesPicker;
