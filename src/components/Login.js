import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UserEmail: '',
            UserPassword: ''
        }
    }
    UserLoginFunction = () => {

        const { UserEmail } = this.state;
        const { UserPassword } = this.state;


        fetch('http://192.168.0.100:81/User_Login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                email: UserEmail,

                password: UserPassword

            })

        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson === 'Data Matched') {
                    this.props.navigation.navigate('Second', { Email: UserEmail });
                    Alert.alert('You have successfully logged in');
                    Actions.profile({ email: this.state.UserEmail });
                }
                else {

                    Alert.alert(responseJson);
                }

            }).catch((error) => {
                console.error(error);
            });

    }
    render() {
        return (

            <View style={styles.MainContainer}>
                <Text style={styles.TextComponentStyle}>User Login Form</Text>
                <TextInput
                    placeholder="Enter User Email"
                    onChangeText={UserEmail => this.setState({ UserEmail })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    placeholder="Enter User Password"
                    onChangeText={UserPassword => this.setState({ UserPassword })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    secureTextEntry={true}
                />

                <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />
                <View style={{ marginTop: 20 }}>
                    <Button title="Don't have an account? Signup" onPress={() => Actions.register()} color="#2196F3" />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 10,
    },

    TextInputStyleClass: {

        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
        borderColor: '#2196F3',

        // Set border Radius.
        borderRadius: 5,

    },

    TextComponentStyle: {
        fontSize: 20,
        color: "#000",
        textAlign: 'center',
        marginBottom: 15
    }
});