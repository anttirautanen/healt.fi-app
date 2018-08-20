import { Provider } from 'mobx-react'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PRIMARY_DARK } from './colors'
import DomainStore from './DomainStore'
import FoodList from './FoodList'
import Header from './header/Header'

export default class App extends React.Component {
  componentDidMount() {
    DomainStore.init()
  }

  render() {
    return (
      <Provider store={DomainStore}>
        <View style={styles.container}>
          <Header/>
          <View style={styles.list}>
            <FoodList/>
          </View>
          <View style={styles.footer}><Text>Add food</Text></View>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_DARK
  },
  list: {
    flexGrow: 1
  },
  footer: {
    flexShrink: 0,
    padding: 40
  }
})
