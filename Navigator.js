import { createStackNavigator } from 'react-navigation'
import FoodDetails from './FoodDetails'
import FoodList from './FoodList'

export const FOOD_LIST = 'FoodList'
export const FOOD_DETAILS = 'FoodDetails'

const Navigator = createStackNavigator({
  [FOOD_LIST]: FoodList,
  [FOOD_DETAILS]: FoodDetails
}, {
  initialRouteName: FOOD_LIST
})

export default Navigator
