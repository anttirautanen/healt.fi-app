import { action } from 'mobx'
import Store from './DomainStore'

class Actions {
  @action
  updateReaction(foodId, reaction) {
    Store.updateReaction(foodId, reaction)
  }
}

export default new Actions()
