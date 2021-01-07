import axios from 'axios'

export default axios.create({
  baseURL: 'http://2a60c243da63.ngrok.io' //Expires after 8 hours
})