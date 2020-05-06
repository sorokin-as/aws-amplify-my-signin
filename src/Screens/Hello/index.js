import React from 'react'
import { StatusBar, View, Text, Button } from 'react-native'
import Amplify from '@aws-amplify/core'
import { Authenticator } from 'aws-amplify-react-native'
import { AmplifyTheme, Localei18n } from '../../components'
import awsconfig from './../../../aws-exports'
import { Auth } from "aws-amplify"
import ScreenAuth from './../../Screens'


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
        /* Do something when the user has signed-in */
       // const currentAuth = await Auth.currentAuthenticatedUser();

       // login({ variables: { input: true, username: currentAuth.username } });

      // console.log(state);
       
       // navigation.navigate(ScreenAuth)
        navigation.navigate(ScreenAuth, {
            itemId: 86,
            otherParam: 'anything you want here',
        })
    }
}


const Hello = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Localei18n />
            <Authenticator
                hideDefault={true}
                onStateChange={handleAuthStateChange}
                usernameAttributes="email"
                signUpConfig={signUpConfig}
                theme={AmplifyTheme} />
        </>
    );
}


export { Hello }