import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../screens/App/User/Main';
import CustomDrawer from '../components/CustomDrawer';
import Settings from '../screens/App/Settings';
import Colors from '../styles/Colors';

const Drawer = createDrawerNavigator();

const MyDrawer: React.FC = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: { fontSize: 16, fontWeight: '600' },
                drawerActiveTintColor: Colors.primary,
                drawerActiveBackgroundColor: Colors.secondary,
                drawerItemStyle: {
                    height: 50,
                    width: '100%',
                    justifyContent: 'center',
                    marginLeft: 0,
                    borderRadius: 0,
                    paddingLeft: 10,
                    marginTop: 0,
                },
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Home" component={Main} />
            <Drawer.Screen name="Settins" component={Settings} />
        </Drawer.Navigator>
    );
}

export default MyDrawer