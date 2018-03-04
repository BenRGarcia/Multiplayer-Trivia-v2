import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import firebase from '../firebase/firebase'
import { timer } from './modules/timer'

// Vuex for centralized store for components
Vue.use(Vuex);
// Vuefire for vue/firebase bindings
Vue.use(VueFire);
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
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
});