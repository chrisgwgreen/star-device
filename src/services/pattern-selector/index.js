const { getAnimation: getPattern1Animation } = require('../../assets/pattern-1')
const { getAnimation: getPattern2Animation } = require('../../assets/pattern-2')
const { getAnimation: getPattern3Animation } = require('../../assets/pattern-3')
const { getAnimation: getPattern4Animation } = require('../../assets/pattern-4')
const { getAnimation: getPattern5Animation } = require('../../assets/pattern-5')
const { getAnimation: getPattern6Animation } = require('../../assets/pattern-6')
const { getAnimation: getPattern7Animation } = require('../../assets/pattern-7')
const { getAnimation: getPattern8Animation } = require('../../assets/pattern-8')
const { getAnimation: getPattern9Animation } = require('../../assets/pattern-9')
const {
  getAnimation: getPattern10Animation
} = require('../../assets/pattern-10')
const {
  getAnimation: getPattern11Animation
} = require('../../assets/pattern-11')
const {
  getAnimation: getPattern12Animation
} = require('../../assets/pattern-12')
const {
  getAnimation: getPattern13Animation
} = require('../../assets/pattern-13')
const {
  getAnimation: getPattern14Animation
} = require('../../assets/pattern-14')
const {
  getAnimation: getPattern15Animation
} = require('../../assets/pattern-15')
const {
  getAnimation: getPattern16Animation
} = require('../../assets/pattern-16')
const {
  getAnimation: getPattern17Animation
} = require('../../assets/pattern-17')
const {
  getAnimation: getPattern18Animation
} = require('../../assets/pattern-18')

let index = 0

const animations = [
  getPattern16Animation,
  getPattern17Animation,
  getPattern4Animation,
  getPattern5Animation,
  getPattern8Animation,
  getPattern9Animation,
  getPattern12Animation,
  getPattern13Animation,
  getPattern15Animation,
  getPattern10Animation,
  getPattern11Animation,
  getPattern1Animation,
  getPattern2Animation,
  getPattern3Animation,
  getPattern18Animation,
  getPattern6Animation,
  getPattern7Animation
]

const getAnimation = () => {
  index++
  if (index === animations.length) index = 0
  return animations[index]()
}

module.exports = {
  getAnimation
}
