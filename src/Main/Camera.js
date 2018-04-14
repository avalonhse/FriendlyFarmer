// @view
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }


snap = async () => {
  if (this.camera) {
    let photo = await this.camera.takePictureAsync();
    this.setState({
      photo
    })
  }
};

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      
       return (<View style={{ flex: 1}}>
       <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => this.camera = ref}>
       <TouchableOpacity onPress={this.snap}>
          <View>
            <Text style={{color: 'white'}}>Take photo</Text>
          </View>
       </TouchableOpacity>
       </Camera>
       <Image source={this.state.photo} />
       </View>)
    }
  }
}
