import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDMApTR12NY1lYk3eavSYwLcirucz6-5jE",
    authDomain: "expense-tracker-a.firebaseapp.com",
    databaseURL: "https://expense-tracker-a.firebaseio.com",
    projectId: "expense-tracker-a",
    storageBucket: "expense-tracker-a.appspot.com",
    messagingSenderId: "545694134584",
    appId: "1:545694134584:web:bdbd3159a52a9c174e91cd"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;