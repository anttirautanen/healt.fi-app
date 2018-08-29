import { createStackNavigator } from 'react-navigation'
import ActivityDetails from './ActivityDetails'
import ActivitiesList from './ActivitiesList'

export const ACTIVITIES_LIST = 'ActivitiesList'
export const ACTIVITY_DETAILS = 'ActivityDetails'

const Navigator = createStackNavigator({
  [ACTIVITIES_LIST]: ActivitiesList,
  [ACTIVITY_DETAILS]: ActivityDetails
}, {
  initialRouteName: ACTIVITIES_LIST
})

export default Navigator
