import React from 'react'
import { View, Text, Button } from 'react-native'



const ScreenAuth = ({ route, navigation }) => {
    /* 2. Get the param */
    const { itemId } = route.params;
    const { otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('ScreenAuth', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Hello')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export { ScreenAuth }