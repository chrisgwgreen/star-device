const { getAnimation: getPattern1Animation } = require('../../assets/pattern-1')
const { getAnimation: getPattern2Animation } = require('../../assets/pattern-2')
const { getAnimation: getPattern3Animation } = require('../../assets/pattern-3')
const { getAnimation: getPattern4Animation } = require('../../assets/pattern-4')
const { getAnimation: getPattern6Animation } = require('../../assets/pattern-6')
const { getAnimation: getPattern7Animation } = require('../../assets/pattern-7')
const { getAnimation: getPattern8Animation } = require('../../assets/pattern-8')

const animations = [
  getPattern1Animation,
  getPattern2Animation,
  getPattern3Animation,
  getPattern4Animation,
  getPattern4Animation,
  getPattern6Animation,
  getPattern7Animation,
  getPattern8Animation
]

// const getAnimation = getPattern7Animation
const getAnimation = () => {
  console.log('HERE')
  // return animations[Math.floor(Math.random() * animations.length)]
  return getPattern8Animation()
}

module.exports = {
  getAnimation
}
