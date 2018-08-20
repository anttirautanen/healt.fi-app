import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PRIMARY } from '../colors'
import Date from './Date'
import Logo from './Logo'

const Header = () =>
  <View style={styles.header}>
    <Logo/>
    <Date/>
  </View>

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexShrink: 0,
    backgroundColor: PRIMARY,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20
  },
})

export default Header
