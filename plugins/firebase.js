import {initializeApp} from 'firebase/app';
import {getDatabase } from 'firebase/database';
import {getAuth} from 'firebase/auth';
const config={
    apiKey: "AIzaSyBid2vIhIKzNgo-tUZJ3vYtlKs0bZNDb4w",
    authDomain: "trendyol-d6266.firebaseapp.com",
    databaseURL: "https://trendyol-d6266-default-rtdb.firebaseio.com",
    projectId: "trendyol-d6266",
    storageBucket: "trendyol-d6266.appspot.com",
    messagingSenderId: "85223520359",
    appId: "1:85223520359:web:2607afd85be234b8d2fcc2",
    measurementId: "G-TLT777EE2S"

    
};

const app =initializeApp(config); // fire base start
const realDb =getDatabase(app);  // veritabanı al
const auth = getAuth(app)  // export etme

export {realDb,auth}
