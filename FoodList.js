import React, { Component } from 'react'
import { FlatList, ImageBackground, StyleSheet, Text } from 'react-native'
import { inject, observer } from './node_modules/mobx-react/native'

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

const FoodListItem = ({ item: food }) =>
  <ImageBackground source={{ uri: food.imageUrl }} style={styles.image}>
    <Text>lol inside</Text>
  </ImageBackground>

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#ff0',
    width: '100%',
    height: 100
  }
})

export default FoodList
