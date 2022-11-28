import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    createRef,
    useRef,
} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';
import { TextInputMask } from 'react-native-masked-text';

import { widthPercent, heightPercent } from '../../utils/dimensions';
import { InputContainer } from './styles';

const InputCPF = forwardRef((props, ref) => {
    const inputRef = useRef<TextInput>(null);
    const [error, setError] = useState<boolean>(false)

    useImperativeHandle(ref, () => ({
        focusOnError() {
            setError(true)
            inputRef.current?.focus()

        },
        resetError() {
            setError(false)
        },
    }), [inputRef]);

    return (
        <Container>
            {showTitle && (
                <Text
                    color={Colors.primary}
                    weight={600}
                    align="left"
                    size={14}
                    style={{ paddingLeft: 20, marginBottom: 10 }}
                >
                    {title}
                </Text>)
            }
            <InputContainer
                style={{
                    borderBottomColor: error ? Colors.danger : Colors.primary,
                }}
            >
                <Icon name={iconName} size={24} color={error ? Colors.danger : Colors.primary} />
                <TextInputMask
                    type={'cpf'}
                    placeholder="444.444.444-44"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#a9a9a9"
                    {...rest}
                />
            </InputContainer>
        </Container>
    );
});

const styles = StyleSheet.create({
    container: {
        marginTop: heightPercent('5%'),
    },
    inputContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: Platform.OS === 'ios' ? 8 : 0,
        paddingHorizontal: 10,
        marginTop: 5,
        width: widthPercent('80%'),
    },
    titleContainer: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    title: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    input: {
        fontSize: 15,
        paddingLeft: 10,
        flex: 1,
    },
});

export default InputCPF;
