const { Router } = require('express')
const { User, Game } = require('../models')

const CreateGame = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let newGame = {
      userId,
      ...req.body
    }
    let game = await Game.create(newGame)
    res.send(game)
  } catch (error) {
    throw error
  }
}
module.exports = {
  CreateGame
}
