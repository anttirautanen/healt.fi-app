import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { ALMOST_WHITE } from '../colors'

const Logo = () => <Text style={styles.text}>Ma 20.8.2018</Text>

const styles = StyleSheet.create({
  text: {
    color: ALMOST_WHITE,
    fontSize: 16
  }
})

export default Logo
