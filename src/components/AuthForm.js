import React, {useState} from 'react'
import {  Text, Button, Input } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'

const AuthForm = ({ headerText, btnTitle, errorMessage, onSubmit }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text style={styles.header} h2>{headerText}</Text>
      <Input value={email} onChangeText={setEmail} autoCorrect={false} autoCapitalize='none' style={styles.input} label="Email" placeholder="Enter your e-mail"/>
      <Input value={password} onChangeText={setPassword} autoCapitalize='none' autoCorrect={false} secureTextEntry style={styles.input} label="Password" placeholder="Enter your password"/>
      { errorMessage ? <Text style = {styles.error}>Something went wrong. Try again</Text> : null }
      <Button title={btnTitle} onPress={() => onSubmit({ email, password })}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 50,
    marginTop: 80,
    marginHorizontal: 12
  },
  input: {
    marginBottom:5,
  },
  
  error : {
    color: 'red',
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 15
  },
})

export default AuthForm