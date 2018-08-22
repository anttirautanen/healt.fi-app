import React from 'react'
import DomainStore from './DomainStore'
import Navigator from './Navigator'

export default class App extends React.Component {
  componentDidMount() {
    DomainStore.init()
  }

  render() {
    return (
      <Navigator/>
    )
  }
}
