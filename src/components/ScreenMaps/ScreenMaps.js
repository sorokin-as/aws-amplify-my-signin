import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ScreenMaps extends Component {
    render() {
        const { container, h1, h2, sub } = styles
        return (
            <View style={container}>
                <Text style={h1}>12312312312</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    sub: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 150,
        backgroundColor: '#fff'
    },
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 30,
        padding: 15,
        textAlign: 'center'
    },
    h2: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 15,
        padding: 15,
        color: 'grey',
        paddingHorizontal: 15,
        textAlign: 'center'
    }

})


export default ScreenMaps
