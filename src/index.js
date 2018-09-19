import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import { PersistGate } from 'redux-persist/integration/react'
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID, FIREBASE_MESSAGING_SENDER_ID } from './constants';
const config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: '',
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);
ReactDOM.render(
    <Provider store={configureStore().store}>
        <PersistGate loading={null} persistor={configureStore().persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();