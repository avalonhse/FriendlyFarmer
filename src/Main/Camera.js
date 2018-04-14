// @view
import React from 'react'
import CameraActions from './CameraActions.view.js'
import { Image, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { Camera, Permissions } from 'expo'

const { height, width } = Dimensions.get('window')

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  snap = async () => {
    if (this.camera) {
      this.props.add(await this.camera.takePictureAsync())
    }
  }

  render() {
    const { hasCameraPermission } = this.state
    if (hasCameraPermission === null) {
      return <View />
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    } else {
      return (
        <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, height, width, paddingBottom: 40 }}>
          <Camera
            style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
            type={Camera.Constants.Type.back}
            ref={ref => (this.camera = ref)}
          >
            <CameraActions go={this.snap} cancel={this.props.cancel} />
          </Camera>
        </View>
      )
    }
  }
}
