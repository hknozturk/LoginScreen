/**
 * Created by Hawken on 30.11.2017.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
    ImageBackground,
    Dimensions,
} from 'react-native';

const dimen = (Dimensions.get('window').width)- 48;

export default class alarmItem extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.header_container}>
                    <View style={styles.image_container}>
                        <Text style={styles.header_lid_text}>{this.props.alarmLid}</Text>
                    </View>
                    <View style={styles.data_container}>
                        <Text style={styles.textName}>{this.props.alarmLname}</Text>
                    </View>
                    <View style={styles.image_container}>
                        <Image source={require('../../images/icon_alert.png')} style={styles.nextImage}></Image>
                    </View>
                </View>
                <View style={styles.container_seperator}/>
                <View style={styles.alert_info_title_container}>
                    <View style={styles.title_container}>
                        <Text style={styles.data_title}>Tarih:</Text>
                        <Text style={styles.data_title}>Zaman:</Text>
                        <Text style={styles.data_title}>Node:</Text>
                        <Text style={styles.data_title}>Tip:</Text>
                        <Text style={styles.data_title}>Kod:</Text>
                        <Text style={styles.data_title}>Açıklama:</Text>
                    </View>

                    <View style={styles.alert_info_data_container}>
                        {/*<Text style={styles.data_input}>{this.props.alrDate}</Text>*/}
                        {/*<Text style={styles.data_input}>{this.props.alrTime}</Text>*/}
                        {/*<Text style={styles.data_input}>{this.props.alrnid}</Text>*/}
                        {/*<Text style={styles.data_input}>{this.props.alr}</Text>*/}
                        {/*<Text style={styles.data_input}>{this.props.alrcode}</Text>*/}
                        {/*<Text style={styles.data_input}>{this.props.alrDef}</Text>*/}
                        <Text style={styles.data_input}>{this.props.alarmDate}</Text>
                        <Text style={styles.data_input}>{this.props.alarmTime}</Text>
                        <Text style={styles.data_input}>{this.props.alarmNid}</Text>
                        <Text style={styles.data_input}>{this.props.alarm}</Text>
                        <Text style={styles.data_input}>{this.props.alarmCode}</Text>
                        <Text style={styles.data_input}>{this.props.alarmDef}</Text>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header_container: {
        width: dimen,
        marginTop: 6,
        marginRight: 12,
        marginLeft: 12,
        flexDirection: 'row',
    },
    header_lid_text: {
        fontWeight: 'bold',
        fontSize: 20
    },
    image_container: {
        width: (dimen/6),
        justifyContent: 'center',
        alignItems: 'center',
    },
    data_container: {
        width: 4*(dimen/6),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textName: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
    },
    nextImage: {
        height: 36,
        width: 36,
        marginRight: 12,
    },
    card_seperator: {
        flex: 1,
        height: 1.5,
        marginTop: 6,
        backgroundColor: '#1c496d'
    },
    container_seperator: {
        height: 1.5,
        marginTop: 8,
        backgroundColor: '#1c496d',
    },
    alert_info_title_container: {
        marginRight: 16,
        marginLeft: 16,
        backgroundColor: '#fff',
        borderRadius: 6,
        flexDirection: 'row'
    },
    alert_info_data_container: {
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
        marginTop: 6,
        fontSize: 18,
        fontWeight: '300',
        color: '#1c496d'
    },
    data_input: {
        marginRight: 12,
        marginTop: 6,
        fontSize: 18,
        fontWeight: '400',
        color: '#000'
    }
});
