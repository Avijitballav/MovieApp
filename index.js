/**
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { store } from './src/redux/store/store';
import { BASE_URL} from './src/constants/config';


const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache(),
   
});

const RootComponent = () => (
    <ApolloProvider client={client}>
    
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => RootComponent);
