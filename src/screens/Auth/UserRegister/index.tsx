
import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, ActivityIndicator, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { showToast } from '../../../store/modules/toast/actions'
import { useDispatch } from 'react-redux'
import { isValidEmail } from '../../../utils/validators'
// import {api} from '../../../services/api'

import Colors from '../../../styles/Colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Input, { InputHandler } from '../../../components/Input';
import StatusBarCustom from '../../../components/StatusBarCustom';
import Text from '../../../components/Text';
import Button from '../../../components/Button';

import { BackButton, Container, Form, Header } from './styles';

const UserRegister: React.FC = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const nameInput = useRef<InputHandler>(null)
    const lastnameInput = useRef<InputHandler>(null)
    const emailInput = useRef<InputHandler>(null)
    const passInput = useRef<InputHandler>(null)
    const confPassInput = useRef<InputHandler>(null)

    useEffect(() => {
        nameInput.current?.resetError()
        lastnameInput.current?.resetError()
        emailInput.current?.resetError()
        passInput.current?.resetError()
        confPassInput.current?.resetError()
    }, [name, lastname, email, password, confPassword])

    const signUp = async () => {
        if (name === '') {
            dispatch(showToast('Por favor insira o nome', 'error', 'person'))
            nameInput.current?.focusOnError()
            return
        }

        if (name.length < 3) {
            dispatch(showToast('Nome muito curto, mínimo de 3 caracteres!', 'error', 'person'))
            nameInput.current?.focusOnError()
            return
        }

        if (lastname === '') {
            dispatch(showToast('Por favor insira o sobrenome', 'error', 'person'))
            lastnameInput.current?.focusOnError()
            return
        }

        if (email === '') {
            dispatch(showToast('Por favor insira o email', 'error', 'email'))
            emailInput.current?.focusOnError()
            return
        }

        if (!isValidEmail(email)) {
            dispatch(showToast('Email inválido!', 'error', 'email'))
            emailInput.current?.focusOnError()
            return
        }

        if (password === '') {
            dispatch(showToast('Por favor insira a senha', 'error', 'lock'))
            passInput.current?.focusOnError()
            return
        }

        // if(password.length < 8) {
        //     dispatch(showToast('Muito curta, a senha precisa ter 8 caracteres', 'error', 'lock'))
        // passInput.current?.focusOnError()
        //     return
        // }

        if (password !== confPassword) {
            dispatch(showToast('As senhas não correspondem!', 'error', 'lock'))
            confPassInput.current?.focusOnError()
            return
        }

        // setLoad(true)
        // await api.registerUser(name, lastname, email, password)
        //     .then((data) => {
        //         console.log(data)
        //         setLoad(false)
        //         dispatch(showToast(data, 'success', 'person'))
        //         setTimeout(() => {
        //             navigation.navigate('Login')
        //         }, 2000);
        //     })
        //     .catch((error) => {
        //         setTimeout(() => {
        //             setLoad(false)
        //         }, 100);
        //         dispatch(showToast(error.response.data, 'error', 'person'))
        //     })
    }

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
            <KeyboardAwareScrollView
                extraScrollHeight={180}
            >
                <ScrollView >
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
                            iconName={'person'}
                        />
                        <Input
                            showTitle
                            title='Sobrenome'
                            placeholder='Seu sobrenome'
                            autoCorrect={false}
                            value={lastname}
                            onChangeText={setLastname}
                            iconName={'person'}
                        />
                        <Input
                            showTitle
                            title='E-mail'
                            placeholder='email@exemplo.com'
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={email}
                            onChangeText={setEmail}
                            iconName={'email'}
                            keyboardType="email-address"
                        />
                        <Input
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
                            showTitle
                            title='Senha'
                            iconName='lock'
                            placeholder='********'
                            secure
                            secureEntry
                            value={confPassword}
                            onChangeText={setConfPassword}
                        />
                        <Button
                            onPress={signUp}
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
                                    Entrar
                                </Text>
                            )}
                        </Button>
                    </Form>
                </ScrollView>
            </KeyboardAwareScrollView>
        </Container>
    );
};

export default UserRegister;