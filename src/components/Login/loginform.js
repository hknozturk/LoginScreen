/**
 * Created by Hawken on 28.08.2017.
 */


import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';

export default class LoginForm extends Component {

    _onPressButton() {
        
        console.log("Clicked Me!");
    }

    render() {
        return(
            <View style={styles.formContainer}>
                <StatusBar barStyle="light-content"/>
                <TextInput  underlineColorAndroid="rgba(0,0,0,0)" keyboardType={'numeric'} maxLength={10} placeholder="Telefon Numaranız" placeholderTextColor="rgba(255,255,255,0.7)" style={styles.inputStyle} returnKeyType="go">

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
       backgroundColor: '#ff6b25',
       paddingVertical: 15,
       marginTop: 15
   },
    buttonText: {
       textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    }
});