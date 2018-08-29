import { action } from 'mobx'
import Store from './DomainStore'

class Actions {
  @action
  updateReaction(activityId, reaction) {
    Store.updateReaction(activityId, reaction)
  }
}

export default new Actions()
