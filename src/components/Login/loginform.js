/**
 * Created by Hawken on 28.08.2017.
 */


import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    _showAlert = () => {
        Alert.alert('Eksik bilgi girdiniz!')
    };

    _onPressButton = () => {

        if (this.state.username.length === 10 && this.state.password.length !== 0) {
            Actions.enterp();
        }
        else {
            this._showAlert();
        }

    };

    render() {
        return(
            <View style={styles.formContainer}>
                <StatusBar barStyle="light-content"/>
                <TextInput  underlineColorAndroid="rgba(0,0,0,0)"
                            keyboardType={'numeric'}
                            maxLength={10}
                            placeholder="Telefon Numaranız"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            style={styles.inputStyle}
                            returnKeyType="next"
                            onChangeText={(text) => this.setState({username:text})}>

                </TextInput>
                <TextInput  underlineColorAndroid="rgba(0,0,0,0)"
                            placeholder="Şifreniz"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            style={styles.inputStyle}
                            returnKeyType="go"
                            onChangeText={(text) => this.setState({password:text})}>

                </TextInput>

                <TouchableOpacity onPress={() => this._onPressButton()} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Giriş
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        paddingRight: 20,
        paddingLeft: 20
    },
    inputStyle: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom:10,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        height: 50,
        backgroundColor: '#fe6a02',
        paddingVertical: 15,
        marginTop: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    }
});