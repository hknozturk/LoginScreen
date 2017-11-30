/**
 * Created by Hawken on 30.11.2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';

const dimen = (Dimensions.get('window').width) - 32;
export default class temperatureDataCard extends Component {

    render() {
        return(
            <View>
                <Text style={styles.header}>Toprak Sıcaklık Değerleri</Text>
                <View style={styles.container}>
                    <View style={styles.title_container}>
                        <Text style={styles.data_title}>30cm:</Text>
                        <Text style={styles.data_title}>60cm:</Text>
                        <Text style={styles.data_title}>90cm:</Text>
                    </View>
                    <View style={styles.data_container}>
                        <Text style={styles.data_input}>...</Text>
                        <Text style={styles.data_input}>...</Text>
                        <Text style={styles.data_input}>...</Text>
                    </View>
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
    header: {
        textAlign: 'center',
        marginTop: 10,
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
        marginTop: 6,
        fontSize: 20,
        fontWeight: '300',
        color: '#1c496d'
    },
    data_input: {
        marginRight: 12,
        marginTop: 6,
        fontSize: 20,
        fontWeight: '400',
        color: '#000'
    }
});