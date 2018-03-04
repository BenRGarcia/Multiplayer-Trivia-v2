import firebase from 'firebase'

// Firebase config
var config = {
  apiKey: "AIzaSyDzwzbzxZAXsaifw0-TGz_d1aHvvKUDfpM",
  authDomain: "multiplayer-trivia-fb860.firebaseapp.com",
  databaseURL: "https://multiplayer-trivia-fb860.firebaseio.com",
  projectId: "multiplayer-trivia-fb860",
  storageBucket: "multiplayer-trivia-fb860.appspot.com",
  messagingSenderId: "826236380922"
};
// Initialize Firebase
firebase.initializeApp(config);

export default {
  database: firebase.database()
}