import React from 'react'
import { View, Text, StyleSheet, Button, Alert, StatusBar, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

class Home extends React.Component {


    render() {
        return (
            <NavigationContainer >

                <StatusBar translucent barStyle='dark-content' />
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>

            </NavigationContainer>
        )
    }

}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})