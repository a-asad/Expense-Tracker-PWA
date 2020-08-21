importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDMApTR12NY1lYk3eavSYwLcirucz6-5jE",
    authDomain: "expense-tracker-a.firebaseapp.com",
    databaseURL: "https://expense-tracker-a.firebaseio.com",
    projectId: "expense-tracker-a",
    storageBucket: "expense-tracker-a.appspot.com",
    messagingSenderId: "545694134584",
    appId: "1:545694134584:web:bdbd3159a52a9c174e91cd"
})

firebase.messaging();