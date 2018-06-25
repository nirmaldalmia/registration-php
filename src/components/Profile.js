import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={ styles.welcomeText }>Welcome user {this.props.email} </Text>
        <Button title="Click Here To Logout" onPress={() => Actions.pop()} color="#2196F3" style={{marginTop: 20,}}/>
      </View>
    )
  }
}

const styles = {
    MainContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10,
    },
    welcomeText: {
        fontSize: 20,
        marginBottom: 40,
    }
}