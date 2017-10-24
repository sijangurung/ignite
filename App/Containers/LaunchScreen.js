import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import RoundedButton from '../Components/RoundedButton.js'
import {getUserToken} from '../Redux/AuthActions'

import { connect } from 'react-redux'
import {AuthTypes} from '../Redux/AuthRedux'


import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

// <RoundedButton text="Fetch and store token" onPress={() => window.alert('Rounded Button Pressed!')}  />
class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              Hi Martin
            </Text>
          </View>

          <RoundedButton text="Fetch and store token"
            onPress={ () => this.props.dispatchAction( { type: AuthTypes.TOKEN_REQUEST, username: 'martin' }) }
          />

          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAction: (action) => dispatch(action)
})

//export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
