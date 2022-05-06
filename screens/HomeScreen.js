import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native-web'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { ScrollView } from 'native-base'
import { POSTS } from '../data/posts'
import { NativeBaseProvider } from 'native-base'

const HomeScreen = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
        <ScrollView>
          {
            POSTS.map((post, index) => (
              <Post post={post} key={index} />
            ))
          }
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  }
})

export default HomeScreen