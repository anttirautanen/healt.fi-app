import React, { Component } from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, View } from 'react-native'
import { ALMOST_WHITE } from './colors'
import { inject, observer } from './node_modules/mobx-react/native'
import { POSITIVE } from './Reaction'

@inject('store')
@observer
class FoodList extends Component {
  render() {
    const { foodsOfDay } = this.props.store
    return (
      <FlatList
        data={foodsOfDay}
        renderItem={FoodListItem}
        keyExtractor={({ id }) => id}/>
    )
  }
}

const FoodListItem = ({ item: food }) => {
  const reactionIcon = food.reaction === POSITIVE ? require('./assets/icons/thumbsUp.png') : require('./assets/icons/thumbsDown.png')
  return (
    <ImageBackground source={{ uri: food.imageUrl }} style={styles.image}>
      <View style={styles.reactionContainer}><Image source={reactionIcon}/></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
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
