import React, { useEffect, useState } from 'react';
import {
    Animated,
    StatusBar, StatusBarStyle, Easing, TouchableWithoutFeedback, View, TouchableOpacity
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { hideToast, ToastifyProps } from '../../store/modules/toast/actions';
import Colors from '../../styles/Colors';
import { heightPercent } from '../../utils/dimensions';
import StatusBarCustom from '../StatusBarCustom';
import Text from '../Text';
import { Button, Container, MessageContainer, ToastContainer } from './styles';

interface IToast {
    toast: ToastifyProps
}

interface IErros {
    error: boolean;
}

var timer: any = null

const Toast: React.FC<IErros> = ({error}) => {
    const colors = {
        success: Colors.success,
        warn: Colors.warning,
        error: Colors.danger,
        default: Colors.default,
    };
    const [pos] = useState(
        new Animated.Value(-(getStatusBarHeight() + heightPercent(6))),
    );
    const dispatch = useDispatch();
    const toastfy = useSelector((state: IToast) => state.toast);

    const [styleStatusBar, setStyleStatusBar] = useState<StatusBarStyle>('light-content');

    const [showError, setShowError] = useState(error)

    useEffect(() => {
        toastfy.show && show();
    }, [toastfy]);

    const show = () => {
        clearTimeout(timer);
        Animated.timing(pos, {
            toValue: 0,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear,
        }).start();
        setStyleStatusBar('light-content');
        timer = setTimeout(() => {
            hide();
            setStyleStatusBar('light-content');
        }, toastfy.duration);
    };

    function hide() {
        Animated.timing(pos, {
            toValue: -(getStatusBarHeight() + heightPercent(6)),
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear,
        }).start(() => {
            dispatch(hideToast());
        });
    }

    return (
        <Container>
            <StatusBar
                barStyle={styleStatusBar}
                backgroundColor={toastfy.show ? colors[toastfy.type] : Colors.secondary}
            />
            <Button
                onPress={() => {
                    console.log('clicou')
                    clearTimeout(timer);
                    hide();
                }}>
                <ToastContainer
                    style={{
                            backgroundColor: colors[toastfy.type],
                            transform: [{ translateY: pos }],
                        }}>
                    <MessageContainer>
                        {toastfy.iconName !== '' && (
                            <Icon name={toastfy.iconName} size={20} color={Colors.white} />
                        )}
                        <Text
                            color="#fff"
                            style={{marginLeft: 10}}
                        >
                            {toastfy?.message}
                        </Text>
                    </MessageContainer>
                </ToastContainer>
            </Button>
        </Container>
    );
}

export default Toast;
