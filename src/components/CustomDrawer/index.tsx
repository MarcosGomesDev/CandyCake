import React from 'react';

import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import Colors from '../../styles/Colors';
import { useAuth } from '../../context/Auth';

import {
    Container,
    Header,
    UserContainer,
    Image,
    UserDetails,
    Footer
} from './styles';

import avatarDefault from '../../assets/avatar.png';
import Text from '../Text';
import SignOutBtn from '../SignOutBtn';

const CustomDrawer = (props: any) => {
    const {authData} = useAuth()

    return (
        <Container>
            <DrawerContentScrollView {...props}>
                <Header>
                    <UserContainer>
                        <Image
                            source={authData?.avatar
                            ? {uri: authData?.avatar}
                            : avatarDefault}
                        />
                        <UserDetails>
                            <Text
                                weight={600}
                                color={Colors.primary}
                            >
                                {authData!.name}
                            </Text>
                            <Text
                                color='#a9a9a9'
                                size={14}
                            >
                                {authData!.email}
                            </Text>
                        </UserDetails>
                    </UserContainer>
                </Header>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <Footer>
            <SignOutBtn />
            </Footer>
        </Container>
    );
};

export default CustomDrawer;
