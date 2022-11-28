import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';
import Text from '../Text';

import { Button, Container, InputContainer, InputText } from './styles';

interface InputProps extends TextInputProps {
    placeholder?: string;
    iconName: React.ComponentProps<typeof Icon>["name"];
    secure?: boolean;
    secureEntry?: boolean;
    title?: string;
    showTitle?: boolean;
    type?: 'cpf' | 'default' | 'telefone'
}

export interface InputHandler {
    focusOnError: () => void;
    resetError: () => void;
}

const Input = forwardRef<InputHandler, InputProps>(({
    placeholder,
    iconName,
    secure,
    secureEntry,
    title,
    showTitle,
    type,
    ...rest },
    ref
) => {
    const inputRef = useRef<TextInput>(null);

    const [error, setError] = useState<boolean>(false)
    const [changeSecureEntry, setChangeSecureEntry] = useState(secureEntry)

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
                <InputText
                    placeholder={placeholder}
                    autoCapitalize={'none'}
                    secureTextEntry={changeSecureEntry}
                    {...rest}
                />

                {secure && (
                    <Button
                        onPress={() => setChangeSecureEntry(!changeSecureEntry)}
                    >
                        <Icon
                            name={changeSecureEntry ? 'visibility' : 'visibility-off'}
                            size={24}
                            color={Colors.primary}
                        />
                    </Button>
                )}
            </InputContainer>
        </Container>
    )
})

export default Input