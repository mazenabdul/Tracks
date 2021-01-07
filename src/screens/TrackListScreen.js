import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 22 }}>Track List Screen</Text>
      <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default TrackListScreen