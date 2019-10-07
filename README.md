# OathBreaker

![Splash Page](./media/oathbreaker-min.png)

[Go to App](https://oathbreaker.herokuapp.com/)

## Project Description

OathBreaker is a fantasy medieval-themed fighting game. Users can signup/login by creating an account or using Google.

![Login Page](./media/login-min.png)

A local login account has been created for your convenience should you opt for the local login method:

```
email: test@example.com
password: test123
```

Once you are logged in, you will be presented with the faction page:

![Allegiance Selection](./media/allegiance-min.png)

OathBreaker has two factions - The Triumvate which is represented by the element of water (left) and The Vjarr which is represented by the element of fire (right).

You will always have a chance to switch your faction at any point during the game (hence the name OathBreaker). This can be done with the navbar on the next page:

![Switch Faction](./media/switch-faction-min.png)

Once a faction has been selected, you are then presented with characters belonging to your particular faction and can choose any one of them as your character to fight against a randomly selected character from the opposing faction.

![Character Selection](./media/character-min.png)

Upon selecting your character, the battle begins!

<!-- ![Battle Page](./media/battle.gif) -->

<img src="./media/battle.gif" width="100%" style="height: auto;">

### Local Setup
1. Git clone or download zip folder
1. Run `npm install` at the root folder
1. Run `mongod` to activate local MongoDB connection
1. Run `npm run build` to create a build of the app
1. Run `node server.js` to start the node server
1. Finally, check out [http://localhost:3001](http://localhost:3001)

VOILA, you're running the app locally!


### Contributors

- [Roman Senin](https://github.com/romansenin)
- [Phillip Booker](https://github.com/phillipbooker)
- [Loren Brown](https://github.com/viveleloren)
- [Paige Smith](https://github.com/paigesmith3794)

#### Technologies

MongoDB, Express, React, Node, CSS3, & Passport
