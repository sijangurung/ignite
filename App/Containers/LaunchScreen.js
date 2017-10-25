import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton'
import RoundedButton from '../Components/RoundedButton'
import {getUserToken} from '../Redux/AuthActions'
import {AuthTypes} from '../Redux/AuthRedux'

import { connect } from 'react-redux'


import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

const mapStateToProps = (state) => ({
    token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAction: (action) => dispatch(action),
  getUserToken: (userName) => dispatch(getUserToken(userName))
});

class LaunchScreen extends Component {
  state={
    token: 'oldToken'
  }
  componentWillReceiveProps(nextProps) {
    console.tron.log("NP: "+ JSON.stringify(nextProps))
    this.setState({token: nextProps.token})
  }

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
              Token: { this.state.token}
            </Text>
          </View>

          <RoundedButton text="Fetch and store token"
            onPress={ () => this.props.getUserToken('martin') }
          />

          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
