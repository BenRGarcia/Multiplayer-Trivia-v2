# Multiplayer Trivia

> A fun-for-all, multiplayer trivia game

Click [here](https://benrgarcia.github.io/Multiplayer-Trivia-v2/) to see the live site

## Description

* Project using Vue.js CLI webpack template, vue-router, vuex, firebase, and Bootstrap v4

### 3 page web app:

1. ```/#/home```
   * Leaderboard component - diplays up to the top 10 point leaders, sorted by ranking

2. ```/#/play```
   * Timer countdown component - linked to database, reflects time as seconds run out
   * Question/Answer choices component - Q & A linked to database, presented based on admin input
   * Individual player stats component - database is queried for unique player data, point value/ranking returned
   * Create/change player name component - player creates name to play, can also change name (while keeping previous point value)
   * Fully functional chat component - players can (kindly) taunt each other while playing

3. ```/#/admin```
   * For the trivia group leader who wants to play Go... I mean... 'Alex Trebek'
   * Post the next question component - admin chooses question number, submits question to be posted and triggers timer countdown
   * Set timer countdown seconds component - admin can change time alloted to answer trivia question
   * Overall player stats component - admin can see the current leaderboard, question, and answer (everything an admin wants to see)
   * Admin danger zone component - admin can delete all chat history, reset all players to 0 points (for a new round of trivia), and delete all players (if playing with a new group)

## Gameplay

1. Choose who wants to be the trivia host, send them to the ```/#/admin``` page
2. All other participants go to the ```/#/play``` page
3. Players will be presented with a modal to create their player name
3. Trivia host will choose and 'post next question' which starts the timer countdown
4. Points are awarded automatically to the players with the correct answers when the timer runs out