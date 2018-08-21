import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

class FoodDetails extends Component {
  render() {
    const { navigation } = this.props
    const food = navigation.getParam('food')
    return (
      <View>
        <Image source={{ uri: food.imageUrl }} style={styles.image}/>
        <Text>Details {food.imageUrl}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 211
  }
})

export default FoodDetails
