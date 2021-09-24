import React from 'react'
import { View, Text, StyleSheet, Button, Alert, StatusBar, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

class Login extends React.Component {


    render() {
        return (
            <NavigationContainer >
                <SafeAreaView style={styles.container}>
                    <StatusBar translucent barStyle='dark-content' />
                    <Text>Login</Text>
                </SafeAreaView>
            </NavigationContainer>
        )
    }

}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})