/**
 * Created by Hawken on 30.11.2017.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ImageBackground,
} from 'react-native';

const dimen = (Dimensions.get('window').width) - 32;
export default class pressureDataCard extends Component {

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.data_title}>Yıkama:</Text>
                    <Text style={styles.data_title}>Sulama:</Text>
                </View>
                <View style={styles.data_container}>
                    <ImageBackground style={styles.data_input} source={require('../../images/icon_flushoff.png')}></ImageBackground>
                    <ImageBackground style={styles.data_input} source={require('../../images/icon_irrigationoff.png')}></ImageBackground>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginRight: 16,
        marginLeft: 16,
        backgroundColor: '#fff',
        borderRadius: 6,
        flexDirection: 'row'
    },
    data_container: {
        width: dimen/2,
        alignItems: 'flex-end',
        marginBottom: 6,
    },
    title_container: {
        width: dimen/2,
        marginBottom: 6,
    },
    data_title: {
        marginLeft: 12,
        marginTop: 12,
        fontSize: 20,
        fontWeight: '300',
        color: '#1c496d'
    },
    data_input: {
        marginRight: 12,
        marginTop: 6,
        height: 36,
        width: 36,

    }
});
