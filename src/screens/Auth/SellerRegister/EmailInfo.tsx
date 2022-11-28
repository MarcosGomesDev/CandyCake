/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createRef, useRef } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { showToast } from '../../../store/modules/toast/actions';
import { useDispatch } from 'react-redux';

import Input, { InputHandler } from '../../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';
import { isValidEmail } from '../../../utils/validators';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Container, Form, Header } from './styles';
import StatusBarCustom from '../../../components/StatusBarCustom';
import Text from '../../../components/Text';
import Button from '../../../components/Button';

// import { api } from '../../../services/api';

const EmailInfo: React.FC = ({ route }: any) => {
    const item = route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const emailInput = useRef<InputHandler>(null);
    const passInput = useRef<InputHandler>(null);
    const confPassInput = useRef<InputHandler>(null);

    useEffect(() => {
        emailInput.current?.resetError();
        passInput.current?.resetError();
        confPassInput.current?.resetError();
    }, [email, password, confPassword]);

    const SignUp = async () => {
        if (email === '') {
            dispatch(showToast('Por favor insira o email', 'error', 'email'));
            emailInput.current?.focusOnError();
            return;
        }

        if (!isValidEmail(email)) {
            dispatch(showToast('Email inválido!', 'error', 'email'));
            emailInput.current?.focusOnError();
            return;
        }

        if (password === '') {
            dispatch(showToast('Por favor insira a senha', 'error', 'lock'));
            passInput.current?.focusOnError();
            return;
        }

        // if(password.length < 8) {
        //     dispatch(showToast('Muito curta, a senha precisa ter 8 caracteres', 'error', 'lock'))
        //     passInput.current?.focusOnError()
        //     return
        // }

        if (password !== confPassword) {
            dispatch(showToast('As senhas não correspondem!', 'error', 'lock'));
            confPassInput.current?.focusOnError();
            return;
        }

        setLoading(true)
        const data = {
            name: item.name,
            lastname: item.lastname,
            credential: item.credential,
            storename: item.storename,
            cep: item.cep,
            logradouro: item.logradouro,
            numero: item.numero,
            complemento: item.complemento,
            bairro: item.bairro,
            localidade: item.localidade,
            UF: item.UF,
            email: email,
            password: password,
        }

        // await api.registerSeller(data)
        //     .then((data) => {
        //         console.log(data)
        //         setLoad(false);
        //         dispatch(showToast(data, 'success', 'done'));
        //         setTimeout(() => {
        //             navigation.navigate('SellerLogin');
        //         }, 2000);
        //     })
        //     .catch((err) => {
        //         console.log(err.response.data);
        //         Alert.alert(
        //             'Erro',
        //             'Erro ao criar vendedor, tente novamente mais tarde!',
        //         )
        //         setLoad(false)
        //     })
    };

    return (
        <Container>
            <StatusBarCustom
                barStyle='light-content'
                backgroundColor={Colors.secondary}
            />
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
            <KeyboardAwareScrollView extraScrollHeight={15}>

                <Form>
                    <Text
                        color={Colors.primary}
                        weight={600}
                        size={24}
                        align="left"
                        style={{ paddingLeft: 20, marginBottom: 30 }}
                    >
                        Cadastro vendedor
                    </Text>
                    <Input
                        showTitle
                        title="Email"
                        ref={emailInput}
                        placeholder="email@exemplo.com"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                        iconName={'email'}
                        keyboardType="email-address"
                    />
                    <Input
                        ref={passInput}
                        showTitle
                        title='Senha'
                        iconName='lock'
                        placeholder='********'
                        secure
                        secureEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Input
                        ref={confPassInput}
                        showTitle
                        title='Confirmar senha'
                        iconName='lock'
                        placeholder='********'
                        secure
                        secureEntry
                        value={confPassword}
                        onChangeText={setConfPassword}
                    />
                    <Button
                        onPress={SignUp}
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
                                Cadastrar
                            </Text>
                        )}
                    </Button>
                </Form>
            </KeyboardAwareScrollView>
        </Container>
    );
};

export default EmailInfo;
