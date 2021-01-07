import React, { useContext } from 'react'
import { View,  StyleSheet, SafeAreaView } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {

  const {signOut} = useContext(AuthContext)

  return (
    
      <View style={styles.view}>
        <Text style={styles.header}>Account Screen</Text>
        <Button title="Sign Out" onPress={signOut}/>
      </View>

  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginBottom: 50,
    marginTop: 50,
    marginHorizontal: 12
  },
  view: {
    display: 'flex',
    flex: 1,
    padding: 15
  }
})

export default AccountScreen