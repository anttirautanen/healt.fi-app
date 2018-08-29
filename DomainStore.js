import { observable } from 'mobx'
import ActivitiesApi from './ActivitiesApi'
import { LOADED, LOADING } from './StoreStatus'

class DomainStore {
  @observable status
  @observable activities

  init() {
    this.status = LOADING
    this.fetchActivities()
  }

  fetchActivities() {
    ActivitiesApi.fetchActivities()
      .then(activities => this.onFetchActivitiesSuccess(activities))
      .catch(error => console.error(error))
  }

  onFetchActivitiesSuccess(activities) {
    this.activities = activities
    this.status = LOADED
  }

  getActivityById(activityId) {
    return this.activities.find(({ id }) => id === activityId)
  }

  updateReaction(activityId, reaction) {
    const activities = this.activities.slice()
    const activityToUpdateIndex = activities.findIndex(({ id }) => id === activityId)
    activities[activityToUpdateIndex].reaction = reaction
    this.activities.replace(activities)
  }
}

export default new DomainStore()
