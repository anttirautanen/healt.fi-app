import { observable } from 'mobx'
import Food from './Food'
import { NEGATIVE, POSITIVE } from './Reaction'

class DomainStore {
  @observable foodsOfDay = []

  init() {
    this.foodsOfDay = [
      new Food('ads', randomImage(), POSITIVE),
      new Food('qwe', randomImage(), POSITIVE),
      new Food('zxc', randomImage(), NEGATIVE),
      new Food('ert', randomImage(), POSITIVE),
      new Food('dfg', randomImage(), POSITIVE),
      new Food('vbn', randomImage(), POSITIVE),
      new Food('wer', randomImage(), POSITIVE),
      new Food('sdf', randomImage(), NEGATIVE),
      new Food('cvb', randomImage(), POSITIVE),
      new Food('rty', randomImage(), POSITIVE),
      new Food('fgh', randomImage(), NEGATIVE),
      new Food('bnm', randomImage(), POSITIVE)
    ]
  }
}

const randomImage = () => `https://dummyimage.com/300x100/${randomColor()}/${randomColor()}`
const randomColor = () => Math.floor(Math.random()*16777215).toString(16)

export default new DomainStore()
