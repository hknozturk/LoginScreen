/**
 * Created by Hawken on 30.11.2017.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Animated,
    Dimensions,
    SectionList,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import AlarmItem from './alarmItem';
import { Actions } from 'react-native-router-flux'

export default class alarm extends Component {

    _onItemClick = () => {
        // do nothing
    };

    componentDidMount = () => {

        Actions.refresh({title: this.props.selectedEnterp + " Alarmlar"})
    };

    state = {
        alarms: [
            {
                locationId: "2",
                locationName: "Devint Bilisim",
                alrNode: "2001",
                alr: "PALR",
                alrcode: "7",
                alrLevel: "3",
                alrDate: "14/12/12",
                alrTime: "14:12:12",
                alrDef: "asdasdasd123123",
            },
            {
                locationId: "2",
                locationName: "Devint Bilisim",
                alrNode: "2001",
                alr: "PALR",
                alrcode: "7",
                alrLevel: "3",
                alrDate: "14/12/12",
                alrTime: "14:12:12",
                alrDef: "asdasdasdasddasd",
            },
            {
                locationId: "2",
                locationName: "Devint Bilisim",
                alrNode: "2001",
                alr: "PALR",
                alrcode: "7",
                alrLevel: "3",
                alrDate: "14/12/12",
                alrTime: "14:12:12",
                alrDef: "1231231",
            },
        ]
    };

    render() {
        let alarmItems = this.state.alarms.map((val, key) => {
            return <TouchableWithoutFeedback key={key} onPress={() => this._onItemClick()}>
                <View style={styles.imagewrap}>
                    <AlarmItem alarmLid={val.locationId}
                               alarmLname={val.locationName}
                               alarmNid={val.alrNode}
                               alarm={val.alr}
                               alarmCode={val.alrcode}
                               alarmDate={val.alrDate}
                               alarmTime={val.alrTime}
                               alarmDef={val.alrDef}
                    >
                    </AlarmItem>
                </View>
            </TouchableWithoutFeedback>
        });

        return (
        <ScrollView>
            <ImageBackground style={styles.container} source={require('../../images/devintbluelightbg.jpg')}>
                {alarmItems}
            </ImageBackground>
        </ScrollView>

        )
    }

    // render() {
    //     return(
    //         <View style={styles.container}>
    //             <Image style={styles.warning_img} source={require('../../images/icon_warning.png')}></Image>
    //         </View>
    //     )
    // }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#eee',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     warning_img: {
//         resizeMode: 'contain',
//         width: dimen,
//         marginLeft: 12,
//         marginRight: 12,
//     }
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 12,
    },
    imagewrap: {
        height: 280,
        width: (Dimensions.get('window').width) -24,
        backgroundColor: '#fff',
        borderRadius: 6,
        marginTop: 12,
        marginRight: 12,
        marginLeft: 12,
    },
});
