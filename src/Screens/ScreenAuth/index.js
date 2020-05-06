import React from 'react'
import { View, Text, Button } from 'react-native'



const Maps = ({ navigation }) => {
    /* 2. Get the param */
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('Maps')
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Hello')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export { Maps }