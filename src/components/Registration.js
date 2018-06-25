import React, { Component } from 'react'
import { Text, View, TextInput, Button, StyleSheet, Alert } from 'react-native'

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UserName: '',
            UserEmail: '',
            UserPassword: ''
        }
    }
    UserRegistrationFunction = () => {


        const { UserName } = this.state;
        const { UserEmail } = this.state;
        const { UserPassword } = this.state;



        fetch('http://192.168.0.100:81/user_registration.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                name: UserName,

                email: UserEmail,

                password: UserPassword

            })

        }).then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson);
            }).catch((error) => {
                console.error(error);
            });


    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>

                <TextInput
                    placeholder="Enter User Name"
                    onChangeText={UserName => this.setState({ UserName })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
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
                <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" style={{height: 40}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
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

        // Set border Radius.
        //borderRadius: 10 ,
    }

});


