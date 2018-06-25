import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import Registration from './components/Registration'
import Login from './components/Login'
import Profile from './components/Profile'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene
                        key="login"
                        component={Login}
                        title="Login"
                        initial
                    />
                    <Scene
                        key="register"
                        component={Registration}
                        title="Register" />
                    <Scene
                        key="profile"
                        component={Profile} />
                </Stack>
            </Router>
        )
    }
}