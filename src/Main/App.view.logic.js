import { AppLoading, Font } from 'expo'
import { Animated } from 'react-native'
import fonts from '../fonts.js'
import React from 'react'
import App from './App.view.js'

export default class AppLogic extends React.Component {
  state = {
    isReady: false,
    isProfile: true,
    isYourFarm: false,
    isCommunity: false,
    isPicture: false,
  }

  takePicture = () => {
    this.setState({
      isReady: false,
      isProfile: false,
      isYourFarm: true,
      isCommunity: false,
      isPicture: true,
    })
  }

  showProfile = () => {
    this.setState({
      isReady: false,
      isProfile: true,
      isYourFarm: false,
      isCommunity: false,
      isPicture: false,

    })
  }

  showYourFarm = () => {
    this.setState({
      isYourFarm: true,
      isReady: false,
      isProfile: false,
      isCommunity: false,
      isPicture: false,
    })
  }

  showCommunity = () => {
    this.setState({
      isCommunity: true,
      isReady: false,
      isProfile: false,
      isYourFarm: false,
      isPicture: false,
    })
  }

  render() {

    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
}

    return <App {...this.props} {...this.state} 
      showProfile={this.showProfile}
      showYourFarm={this.showYourFarm}
      showCommunity={this.showCommunity}

      takePicture={this.takePicture}

      />
    
  }

  _cacheResourcesAsync() {
    return Font.loadAsync(fonts)
  }
}