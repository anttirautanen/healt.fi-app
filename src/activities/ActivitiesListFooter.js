import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { ALMOST_WHITE, BUTTON_TEXT_COLOR, WHITE } from '../../colors'

const ActivitiesListFooter = () =>
  <View style={styles.container}>
    <TouchableHighlight style={styles.button} underlayColor={WHITE} onPress={onPress}>
      <Text style={styles.buttonText}>LISÄÄ</Text>
    </TouchableHighlight>
  </View>

const onPress = () => console.log('GO TO CAMERA')

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: ALMOST_WHITE,
    flex: 1,
    padding: 20
  },
  buttonText: {
    color: BUTTON_TEXT_COLOR,
    letterSpacing: 1,
    fontSize: 22
  }
})

export default ActivitiesListFooter
