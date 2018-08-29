import { toJS } from 'mobx'
import { observer } from 'mobx-react/native'
import React, { Component } from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Actions from './Actions'
import { ALMOST_WHITE, PRIMARY_DARK } from './colors'
import Store from './DomainStore'
import Logo from './header/Logo'
import { ACTIVITY_DETAILS } from './Navigator'
import { NEGATIVE, POSITIVE } from './Reaction'
import { LOADED } from './StoreStatus'

@observer
class ActivitiesList extends Component {
  static navigationOptions = {
    headerTitle: <Logo/>
  }

  constructor(props) {
    super(props)
    this.onPressActivitiesListItem = this.onPressActivitiesListItem.bind(this)
    this.onPressReaction = this.onPressReaction.bind(this)
  }

  render() {
    if (Store.status !== LOADED)  {
      return <View><Text>Loading...</Text></View>
    }

    return (
      <FlatList
        style={styles.container}
        data={toJS(Store.activities)}
        renderItem={({ item }) => <ActivitiesListItem onPressActivitiesListItem={this.onPressActivitiesListItem} onPressReaction={this.onPressReaction} activity={item}/>}
        keyExtractor={({ id }) => id.toString()}/>
    )
  }

  onPressActivitiesListItem(activity) {
    const { navigation } = this.props
    navigation.navigate(ACTIVITY_DETAILS, { activityId: activity.id })
  }

  onPressReaction(activity) {
    Actions.updateReaction(activity.id, activity.reaction === POSITIVE ? NEGATIVE : POSITIVE)
  }
}

class ActivitiesListItem extends Component {
  constructor(props) {
    super(props)
    this.onPressImage = this.onPressImage.bind(this)
    this.onPressReaction = this.onPressReaction.bind(this)
  }

  render() {
    const { activity } = this.props
    const reactionIcon = activity.reaction === POSITIVE ? require('./assets/icons/thumbsUp.png') : require('./assets/icons/thumbsDown.png')
    return (
      <TouchableHighlight onPress={this.onPressImage} underlayColor={PRIMARY_DARK}>
        <ImageBackground source={{ uri: activity.imageUrl }} style={styles.image}>
          <TouchableHighlight style={styles.reactionContainer} onPress={this.onPressReaction} underlayColor={PRIMARY_DARK}>
            <Image source={reactionIcon}/>
          </TouchableHighlight>
        </ImageBackground>
      </TouchableHighlight>
    )
  }

  onPressImage() {
    const { onPressActivitiesListItem, activity } = this.props
    onPressActivitiesListItem(activity)
  }

  onPressReaction = () => {
    const { onPressReaction, activity } = this.props
    onPressReaction(activity)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_DARK
  },
  image: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    padding: 20,
    width: '100%',
    height: 90
  },
  reactionContainer: {
    alignItems: 'center',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    backgroundColor: ALMOST_WHITE,
    width: 50
  }
})

export default ActivitiesList
