import firebase from 'firebase';

const config = {
    // apiKey: "AIzaSyBQ3F5JFqSMHu-ej9ht1hkAV8p1e3QtLRY",
    // authDomain: "marathon-inventorymanagement.firebaseapp.com",
    // databaseURL: "https://marathon-inventorymanagement.firebaseio.com",
    // storageBucket: "marathon-inventorymanagement.appspot.com",
    // messagingSenderId: "129306866670",

    apiKey: "AIzaSyCZXzOY1opWvvMDcsf8D7WBBdX89BO3SYk",
    authDomain: "yash-inventory.firebaseapp.com",
    databaseURL: "https://yash-inventory-default-rtdb.firebaseio.com/",
    projectId: "yash-inventory",
    storageBucket: "yash-inventory.appspot.com",
    messagingSenderId: "634015911172",
    appId: "1:634015911172:web:51862c26d260f5fa7b5451",
    measurementId: "G-N3DDLBVC44"
};

firebase.initializeApp(config);
export const database = firebase.database();

export const storage = firebase.storage();

export const fbAuth = firebase.auth();
 