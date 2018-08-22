import { observer } from 'mobx-react'
import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Actions from './Actions'
import { PRIMARY, PRIMARY_DARK, WHITE } from './colors'
import Store from './DomainStore'
import { NEGATIVE, POSITIVE } from './Reaction'

@observer
class FoodDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const food = Store.getFoodById(navigation.getParam('foodId'))
    return {
      title: food.date
    }
  }

  constructor(props) {
    super(props)
    this.onPressPositiveReaction = this.onPressPositiveReaction.bind(this)
    this.onPressNegativeReaction = this.onPressNegativeReaction.bind(this)
  }

  render() {
    const { navigation } = this.props
    const foodId = navigation.getParam('foodId')
    const food = Store.getFoodById(foodId)
    return (
      <View style={styles.container}>
        <Image source={{ uri: food.imageUrl }} style={styles.image}/>
        <View style={styles.reactionContainer}>
          <TouchableOpacity style={[styles.reactionButton, food.reaction === POSITIVE && styles.selectedReactionButton]} onPress={this.onPressPositiveReaction} underlayColor={PRIMARY_DARK}>
            <Image source={require('./assets/icons/thumbsUp.png')} style={styles.reactionImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.reactionButton, food.reaction === NEGATIVE && styles.selectedReactionButton]} onPress={this.onPressNegativeReaction} underlayColor={PRIMARY_DARK}>
            <Image source={require('./assets/icons/thumbsDown.png')} style={styles.reactionImage}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  onPressPositiveReaction() {
    const { navigation } = this.props
    const food = Store.getFoodById(navigation.getParam('foodId'))
    this.updateReaction(food, POSITIVE)
  }

  onPressNegativeReaction() {
    const { navigation } = this.props
    const food = Store.getFoodById(navigation.getParam('foodId'))
    this.updateReaction(food, NEGATIVE)
  }

  updateReaction(food, reaction) {
    Actions.updateReaction(food.id, reaction)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_DARK
  },
  image: {
    flexShrink: 0,
    width: '100%',
    height: 211
  },
  reactionContainer: {
    backgroundColor: WHITE,
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20
  },
  reactionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: WHITE,
    borderStyle: 'solid',
    width: 75,
    height: 75
  },
  reactionImage: {
    height: 20,
    width: 22
  },
  selectedReactionButton: {
    borderColor: PRIMARY,
  }
})

export default FoodDetails
