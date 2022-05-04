import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            {/* <Divider /> */}
            <Divider width={1} orientation='vertical' />
            <Text style={{ color: 'white' }}>Post</Text>
        </View>
    )
}

export default Post