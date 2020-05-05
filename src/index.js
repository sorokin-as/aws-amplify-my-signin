import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import Amplify from '@aws-amplify/core'
import { Authenticator } from 'aws-amplify-react-native'
import { AmplifyTheme, Localei18n } from './components'
import awsconfig from '../aws-exports'
import AppNavigator from './AppNavigator'

//import { Auth } from 'aws-amplify'



Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
})

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
}

// функция была обьявлена как метод класса, поправил немного

const handleAuthStateChange = state => {
  if (state === 'signedIn') {
    /* Do something when the user has signed-in 
    //const currentAuth = await Auth.currentAuthenticatedUser();
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => console.log(user))
      .catch(err => console.log(err));*/

   // login({ variables: { input: true, username: currentAuth.username } });
   console.log(state);
   
    navigation.navigate(ScreenMaps)
      
  }
}


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Localei18n />
      <Authenticator 
        hideDefault={true} 
        onStateChange={handleAuthStateChange} // this. - этого в стрелочных нет
        usernameAttributes="email" 
        signUpConfig={signUpConfig} 
        theme={AmplifyTheme} />
    </>
  )
}

export default App


