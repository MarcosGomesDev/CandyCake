
import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { showToast } from '../../../store/modules/toast/actions';
import { api } from '../../../services/api';
import Colors from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { heightPercent } from '../../../utils/dimensions';
import { Button, Container, Content, Footer, FooterContent, Input, InputContainer } from './styles';
import Text from '../../../components/Text';
import StatusBarCustom from '../../../components/StatusBarCustom';
import Header from '../../../components/Header';

const VerifyTokenUser = ({ route }: any) => {
    let email = route.params
    let clockCall: any = null
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const defaultCountDown = 30
    const [internalVal, setInternalVal] = useState('')
    const [countDown, setCountDown] = useState(defaultCountDown)
    const [enableResend, setEnableResend] = useState(false)

    useEffect(() => {
        clockCall = setInterval(() => {
            decrementClock()
        }, 1000);
        return () => {
            clearInterval(clockCall)
        }
    }, [countDown])

    const firstInput = useRef<TextInput>(null)
    const secondInput = useRef<TextInput>(null)
    const thirdInput = useRef<TextInput>(null)
    const fourthInput = useRef<TextInput>(null)
    const fifthInput = useRef<TextInput>(null)
    const sixthInput = useRef<TextInput>(null)

    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [fourth, setFourth] = useState('')
    const [fifth, setFifth] = useState('')
    const [sixth, setSixth] = useState('')

    const token = `${first}${second}${third}${fourth}${fifth}${sixth}`

    const decrementClock = () => {
        if (countDown === 0) {
            setEnableResend(true)
            setCountDown(0)
            clearInterval(clockCall)
        } else {
            setCountDown((prev) => prev - 1)
        }
    }

    const sendToken = async () => {
        if (token.length === 6) {

            await api.verifyUserTokenPasswordReset(token)
                .then((data) => {
                    dispatch(showToast(data, 'success', 'done'))
                    navigation.navigate<any>('ResetPassword', token)
                }).catch((error) => {
                    dispatch(showToast(error.response.data, 'error', 'error'))
                })
        } else {
            dispatch(showToast('token inválido, por favor preencha corretamente', 'error', 'error'))
        }
    }

    const onResendOTP = async () => {
        if (enableResend) {
            setCountDown(defaultCountDown)
            setEnableResend(false)
            clearInterval(clockCall)
            clockCall = setInterval(() => {
                decrementClock()
            }, 1000)

            await api.userForgotPassword(email)
                .then((data) => {
                    dispatch(showToast(data, 'success', 'done'))
                    navigation.navigate<any>('ResetPassword', token)
                }).catch((error) => {
                    dispatch(showToast(error.response.data, 'error', 'error'))
                })
        }
    }

    const onChangeNumber = () => {
        setInternalVal("")
    }

    return (
        <Container>
            <StatusBarCustom
                backgroundColor='#fff'
                barStyle='dark-content'
            />
            <Container>
                <Header
                    goBack
                />
                <Text
                    color={Colors.primary}
                    style={{ marginTop: heightPercent('20%'), marginBottom: 80 }}
                >
                    Insira o código enviado para o seu email.
                </Text>
                <Content>
                    <InputContainer>
                        <Input
                            keyboardType='numeric'
                            ref={firstInput}
                            maxLength={1}
                            onChangeText={text => {
                                setFirst(text)
                                text && secondInput.current?.focus()
                            }}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            keyboardType='numeric'
                            ref={secondInput}
                            maxLength={1}
                            onChangeText={text => {
                                setSecond(text)
                                text ? thirdInput.current?.focus() : firstInput.current?.focus();
                            }}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            keyboardType='numeric'
                            ref={thirdInput}
                            maxLength={1}
                            onChangeText={text => {
                                setThird(text)
                                text ? fourthInput.current?.focus() : secondInput.current?.focus();
                            }}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            keyboardType='numeric'
                            ref={fourthInput}
                            maxLength={1}
                            onChangeText={text => {
                                setFourth(text)
                                text ? fifthInput.current?.focus() : thirdInput.current?.focus();
                            }}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            keyboardType='numeric'
                            ref={fifthInput}
                            maxLength={1}
                            onChangeText={text => {
                                setFifth(text)
                                text ? sixthInput.current?.focus() : fourthInput.current?.focus();
                            }}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            keyboardType='numeric'
                            ref={sixthInput}
                            maxLength={1}
                            onChangeText={text => {
                                setSixth(text)
                                !text && fifthInput.current?.focus();
                            }}
                        />
                    </InputContainer>
                </Content>

                <Footer>
                    <FooterContent>
                        <Button onPress={sendToken}>
                            <Text
                                color={Colors.primary}
                                weight={700}
                            >
                                Enviar
                            </Text>
                        </Button>
                        <Button onPress={onResendOTP}>
                            <Text
                                color={enableResend ? Colors.primary : 'gray'}
                            >
                                Reenviar código ({countDown})
                            </Text>
                        </Button>
                    </FooterContent>
                </Footer>
            </Container>
        </Container>
    );
};

export default VerifyTokenUser;