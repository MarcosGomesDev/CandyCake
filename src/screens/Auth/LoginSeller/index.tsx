import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button';
import Input, { InputHandler } from '../../../components/Input';
import StatusBarCustom from '../../../components/StatusBarCustom';
import Text from '../../../components/Text';
import { useAuth } from '../../../context/Auth';
import { showToast } from '../../../store/modules/toast/actions';
import Colors from '../../../styles/Colors';
import { storeData, UserProps } from '../../../utils/storage';
import { isValidEmail } from '../../../utils/validators';

import { ButtonOut, Container, Form, Header } from './styles';

const LoginSeller: React.FC = () => {
    const { setAuth } = useAuth()
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const emailInput = useRef<InputHandler>(null)
    const passInput = useRef<InputHandler>(null)

    useEffect(() => {
        emailInput.current?.resetError();
        passInput.current?.resetError();
    }, [])

    async function signIn(email: string, password: string) {
        if (email === '') {
            dispatch(showToast('Por favor insira o email', 'error', 'error'));
            emailInput.current?.focusOnError();
            return;
        }

        if (!isValidEmail(email)) {
            dispatch(showToast('Email inválido!', 'error', 'error'));
            emailInput.current?.focusOnError();
            return;
        }

        if (password === '') {
            dispatch(showToast('Por favor insira a senha', 'error', 'error'));
            passInput.current?.focusOnError();
            return;
        }

        // if(password.length < 8) {
        //     dispatch(showToast('Muito curta, a senha precisa ter 8 caracteres', 'error', 'error'))
        //     passInput.current.focusOnError()
        //     return
        // }

        try {
            setLoading(true)
            const auth = {
                email,
                password,
                name: 'Marcos Gomes'
            }
            storeData(auth as UserProps)
            setLoading(false)
            setAuth(auth)
        } catch (error) {
            setLoading(false)
            Alert.alert('credenciais inválidas')
        }
    }

    return (
        <Container>
            <StatusBarCustom
                barStyle='light-content'
                backgroundColor={Colors.secondary}
            />
            <Container>
                <Header>
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
                            size={26}
                            color={Colors.primary}
                            align="left"
                        >
                            Bem-vindo de volta!
                        </Text>
                    </View>
                </Header>

                <ScrollView>
                    <Form>
                        <Text
                            color={Colors.primary}
                            weight={600}
                            size={24}
                            align="left"
                            style={{ paddingLeft: 20, marginBottom: 30 }}
                        >
                            Login
                        </Text>

                        <Input
                            showTitle
                            title="E-mail"
                            iconName='email'
                            placeholder='exemplo@exemplo.com'
                            value={email}
                            onChangeText={setEmail}
                        />

                        <Input
                            showTitle
                            title="Senha"
                            iconName='lock'
                            placeholder='********'
                            secure
                            secureEntry
                            value={password}
                            onChangeText={setPassword}
                        />

                        <ButtonOut>
                            <Text
                                size={14}
                                color={Colors.primary}
                            >
                                Esqueceu a senha?
                            </Text>
                        </ButtonOut>

                        <Button
                            onPress={() => signIn(email, password)}
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
                    <ButtonOut
                        onPress={() => navigation.navigate('LoginUser')}
                        style={{ alignSelf: 'center' }}
                    >
                        <Text
                            size={14}
                            color={Colors.primary}
                        >
                            Entrar como usuário
                        </Text>
                    </ButtonOut>
                    <ButtonOut
                        onPress={() => navigation.navigate('SellerRegister')}
                        style={{ alignSelf: 'center' }}
                    >
                        <Text
                            size={14}
                            color={Colors.primary}
                        >
                            Não possuí conta? Cadastre-se
                        </Text>
                    </ButtonOut>
                </ScrollView>
            </Container>
        </Container>
    );
}

export default LoginSeller;