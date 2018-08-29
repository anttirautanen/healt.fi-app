import BaseApi from '../../BaseApi'

class ActivitiesApi extends BaseApi {
  fetchActivities() {
    return this.get('/activities/2018-08-27/2018-08-29')
  }
}

export default new ActivitiesApi()
