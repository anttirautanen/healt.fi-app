import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'mobx-react'
import DomainStore from './DomainStore'
import FoodList from './FoodList'

export default class App extends React.Component {
  componentDidMount() {
    DomainStore.init()
  }

  render() {
    return (
      <Provider store={DomainStore}>
        <View style={styles.container}>
          <View style={styles.header}><Text>Header</Text></View>
          <FoodList/>
          <View style={styles.footer}><Text>Add food</Text></View>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3C265'
  },
  header: {
    backgroundColor: '#FFC24C',
    paddingTop: 60,
    paddingBottom: 20
  },
  footer: {
    padding: 40
  }
})
