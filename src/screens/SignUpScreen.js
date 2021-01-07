import React, {useState, useContext, useEffect} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Text } from 'react-native-elements'
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignUpScreen = ({ navigation }) => {

  const { state, signUp, clearErrorMessage, localSignIn } = useContext(AuthContext)

  useEffect(() => {
    localSignIn()
  }, [])

  return (
    <View style={styles.view}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
      <AuthForm headerText="Sign Up" btnTitle="Register" errorMessage={state.errorMessage} onSubmit={signUp} />
      <TouchableOpacity 
        style={styles.message} 
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={{fontSize: 16, color:'blue'}}>Already have an account? Sign in here</Text>
      </TouchableOpacity>
    </View>  
  )
}

SignUpScreen.navigationOptions = () => {
  return {
    header: () => (null)
}
}
const styles = StyleSheet.create({
  message: {
    marginTop: 20,
    
  },
  view : {
    display: 'flex',
    flex: 1,
    padding: 20,
  },
  
})

export default SignUpScreen