import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { inject, observer } from './node_modules/mobx-react/native'

@inject('store')
@observer
class FoodList extends Component {
  render() {
    const { foodsOfDay } = this.props.store
    return (
      <View>
        <FlatList
          data={foodsOfDay}
          renderItem={FoodListItem}
          keyExtractor={({ imageUrl }) => imageUrl}/>
      </View>
    )
  }
}

const FoodListItem = food =>
  <View>
    <Text>lol</Text>
    <Text>{food.imageUrl}</Text>
    <Text>{food.reaction}</Text>
    <Text>{food.date}</Text>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default FoodList
