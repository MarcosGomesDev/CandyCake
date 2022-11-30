import { useNavigation } from '@react-navigation/native';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StatusBar, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Input, { InputHandler } from '../../../components/Input';
import StatusBarCustom from '../../../components/StatusBarCustom';
import Text from '../../../components/Text';
import Toast from '../../../components/Toast';
import { useAuth } from '../../../context/Auth';
import { showToast } from '../../../store/modules/toast/actions';
import Colors from '../../../styles/Colors';
import { storeData, UserProps } from '../../../utils/storage';

import { ButtonOut, Form, Header } from './styles';

const LoginUser: React.FC = () => {
    const { setAuth } = useAuth()
    const dispath = useDispatch()
    const navigation = useNavigation()
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)

    const emailInput = useRef<InputHandler>(null);
    const passInput = useRef<InputHandler>(null);

    useEffect(() => {
        emailInput.current?.resetError();
        passInput.current?.resetError();

    }, [email, password])

    async function signIn(email: string, password: string) {
        if (email === '') {
            dispath(showToast('Por favor insira o email', 'error', 'error'));
            emailInput.current?.focusOnError();
            return;
        }

        if (password === '') {
            dispath(showToast('Por favor insira o email', 'error', 'error'));
            passInput.current?.focusOnError();
            return;
        }

        try {
            setLoading(true)

            setTimeout(() => {
                const auth = {
                    email,
                    password,
                    name: 'Marcos Gomes'
                }
                storeData(auth as UserProps)
                setLoading(false)
                setAuth(auth)
            }, 3000);

        } catch (error) {
            setLoading(false)
            Alert.alert('credenciais inválidas')
        }
    }

    return (
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
                        ref={emailInput}
                        showTitle
                        title='E-mail'
                        iconName='email'
                        placeholder='exemplo@exemplo.com'
                        value={email}
                        onChangeText={setEmail}
                        autoCorrect={false}
                    />
                    <Input
                        showTitle
                        title='Senha'
                        iconName='lock'
                        placeholder='********'
                        value={password}
                        onChangeText={setPassword}
                        autoCorrect={false}
                        secure
                        secureEntry
                    />

                    <ButtonOut
                        onPress={() => navigation.navigate('VerifyTokenUser')}
                    >
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
                            <ActivityIndicator size={'small'} color={Colors.white} />
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
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate('LoginSeller')}
                >
                    <Text
                        size={14}
                        color={Colors.primary}
                    >
                        Entrar como vendedor
                    </Text>
                </ButtonOut>
                <ButtonOut
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate('UserRegister')}
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
    );
}

export default LoginUser;