import { observable } from 'mobx'
import Food from './Food'
import { NEGATIVE, POSITIVE } from './Reaction'

class DomainStore {
  @observable foodsOfDay = []

  init() {
    this.foodsOfDay = [
      new Food('ads', randomImage(), POSITIVE, '2018-08-21 8:33:32'),
      new Food('qwe', randomImage(), POSITIVE, '2018-08-21 8:33:32'),
      new Food('zxc', randomImage(), NEGATIVE, '2018-08-21 10:33:32'),
      new Food('ert', randomImage(), POSITIVE, '2018-08-21 10:33:32'),
      new Food('dfg', randomImage(), POSITIVE, '2018-08-21 12:33:32'),
      new Food('vbn', randomImage(), POSITIVE, '2018-08-21 12:33:32'),
      new Food('wer', randomImage(), POSITIVE, '2018-08-21 14:33:32'),
      new Food('sdf', randomImage(), NEGATIVE, '2018-08-21 14:33:32'),
      new Food('cvb', randomImage(), POSITIVE, '2018-08-21 17:33:32'),
      new Food('rty', randomImage(), POSITIVE, '2018-08-21 17:33:32'),
      new Food('fgh', randomImage(), NEGATIVE, '2018-08-21 20:33:32'),
      new Food('bnm', randomImage(), POSITIVE, '2018-08-21 20:33:32')
    ]
  }

  getFoodById(foodId) {
    return this.foodsOfDay.find(({ id }) => id ===foodId)
  }

  updateReaction(foodId, reaction) {
    const foodsOfDay = this.foodsOfDay.slice()
    const foodToUpdateIndex = foodsOfDay.findIndex(({ id }) => id === foodId)
    foodsOfDay[foodToUpdateIndex].reaction = reaction
    this.foodsOfDay.replace(foodsOfDay)
  }
}

const randomImage = () => `https://dummyimage.com/375x211/${randomColor()}/${randomColor()}`
const randomColor = () => Math.floor(Math.random()*16777215).toString(16)

export default new DomainStore()
