import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={'red'} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 12,
    }
})