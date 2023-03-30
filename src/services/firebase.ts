
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyATovcewvGa1cR9QGio9-0OlgXJ3L6uKN8",
    authDomain: "openxbi.firebaseapp.com",
    projectId: "openxbi",
    storageBucket: "openxbi.appspot.com",
    messagingSenderId: "937875943969",
    appId: "1:937875943969:web:6b49aa75cabb20a8492960",
    measurementId: "G-K68H3W6VJE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);