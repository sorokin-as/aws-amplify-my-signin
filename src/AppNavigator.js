import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ScreenMaps } from './components/ScreenMaps'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ 
                headerShown: false
            }}
            initialRouteName="ScreenMaps"
        >
            <Stack.Screen name="ScreenMaps" component={ScreenMaps} />
        </Stack.Navigator>
    )
}

export default AppNavigator