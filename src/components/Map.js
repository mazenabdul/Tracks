import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'

const Map = () => {

  let points = []
  for(let i=0; i<20; i++){
    points.push({ 
      latitude: 37.33233 + i * 0.001,
      longitude: -122.03121 + i * 0.001, 
      
    })
  }
  return (
    <View style={styles.view}>
      <MapView style={styles.map} 
      initialRegion={{ latitude: 37.33233, longitude: -122.03121, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
       >
         <Polyline coordinates={points} />
       </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300,
    marginTop: 10,
    
  },
  view: {
    padding: 15
  }
})

export default Map