import React, {useContext} from 'react'
import {Context as AuthContext} from '../context/AuthContext'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'

const SignInScreen = ({ navigation }) => {

  const { state, signIn, clearErrorMessage } = useContext(AuthContext)

  return (
    <View style={styles.view}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm headerText="Sign In" btnTitle="Sign In" errorMessage={state.errorMessage} onSubmit={signIn}/>
      <TouchableOpacity 
        style={styles.message} 
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={{fontSize: 16, color:'blue'}}>Don't have an account? Sign up here!</Text>
      </TouchableOpacity>
    </View>
  )
}

SignInScreen.navigationOptions = () => {
  return {
    header: () => null,
    headerLeft: () => null,
    
}
}

const styles = StyleSheet.create({
  view : {
    display: 'flex',
    flex: 1,
    padding: 20,
  },
  message: {
    marginTop: 20,
    
  },
})

export default SignInScreen