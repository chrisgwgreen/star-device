const { getAnimation: getPattern1Animation } = require('../../assets/pattern-1')
const { getAnimation: getPattern2Animation } = require('../../assets/pattern-2')
const { getAnimation: getPattern3Animation } = require('../../assets/pattern-3')
const { getAnimation: getPattern4Animation } = require('../../assets/pattern-4')

const animations = [
  getPattern1Animation,
  getPattern2Animation,
  getPattern3Animation,
  getPattern4Animation
]

const getAnimation = animations[Math.floor(Math.random() * animations.length)]

getAnimation()

module.exports = {
  getAnimation
}
