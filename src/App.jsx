import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import axios from 'axios'
import { Row, Col } from 'reactstrap'
import './App.css'
import Game from './Game'
import Action from './Action'
import Main from './Main'

const App = () => {
  const [games, setGames] = useState([])
  const [title] = useState('NFL 2016 Week 1 Scoreboard')

  useEffect(() => {
    const fetchData = async () => {
      const url = '/californiastoke/nfl2016.json'
      const result = await axios(url)
      const data = _.get(result, 'data.nfl[0].games')
        .map((g, idx) => ({ ...g, idx }))

      setGames(data)
    }

    fetchData()
  }, [])

  const renderGame = game => <Game data={game} key={game.idx} />

  const renderAction = (gameData, name, idx) => <Action name={name} games={gameData} key={idx} />

  const gameElements = _.map(games, renderGame)

  const cols = _.chunk(gameElements, 4)

  // button actions
  const actionsArray = [
    'Best Offense',
    'Chargers Game',
    'High Scoring',
    'Best Defense',
  ]

  // array of action elements
  const actions = _.map(actionsArray, _.curry(renderAction)(games))

  return (
    <div className="App">
      <h1 className="title">{title}</h1>
      <hr />
      <div id="actions">
        { actions }
      </div>
      <Main />
      <div id="games">
        <Row>
          { _.map(cols, (col, i) => (
            <Col key={i} sm="2">
              { col }
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default App
