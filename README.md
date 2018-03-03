# Multiplayer Trivia

> A fun-for-all trivia game

Click [here](https://benrgarcia.github.io/Multiplayer-Trivia-v2/) to see the live site

## Description

* Usage of Vue.js CLI webpack template, vue-router, vuex, vuefire, firebase, and Bootstrap v4

### 3 page web app:

1. ```/#/home```
   * Leaderboard component

2. ```/#/play```
   * Timer countdown component
   * Question/Answer choices component
   * Individual player stats component
   * Create/change player name component
   * Fully functional chat component

3. ```/#/admin```
   * For the trivia group leader who wants to play Go... I mean... 'Alex Trebek'
   * Post the next question component
   * Set timer countdown seconds component
   * Overall player stats component
   * Database maintenence dashboard (delete chat history, reset all players to 0 points, delete all players)

## Gameplay

1. Choose who wants to be the trivia host, send them to the ```/#/admin``` page
2. All other participants go to the ```/#/play``` page
3. Trivia host will 'post next question' which starts the timer countdown
4. Points are awarded to the players with the correct answers when the timer runs out