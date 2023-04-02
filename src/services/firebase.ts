
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const api_firebase = import.meta.env.VITE_API_FIREBASE;
const auth_domain = import.meta.env.VITE_AUTH_DOMAIN;
const message_id = import.meta.env.VITE_MESSAGE_ID;
const app_id_firebase = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
    apiKey: api_firebase,
    authDomain: auth_domain,
    projectId: "openxbi",
    storageBucket: "openxbi.appspot.com",
    messagingSenderId: message_id,
    appId: app_id_firebase,
    measurementId: "G-K68H3W6VJE"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);