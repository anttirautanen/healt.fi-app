import { observable } from 'mobx'
import Food from './Food'
import { POSITIVE, NEGATIVE } from './Reaction'

class DomainStore {
  @observable foodsOfDay = []

  init() {
    this.foodsOfDay = [
      new Food('https://lorempixel.com/400/200', POSITIVE),
      new Food('https://lorempixel.com/401/201', POSITIVE),
      new Food('https://lorempixel.com/402/202', NEGATIVE),
      new Food('https://lorempixel.com/403/203', POSITIVE)
    ]
  }
}

export default new DomainStore()
