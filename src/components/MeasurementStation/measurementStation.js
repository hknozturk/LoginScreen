/**
 * Created by Hawken on 30.11.2017.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Animated,
    Dimensions,
    ScrollView,
} from 'react-native';
import GeneralDataCard from '../../components/DataCard/generalDataCard';
import BatteryDataCard from '../../components/DataCard/batteryDataCard';
import MoistureDataCard from '../../components/DataCard/moistureDataCard';
import TemperatureDataCard from '../../components/DataCard/temperatureDataCard';
import ElectricalConductivityDataCard from '../../components/DataCard/electricalConductivityDataCard';


const dimen = (Dimensions.get('window').width)-24;
export default class measurementStation extends Component {

    // render() {
    //     return(
    //     <ScrollView>
    //         <ImageBackground style={styles.container} source={require('../../images/devintbluelightbg.jpg')}>
    //
    //             <View style={styles.card_container}>
    //                 <GeneralDataCard/>
    //             </View>
    //             <View style={styles.card_container}>
    //                 <BatteryDataCard/>
    //             </View>
    //             <View style={styles.card_container}>
    //                 <MoistureDataCard/>
    //             </View>
    //             <View style={styles.card_container}>
    //                 <ElectricalConductivityDataCard/>
    //             </View>
    //             <View style={styles.card_container}>
    //                 <TemperatureDataCard/>
    //             </View>
    //         </ImageBackground>
    //     </ScrollView>
    //     )
    // }

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.warning_img} source={require('../../images/icon_warning.png')}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    },
    warning_img: {
        resizeMode: 'contain',
        width: dimen,
        marginLeft: 12,
        marginRight: 12,
    }
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingBottom: 12,
//     },
//     card_container: {
//         marginTop: 8,
//     },
// });
