# Multiplayer Trivia

> A fun-for-all, real time multiplayer trivia game

Click [here](http://seebenprogram.com/Multiplayer-Trivia-v2/#/home) to see the live site

## Build Tools

* Project using Vue.js CLI webpack template, vue-router, vuex, firebase, and Bootstrap v4

### Description

#### Gameplay

1. Choose who wants to be the trivia host, send them to the ```/#/admin``` page
2. All other participants go to the ```/#/play``` page
3. Players will be presented with a modal to create their player name
3. Trivia host will choose and 'post next question' which starts the timer countdown
4. Points are awarded automatically to the players with the correct answers when the timer runs out

Gameplay in action

![gameplay](https://user-images.githubusercontent.com/26657982/38521590-2420e0aa-3c14-11e8-83ed-3931d439dd10.gif)

#### Home Page

1. View the current leaderboard with players and scores
2. Links to both the **Player Page** and **Admin Page**

Home page:

![home](https://user-images.githubusercontent.com/26657982/38521591-2432b8e8-3c14-11e8-985e-a4fe64e966c1.png)

#### Player Page

1. Question/Answer choices component - Q & A linked to database, presented based on admin input
2. Timer countdown component - linked to database, reflects time as seconds run out
3. Individual player stats component - database is queried for unique player data, point value/ranking returned
4. Create/change player name component - player creates name to play, can also change name (while keeping previous point value)
5. Fully functional chat component - players can (kindly) taunt each other while playing

Creating a New Player

![create-player](https://user-images.githubusercontent.com/26657982/38521589-240e02e6-3c14-11e8-8abe-717d75817512.gif)

Changing Player Name (User Score/Rank Persist)

![change-name](https://user-images.githubusercontent.com/26657982/38521587-23eb0638-3c14-11e8-96a6-e420b1e4408f.gif)

In-Game Chat

![chat](https://user-images.githubusercontent.com/26657982/38521588-23faf9da-3c14-11e8-8663-6b1428ce2468.gif)

#### Admin/Trivia Host Page

> For the trivia group leader who wants to play Go... I mean... 'Alex Trebek'

1. Post the next question component - admin chooses question number, submits question to be posted and triggers timer countdown
2. Set timer countdown seconds component - admin can change time alloted to answer trivia question
3. Overall player stats component - admin can see the current leaderboard, question, and answer (everything an admin wants to see)
4. Admin danger zone component - admin can delete all chat history, reset all players to 0 points (for a new round of trivia), and delete all players (if playing with a new group)

Admin posting a question

![admin-post-question](https://user-images.githubusercontent.com/26657982/38521586-23db8ab4-3c14-11e8-83c3-a67737120558.gif)

Admin Danger Zone (Delete Chat History, Reset Player Scores, Delete All Players)

![admin-danger-zone](https://user-images.githubusercontent.com/26657982/38521585-23ccc97a-3c14-11e8-9f41-3dd1edbbe655.gif)