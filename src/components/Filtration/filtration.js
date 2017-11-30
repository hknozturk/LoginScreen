/**
 * Created by Hawken on 30.11.2017.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

import GeneralDataCard from '../../components/DataCard/generalDataCard';
import PressureDataCard from '../../components/DataCard/pressureDataCard';
import FiltrationDataCard from '../../components/DataCard/filtrationDataCard';
import FlowDataCard from '../../components/DataCard/flowDataCard';

export default class filtration extends Component {

    _onPressButton = () => {
        console.log("Yıkaya Tıkladın!")
    };

    render() {
        return(
            <ImageBackground style={styles.container} source={require('../../images/devintbluelightbg.jpg')}>
                <View style={styles.card_container}>
                    <GeneralDataCard/>
                </View>
                <View style={styles.card_container}>
                    <PressureDataCard/>
                </View>
                <View style={styles.card_container}>
                    <FlowDataCard/>
                </View>
                <View style={styles.card_container}>
                    <FiltrationDataCard/>
                </View>

                <TouchableHighlight onPress={() => this._onPressButton()} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Yıka
                    </Text>
                </TouchableHighlight>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card_container: {
        marginTop: 8,
    },
    buttonContainer: {
        height: 50,
        backgroundColor: '#fe6a02',
        paddingVertical: 15,
        marginTop: 16,
        marginRight: 16,
        marginLeft: 16,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    }
});
