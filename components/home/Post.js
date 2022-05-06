import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'native-base';
import { NativeBaseProvider } from 'native-base';

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            {console.log(post)}

            {/* <Divider /> */}
            <Divider my={2} />
            <PostHeader post={post} />
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
        {console.log("post===>>>", post)}
        <View style={{flexDirection: 'row'}}>
            <Image source={require(`../../assets/${post.profilePicture}`)} style={styles.story} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: 700 }}>dasd</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    }
})

export default Post