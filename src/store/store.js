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
    _trivia: {}
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
      /*// Combine incorrect/correct choices
      let choices = state._trivia.incorrect_answers;
      // Splice correct answer to random index of choices array
      let randomIndex = Math.floor(Math.random() * (choices.length + 1));
      choices.splice(randomIndex, 0, state._trivia.correct_answer);
      return choices;*/
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
    setTimer (state, timerObj) {
      return state._timer = timerObj;
    },
    setChat (state, chatObj) {
      return state._chat = chatObj;
    }
  },
  actions: {
    /***********
     * FIREBASE
     ***********/
    getFirebaseChat: function(context) {
      firebase.database().ref('/chat').on("value", snapshot => {
        console.log(snapshot.val());
        context.commit('setChat', snapshot.val());
      });
    },
    getFirebasePlayers: function(context) {
      /*firebase.database().ref('/players').on("value", snapshot => {
        console.log(snapshot.val());
        context.commit('?', snapshot.val())
      });*/
    },
    getFirebaseTimer: function(context) {
      firebase.database().ref('/timer').on("value", snapshot => {
        context.commit('setTimer', snapshot.val())
      });
    },
    getFirebaseTrivia: function(context) {
      /*firebase.database().ref('/trivia').on("value", snapshot => {
        console.log(snapshot.val());
        context.commit('?', snapshot.val())
      });*/
    }
  }
});