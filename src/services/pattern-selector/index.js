const { getAnimation: getPattern1Animation } = require('../../assets/pattern-1')
const { getAnimation: getPattern2Animation } = require('../../assets/pattern-2')
const { getAnimation: getPattern3Animation } = require('../../assets/pattern-3')
const { getAnimation: getPattern4Animation } = require('../../assets/pattern-4')
const { getAnimation: getPattern6Animation } = require('../../assets/pattern-6')
const { getAnimation: getPattern7Animation } = require('../../assets/pattern-7')
const { getAnimation: getPattern8Animation } = require('../../assets/pattern-8')
const { getAnimation: getPattern9Animation } = require('../../assets/pattern-9')

const animations = [
  getPattern1Animation,
  getPattern2Animation,
  getPattern3Animation,
  getPattern4Animation,
  getPattern4Animation,
  getPattern6Animation,
  getPattern7Animation,
  getPattern8Animation,
  getPattern9Animation
]

const getAnimation = animations[Math.floor(Math.random() * animations.length)]

module.exports = {
  getAnimation
}
