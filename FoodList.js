import { toJS } from 'mobx'
import { observer } from 'mobx-react/native'
import React, { Component } from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Actions from './Actions'
import { ALMOST_WHITE, PRIMARY_DARK } from './colors'
import Store from './DomainStore'
import Logo from './header/Logo'
import { FOOD_DETAILS } from './Navigator'
import { NEGATIVE, POSITIVE } from './Reaction'
import { LOADED } from './StoreStatus'

@observer
class FoodList extends Component {
  static navigationOptions = {
    headerTitle: <Logo/>
  }

  constructor(props) {
    super(props)
    this.onPressFoodListItem = this.onPressFoodListItem.bind(this)
    this.onPressReaction = this.onPressReaction.bind(this)
  }

  render() {
    if (Store.status !== LOADED)  {
      return <View><Text>Loading...</Text></View>
    }

    return (
      <FlatList
        style={styles.container}
        data={toJS(Store.foodsOfDay)}
        renderItem={({ item }) => <FoodListItem onPressFoodListItem={this.onPressFoodListItem} onPressReaction={this.onPressReaction} food={item}/>}
        keyExtractor={({ id }) => id.toString()}/>
    )
  }

  onPressFoodListItem(food) {
    const { navigation } = this.props
    navigation.navigate(FOOD_DETAILS, { foodId: food.id })
  }

  onPressReaction(food) {
    Actions.updateReaction(food.id, food.reaction === POSITIVE ? NEGATIVE : POSITIVE)
  }
}

class FoodListItem extends Component {
  constructor(props) {
    super(props)
    this.onPressImage = this.onPressImage.bind(this)
    this.onPressReaction = this.onPressReaction.bind(this)
  }

  render() {
    const { food } = this.props
    const reactionIcon = food.reaction === POSITIVE ? require('./assets/icons/thumbsUp.png') : require('./assets/icons/thumbsDown.png')
    return (
      <TouchableHighlight onPress={this.onPressImage} underlayColor={PRIMARY_DARK}>
        <ImageBackground source={{ uri: food.imageUrl }} style={styles.image}>
          <TouchableHighlight style={styles.reactionContainer} onPress={this.onPressReaction} underlayColor={PRIMARY_DARK}>
            <Image source={reactionIcon}/>
          </TouchableHighlight>
        </ImageBackground>
      </TouchableHighlight>
    )
  }

  onPressImage() {
    const { onPressFoodListItem, food } = this.props
    onPressFoodListItem(food)
  }

  onPressReaction = () => {
    const { onPressReaction, food } = this.props
    onPressReaction(food)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_DARK
  },
  image: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    padding: 20,
    width: '100%',
    height: 90
  },
  reactionContainer: {
    alignItems: 'center',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    backgroundColor: ALMOST_WHITE,
    width: 50
  }
})

export default FoodList
