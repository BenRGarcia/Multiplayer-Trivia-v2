import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { timer } from './modules/timer'

Vue.use(Vuex); // Vuex
Vue.use(firebase); // Firebase

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

export const store = new Vuex.Store({
  state: {
    // Chat - message history
    _chat: {},
    // Players - name, points, answer chosen
    _players: {},
    // Timer - initial set time, seconds remaining
    _timer: {},
    // Trivia - question + correct/incorrect answers
    _trivia: {
      "category" : " ",
      "correct_answer" : "-",
      "difficulty" : " ",
      "incorrect_answers" : [ "-", "-", "-" ],
      "question" : " ",
      "type" : " "
    }
  },
  getters: {
    getQuestion: function (state) {
      return state._trivia.question;
    },
    getChatHistory: function (state) {
      // Array of message objects
      return Object.values(state._chat);
    },
    getChoices: function (state) {
      // Combine incorrect/correct choices (throws err's)
      let choices = state._trivia.incorrect_answers;
      // Splice correct answer to random index of choices array
      let randomIndex = Math.floor(Math.random() * (choices.length + 1));
      choices.splice(randomIndex, 0, state._trivia.correct_answer);
      return choices;
    },
    getSecondsInitial: function (state) {
      return state._timer.initial;
    },
    getSecondsRemaining: function (state) {
      return state._timer.remaining;
    },
    getPlayers: function (state) {
      return state._players;
    },
    getLeaders: function (state) {
      // How many leaders to show on leaderboard
      let leaderboardLimit = 10;

      /**
       *  If needed to transform object of objects into array of objects
       *  let objArray = Object.values(state._players); 
      */

      // Sort players from highest to lowest points
      /*let objArray = state._players.sort( (a,b) => b.points - a.points );
      // Only return (at most) the top 10 players
      return objArray.length > leaderboardLimit 
        ? objArray.slice(0, leaderboardLimit)
        : objArray;*/
    }
  },
  mutations: {
    setTimer:  (state, timerObj)   => state._timer   = timerObj,
    setChat:   (state, chatObj)    => state._chat    = chatObj,
    setTrivia: (state, triviaObj)  => state._trivia  = triviaObj,
    setPlayers: (state, playerObj) => state._players = playerObj
  },
  actions: {
    // Add playerName to database, or change name if key exists
    setPlayerName(context, payload) {
      console.log(`so was I!`);
      console.log(payload);
      // playerKey already exists, or get a new one
      let playerKey = localStorage.getItem("playerKey") || firebase.database().ref('/players').push().key;
      let points;

      console.log(context.state._players);

      // Existing players keep current points
      for (let player of context.state._players) {
        if (playerKey === player[".key"]) {
          points = player.points;
        }
      }
      // In case playerKey was not present, send to localStorage
      /*localStorage.setItem("playerKey", playerKey);
      // Create new object to post to db
      let newPlayer = {};
      // Add key/value of newPlayerKey
      newPlayer[playerKey] = {
        name: payload,
        points: points || 0
      };
      return firebase.database().ref('/players').update(newPlayer);*/
    },
    sendMessage(context, payload) {
      // Get firebase key for new message
      let newMessageKey = firebase.database().ref('/chat').push().key;
      // Get player key from session storage
      let playerKey = localStorage.getItem("playerKey");
      // Lookup player name
      let name;

      for (let player of context.state.players) {
        if (playerKey === player[".key"]) {
          name = player.name;
        }
      }
      // Create new object to post to db
      let newMessage = {};
      // Add key/value of newMessageKey
      newMessage[newMessageKey] = {
        name: name,
        message: message
      };
      return firebase.database().ref('/chat').update(newMessage);
    },
    /************
     * FIREBASE *
     ************/
    getFirebaseChat: function(context) {
      console.log(`getFirebaseChat fired`);
      firebase.database().ref('/chat').on("value", snapshot => {
        context.commit('setChat', snapshot.val());
      });
    },
    getFirebasePlayers: function(context) {
      console.log(`getFirebasePlayers fired`);
      firebase.database().ref('/players').on("value", snapshot => {
        context.commit('setPlayers', snapshot.val())
      });
    },
    getFirebaseTimer: function(context) {
      console.log(`getFirebaseTimer fired`);
      firebase.database().ref('/timer').on("value", snapshot => {
        context.commit('setTimer', snapshot.val());
      });
    },
    getFirebaseTrivia: function(context) {
      console.log(`getFirebaseTrivia fired`);
      firebase.database().ref('/trivia').on("value", snapshot => {
        context.commit('setTrivia', snapshot.val());
      });
    }
  }
});