import { StackNavigator } from 'react-navigation'
import TextablesScreen from '../Containers/TextablesScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TextablesScreen: { screen: TextablesScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  // initialRouteName: 'TextablesScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
