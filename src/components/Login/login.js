/**
 * Created by Hawken on 28.08.2017.
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Animated} from 'react-native';
import LoginForm from './loginform';

export default class login extends Component{

    state = {
        fadeAnim: new Animated.Value(0),
    };

    componentDidMount = () => {
        Animated.timing(this.state.fadeAnim, {
            toValue: 1, duration: 5000,
        }).start();
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../images/logo.png')}/>

                    <Text style={ styles.loginText}>
                        Lütfen kayıtlı telefon numaranızın son 10 hanesini giriniz.
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#1c496d'
   },
   logo: {
       width:240,
       height:80
   },
   logoContainer: {
       flexGrow: 3,
       alignItems: 'center',
       justifyContent: 'center'

   },
   loginText: {
       color: '#fff',
       marginTop: 100,
       marginRight: 16,
       marginLeft: 16,
       textAlign: 'center',
       opacity: 0.8
   },
   inputContainer: {
       flexGrow: 1,
   }
});