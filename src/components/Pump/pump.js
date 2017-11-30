/**
 * Created by Hawken on 30.11.2017.
 */
import React, { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    ScrollView,
    Switch,
    Dimensions,
} from 'react-native';
import GeneralDataCard from '../../components/DataCard/generalDataCard';
import PressureDataCard from '../../components/DataCard/pressureDataCard';
import WaterDataCard from '../../components/DataCard/waterDataCard';
import WellDataCard from '../../components/DataCard/wellDataCard';

const dimen = (Dimensions.get('window').width)-24;
export default class pump extends Component {

    render() {
        return(
            <ImageBackground style={styles.container} source={require('../../images/devintbluelightbg.jpg')}>
                <View style={styles.pump_control}>
                    <View style={styles.pump_control_container_img}>
                        <ImageBackground style={styles.pump_control_img} source={require('../../images/icon_irrigationoff.png')}></ImageBackground>
                    </View>
                    <View style={styles.pump_control_text_container}>
                        <Text style={styles.pump_control_text}>Pompa Kontrol</Text>
                    </View>
                    <View style={styles.pump_control_container_switch}>
                        <Switch></Switch>
                    </View>
                </View>
                <View style={styles.card_container}>
                    <GeneralDataCard/>
                </View>
                <View style={styles.card_container}>
                    <PressureDataCard/>
                </View>
                <Text style={styles.info_text}>(Uzaktan Kontrol)</Text>
                <View style={styles.card_container}>
                    <WaterDataCard/>
                </View>
                <Text style={styles.info_text}>(Elle Kontrol)</Text>
                <View style={styles.card_container}>
                    <WaterDataCard/>
                </View>
                <View style={styles.card_container}>
                    <WellDataCard/>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pump_control: {
        flexDirection: 'row',
        backgroundColor: '#6b9cbd',
        height: 48,
        alignItems: 'center',
        flexWrap: 'nowrap'
    },
    pump_control_container_img: {
        width: dimen/6,
        marginLeft: 12,
    },
    pump_control_container_switch: {
        width: dimen/6,
        marginRight: 12,
    },
    pump_control_text_container: {
        width: 4*(dimen/6),
    },
    pump_control_img: {
        height: 36,
        width: 36,
    },
    pump_control_text: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    card_container: {
        marginTop: 8,
    },
    info_text: {
        alignSelf: 'flex-end',
        marginRight: 16,
        marginTop: 12,
        fontSize: 14,
    }
});
