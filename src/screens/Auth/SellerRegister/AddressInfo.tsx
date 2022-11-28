import React, { useEffect, useState, createRef, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { showToast } from '../../../store/modules/toast/actions'
import { useDispatch } from 'react-redux'
import Input, { InputHandler } from '../../../components/Input'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../../styles/Colors'
import { useNavigation } from '@react-navigation/native';
import { BackButton, Container, Form, Header } from './styles';
import StatusBarCustom from '../../../components/StatusBarCustom';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import { formatCEP } from '../../../utils/formatCEP';

const AddressInfo: React.FC = ({ route }: any) => {
    let item = route.params
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [cep, setCep] = useState('')
    const [loading, setLoading] = useState<boolean>(false)
    const [complemento, setComplemento] = useState('')
    const [logradouro, setLogradrouro] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [UF, setUF] = useState('')

    const cepInput = useRef<InputHandler>(null);
    const lograInput = useRef<InputHandler>(null);
    const numInput = useRef<InputHandler>(null);
    const bairroInput = useRef<InputHandler>(null);
    const localInput = useRef<InputHandler>(null);
    const UFInput = useRef<InputHandler>(null);

    useEffect(() => {
        cepInput.current?.resetError()
        lograInput.current?.resetError()
        numInput.current?.resetError()
        bairroInput.current?.resetError()
        localInput.current?.resetError()
        UFInput.current?.resetError()
    }, [cep, logradouro, numero, bairro, localidade, UF])

    async function callCEP(cep: string) {
        await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then((data) => {
                setLogradrouro(data.logradouro)
                setBairro(data.bairro)
                setLocalidade(data.localidade)
                setUF(data.uf)
            })
    }

    const next = () => {
        if (cep === '') {
            dispatch(showToast('O CEP é obrigatório', 'error', 'error'))
            cepInput.current?.focusOnError()
            return
        }

        if (cep.length < 8) {
            dispatch(showToast('O CEP é obrigatório', 'error', 'error'))
            cepInput.current?.focusOnError()
            return
        }

        if (logradouro === '') {
            dispatch(showToast('A rua é obrigatória', 'error', 'error'))
            lograInput.current?.focusOnError()
            return
        }

        if (numero === '') {
            dispatch(showToast('O número é obrigatório', 'error', 'error'))
            numInput.current?.focusOnError()
            return
        }

        if (bairro === '') {
            dispatch(showToast('O bairro é obrigatório', 'error', 'error'))
            bairroInput.current?.focusOnError()
            return
        }

        if (localidade === '') {
            dispatch(showToast('A cidade é obrigatória', 'error', 'error'))
            localInput.current?.focusOnError()
            return
        }

        if (UF === '') {
            dispatch(showToast('O estado é obrigatório', 'error', 'error'))
            UFInput.current?.focusOnError()
            return
        }

        const send = {
            name: item.name,
            lastname: item.lastname,
            storename: item.storeName,
            credential: item.credential,
            cep: cep.replace("-", ""),
            logradouro,
            numero,
            complemento,
            bairro,
            localidade,
            UF,
        }

        navigation.navigate<any>('EmailInfo', send)
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
                extraScrollHeight={15}
            >
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
                        title='CEP'
                        ref={cepInput}
                        placeholder='44444-444'
                        autoCorrect={false}
                        value={cep}
                        maxLength={9}
                        onChangeText={(text) => {
                            const value = text.replace('-', '')
                            if(value.length === 8) {
                                callCEP(value)
                            }


                            setCep(formatCEP(text))
                        }}
                        iconName={'home'}
                        keyboardType="numeric"
                    />
                    <Input
                        showTitle
                        title='Rua'
                        ref={lograInput}
                        placeholder='Rua'
                        autoCorrect={false}
                        value={logradouro}
                        onChangeText={setLogradrouro}
                        iconName={'home'}
                    />
                    <Input
                        showTitle
                        title='Bairro'
                        ref={bairroInput}
                        placeholder='Bairro'
                        autoCorrect={false}
                        value={bairro}
                        onChangeText={setBairro}
                        iconName={'home'}
                    />
                    <Input
                        showTitle
                        title='Número'
                        ref={numInput}
                        placeholder='Número'
                        autoCorrect={false}
                        value={numero}
                        onChangeText={setNumero}
                        iconName={'home'}
                    />
                    <Input
                        showTitle
                        title='Complemento'
                        placeholder='Complemento'
                        autoCorrect={false}
                        value={complemento}
                        onChangeText={setComplemento}
                        iconName={'home'}
                    />
                    <Input
                        showTitle
                        title='Cidade'
                        ref={localInput}
                        placeholder='Cidade'
                        autoCorrect={false}
                        value={localidade}
                        onChangeText={setLocalidade}
                        iconName={'home'}
                    />
                    <Input
                        showTitle
                        title='Estado'
                        ref={UFInput}
                        placeholder='UF'
                        autoCorrect={false}
                        value={UF}
                        onChangeText={setUF}
                        iconName={'home'}
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
            </KeyboardAwareScrollView>
        </Container>
    );
};

export default AddressInfo;