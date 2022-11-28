import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

// import { Container } from './styles';

interface StatusBarProps {
    backgroundColor?: string;
    barStyle?: 'default' | 'light-content' | 'dark-content'
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 35 : StatusBar.currentHeight;

const StatusBarCustom: React.FC<StatusBarProps> = ({backgroundColor, barStyle}) => {
    return (
        <View
            style={{height: STATUSBAR_HEIGHT, backgroundColor: backgroundColor}}
        >
            <StatusBar
                backgroundColor={backgroundColor}
                translucent
                barStyle={barStyle}
            />
        </View>
    );
}

export default StatusBarCustom;