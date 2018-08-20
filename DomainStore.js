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
      new Food('https://lorempixel.com/403/203', POSITIVE),
      new Food('https://lorempixel.com/404/204', POSITIVE),
      new Food('https://lorempixel.com/405/205', POSITIVE),
      new Food('https://lorempixel.com/406/206', POSITIVE),
      new Food('https://lorempixel.com/407/207', NEGATIVE),
      new Food('https://lorempixel.com/408/208', POSITIVE),
      new Food('https://lorempixel.com/409/209', POSITIVE),
      new Food('https://lorempixel.com/410/210', NEGATIVE),
      new Food('https://lorempixel.com/411/211', POSITIVE)
    ]
  }
}

export default new DomainStore()
