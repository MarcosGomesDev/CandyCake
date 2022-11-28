import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';
import Router from './routes/Router';
import { AuthProvider } from './context/Auth';
import Toast from './components/Toast';

const queryClient = new QueryClient()

const App: React.FC = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Provider store={store}>
                    <StatusBar
                        barStyle={'default'}
                        backgroundColor={'#fff'}
                        translucent
                    />
                    <Toast />
                    <Router />
                </Provider>
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
