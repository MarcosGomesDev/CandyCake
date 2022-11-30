import React, { useState } from 'react';
import { View } from 'react-native';
import Colors from '../../../styles/Colors';
import Input from '../../Input';
import Text from '../../Text';

interface IProps {
    value: string;
    onChangeTextValue: (params: any) => void;
}

const DescriptionInput: React.FC<IProps> = ({ value, onChangeTextValue }) => {
    const [height, setHeight] = useState(42);
    return (
        <View
            style={{
                width: '100%',
                borderBottomWidth: 1,
                borderBottomColor: Colors.primary,
                marginBottom: 15,
            }}
        >
            <Text
                color={Colors.primary}
                weight={700}
                style={{
                    marginBottom: 5,
                    textAlign: 'left',
                }}
            >
                Descrição do produto
            </Text>
            <Input
                iconName=''
                placeholder="Bolo de cenoura"
                placeholderTextColor="#aaa"
                value={value}
                onChangeText={text => onChangeTextValue(text)}
                style={{
                    height: height,
                    width: '100%',
                    fontSize: 18,
                    color: Colors.primary,
                }}
                maxLength={144}
                multiline={true}
                onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
            />
        </View>
    );
};

export default DescriptionInput;
