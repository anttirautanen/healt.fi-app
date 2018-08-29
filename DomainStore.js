import { observable } from 'mobx'
import ActivitiesApi from './ActivitiesApi'
import { LOADED, LOADING } from './StoreStatus'

class DomainStore {
  @observable status
  @observable foodsOfDay

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
    this.foodsOfDay = activities
    this.status = LOADED
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

export default new DomainStore()
