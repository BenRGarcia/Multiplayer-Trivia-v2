import Vue from 'vue'
import Vuex from 'vuex'
// import { firebaseMutations } from 'vuexfire'
// import { firebaseAction } from 'vuexfire'
import firebase from '../firebase/firebase'
import { timer } from './modules/timer'

// Vuex for centralized store for components
Vue.use(Vuex);
// firebase db
Vue.use(firebase);

const db = firebase.db;
// Define db refs
const qBankRef   = db.ref('/questionBank');
const triviaRef  = db.ref('/trivia');
const timerRef   = db.ref('/timer');
const chatRef    = db.ref('/chat');
const playersRef = db.ref('/players');

export const store = new Vuex.Store({
  strict: true,
  state: {
    chat: null,
    players: null,
    questionBank: [],
    timer: null,
    trivia: null
  },
  getters: {

  },
  mutations: {
    
  },
  actions: {
    
  }
});