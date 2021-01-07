import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext'
import trackerServer from '../api/trackerServer'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error': 
      return { ...state, errorMessage: action.payload }
    case 'clear_error':
      return { ...state, errorMessage: '' }
    case 'sign_up':
      return { token: action.payload, errorMessage: '' }
    case 'sign_in':
      return { token: action.payload, errorMessage: '' }
    case 'sign_out':
      return { token: null, errorMessage: '' }
    default:
      return state
  }
}

const signUp =  (dispatch) => {
  return async ({ email, password }) => {
    //Make API request to sign up with that email and password
    try {
      const response = await trackerServer.post('/signup', { email, password })
      //So that the user doesn't have to re-log in over and over, use async storage to store the JWT token 
       await AsyncStorage.setItem('token', response.data.token)
      //update token state
      dispatch({ type: 'sign_up', payload: response.data.token })
      //Navigate to main flow screens
      navigate('TrackList')
      console.log(response.data)
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong. Try again' })
    }
  }
}

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: 'clear_error' })
  }
}

const localSignIn = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('token')
    if(token) {
      dispatch({ type: 'sign_in', payload: token })
      navigate('TrackList')
    } else {
      navigate('SignUp')
    }
  }
}

const signIn = (dispatch) => {
  return async ({ email, password }) => {
    //Try to sign in with the provided email and password
    try {
      const response = await trackerServer.post('/signin', { email, password })
       await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'sign_in', payload: response.data.token})
      navigate('TrackList')
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong while signing in' })
    }

    //If it is successful, then update the state of authentication

    //If it failed, then show an error message
  }
}

const signOut = (dispatch) => {
  return async () => {
    //Unset that JWT token from Async storage
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'sign_out' })
    navigate('SignUp')
  }
}
export const { Provider, Context } = createDataContext(authReducer, {signIn, signOut, signUp, clearErrorMessage, localSignIn, signOut}, { token: null, errorMessage: '' })