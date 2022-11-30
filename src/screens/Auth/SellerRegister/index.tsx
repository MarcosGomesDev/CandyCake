/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createRef, useRef } from 'react';
import { TouchableOpacity, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { showToast } from '../../../store/modules/toast/actions';
import { useDispatch } from 'react-redux';

import Input, { InputHandler } from '../../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Form, Header } from './styles';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import StatusBarCustom from '../../../components/StatusBarCustom';
import { formatCPF } from '../../../utils/formatCPF';
import Container from '../../../components/Container';
// import { isValidCpf } from '../../../utils/validators';

// create a component
const SellerRegister: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [storeName, setStoreName] = useState('')
    const [credential, setCredential] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)

    const nameInput = useRef<InputHandler>(null);
    const lastNameInput = useRef<InputHandler>(null);
    const storeNameInput = useRef<InputHandler>(null)
    const credentialInput = useRef<InputHandler>(null);

    useEffect(() => {
        nameInput.current?.resetError();
        lastNameInput.current?.resetError();
        storeNameInput.current?.resetError()
        credentialInput.current?.resetError()
    }, [name, lastname, storeName, credential]);

    const next = async () => {
        if (name === '') {
            dispatch(showToast('Por favor insira o nome', 'error', 'error'));
            nameInput.current?.focusOnError();
            return;
        }

        if (name.length < 3) {
            dispatch(
                showToast(
                    'Nome muito curto, mínimo de 3 caracteres!',
                    'error',
                    'error',
                ),
            );
            nameInput.current?.focusOnError();
            return;
        }

        if (lastname === '') {
            dispatch(showToast('Por favor insira o sobrenome', 'error', 'error'));
            lastNameInput.current?.focusOnError();
            return;
        }

        if (lastname.length < 3) {
            dispatch(
                showToast(
                    'Sobrenome muito curto, mínimo de 3 caracteres!',
                    'error',
                    'error',
                ),
            );
            lastNameInput.current?.focusOnError();
            return;
        }

        if (storeName === '') {
            dispatch(showToast('Por favor insira o nome da loja', 'error', 'error'));
            storeNameInput.current?.focusOnError();
            return;
        }

        if (storeName.length < 3) {
            dispatch(showToast('Nome da loja muito curto, mínimo de 3 caracteres!', 'error', 'error'));
            storeNameInput.current?.focusOnError();
            return;
        }

        if (credential === '') {
            dispatch(showToast('Por favor insira o CPF', 'error', 'error'));
            credentialInput.current?.focusOnError()
            return;
        }

        if (isValidCPF(credential) === false) {
            dispatch(showToast('CPF inválido!', 'error', 'error'))
            credentialInput.current?.focusOnError()
        }

        // if (isValidCpf(credential) === false) {
        //     dispatch(showToast('CPF inválido!', 'error', 'error'));
        //     credentialInput.current?.focusOnError()
        //     return;
        // }

        const item = {
            name,
            lastname,
            storeName,
            credential: credential.replace(/\./gi, '').replace(/-/gi, '')
        };

        // console.log(item, 'passo 1')

        navigation.navigate<any>('AddressInfo', item);
    };

    function isValidCPF(value: string) {
        if (value == '') {
            return true
        }

        let cpf = value.replace(/\./gi, '').replace(/-/gi, '')
        var isValid = true
        var sum
        var rest
        var i
        i = 0
        sum = 0

        if (
            // cpf.length != 11 ||
            cpf == '00000000000' ||
            cpf == '11111111111' ||
            cpf == '22222222222' ||
            cpf == '33333333333' ||
            cpf == '44444444444' ||
            cpf == '55555555555' ||
            cpf == '66666666666' ||
            cpf == '77777777777' ||
            cpf == '88888888888' ||
            cpf == '99999999999'
        ) {
            dispatch(showToast('CPF inválido!', 'error', 'error'))
            isValid = false
        }

        for (i = 1; i <= 9; i++) {
            sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
        }

        rest = (sum * 10) % 11

        if (rest == 10 || rest == 11) {
            rest = 0
        }

        if (rest != parseInt(cpf.substring(9, 10))) {
            isValid = false
        }

        sum = 0

        for (i = 1; i <= 10; i++) {
            sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
        }

        rest = (sum * 10) % 11

        if (rest == 10 || rest == 11) {
            rest = 0
        }
        if (rest != parseInt(cpf.substring(10, 11))) {
            isValid = false
        }

        return isValid
    }

    return (
        <Container>
            <Header>
                <BackButton
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="arrow-back" size={22} color={Colors.white} />
                </BackButton>
                <View style={{ marginBottom: 40 }}>
                    <Text
                        style={{ paddingLeft: 20 }}
                        weight={700}
                        size={26}
                        color={Colors.primary}
                        align="left"
                    >
                        Olá,
                    </Text>
                    <Text
                        style={{ paddingLeft: 20 }}
                        weight={700}
                        size={22}
                        color={Colors.primary}
                        align="left"
                    >
                        Por favor insira seus dados!
                    </Text>
                </View>
            </Header>
            <KeyboardAwareScrollView
                extraScrollHeight={180}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Form>
                        <Text
                            color={Colors.primary}
                            weight={600}
                            size={24}
                            align="left"
                            style={{ paddingLeft: 20, marginBottom: 30 }}
                        >
                            Cadastro usuário
                        </Text>
                        <Input
                            ref={nameInput}
                            showTitle
                            title='Nome'
                            placeholder='Seu nome'
                            autoCorrect={false}
                            value={name}
                            onChangeText={setName}
                            iconName='person'
                        />
                        <Input
                            showTitle
                            title='Sobrenome'
                            placeholder='Seu sobrenome'
                            autoCorrect={false}
                            value={lastname}
                            onChangeText={setLastname}
                            iconName='person'
                        />
                        <Input
                            showTitle
                            title='Nome da loja'
                            placeholder='Doce da Juju'
                            autoCorrect={false}
                            value={storeName}
                            onChangeText={setStoreName}
                            iconName='store'
                        />
                        <Input
                            ref={credentialInput}
                            showTitle
                            title='CPF'
                            placeholder='Insira somente os números'
                            autoCorrect={false}
                            maxLength={14}
                            value={credential}
                            keyboardType="number-pad"
                            onChangeText={(text) => {
                                isValidCPF(text)
                                setCredential(formatCPF(text))
                            }}
                            iconName='person'
                        />
                        <Button
                            onPress={next}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator size={'large'} color={Colors.white} />
                            ) : (
                                <Text
                                    color={Colors.white}
                                    size={18}
                                    weight={700}
                                >
                                    Próximo
                                </Text>
                            )}
                        </Button>
                    </Form>
                </ScrollView>
            </KeyboardAwareScrollView>
        </Container>
    );
};

export default SellerRegister;
