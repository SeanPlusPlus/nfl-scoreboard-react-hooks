# NFL Scoreboard React Hooks

Scoreboard demo

## Dev

```
git clone git@code.espn.com:Sean-M-Stephenson/nfl-scoreboard-react-hooks.git
cd nfl-scoreboard-react-hooks
yarn install
yarn validate
yarn start
```

## Learning Exercises

`»` Find the best defense from Week 1  

```
  // best defense
  if (action === 'Best Defense') {
    const alert = `${action}: ?`
    setGlobal({ alert })
  }
```

`»` Add a visual indicator next to the winner of each game, for ex:

![winner](https://s3-us-west-1.amazonaws.com/cse-tools/images/winner.png "Winner Example")
