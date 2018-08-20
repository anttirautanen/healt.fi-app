import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ALMOST_WHITE, PRIMARY_DARK } from '../colors'

const Logo = () =>
  <View style={styles.container}>
    <Text style={styles.text}>healt.fi</Text>
  </View>

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: ALMOST_WHITE,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  text: {
    flexGrow: 0,
    flexShrink: 0,
    color: PRIMARY_DARK,
    fontWeight: '300',
    fontSize: 30
  }
})

export default Logo
