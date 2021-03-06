// @view
import { Image, Dimensions } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('window')

export default props => (
  <Image
    {...props}
    resizeMode="contain"
    style={{
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      width: props.isThumbnail ? width / 4 : width,
      height: props.isThumbnail ? height / 4 : height,
    }}
  />
)
