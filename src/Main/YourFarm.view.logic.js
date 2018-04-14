import { View } from 'react-native'
import React from 'react'
import YourFarm from './YourFarm.view.js'

let docs = []

export default class YourFarmLogic extends React.Component {
  state = {
    docs,
  }

  add = doc => {
    this.setState({
      docs: [...this.state.docs, { id: Date.now(), doc }],
      isTakingPhoto: false,
    })
  }

  takePhoto = () => {
    this.setState({
      isTakingPhoto: true,
    })
  }

  cancel = () => {
    this.setState({
      isTakingPhoto: false,
    })
  }

  render() {
    return (
      <YourFarm
        {...this.props}
        {...this.state}
        takePhoto={this.takePhoto}
        add={this.add}
        cancel={this.cancel}
      />
    )
  }
}
