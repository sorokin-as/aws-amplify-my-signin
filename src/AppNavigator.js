import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Hello, ScreenAuth } from './Screens'

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Hello" component={Hello} />
                <Stack.Screen name="ScreenAuth" component={ScreenAuth} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
