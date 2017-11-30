/**
 * Created by Hawken on 29.11.2017.
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

const dimen = (Dimensions.get('window').width);
export default class listviewItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image_container}>
                    <Image source={require('../../images/icon_selenoid.png')} style={styles.nodeImage}></Image>
                </View>
                <View style={styles.data_container}>
                    <Text style={styles.textName}>{this.props.nodeItemName}</Text>
                    <Text style={styles.textId}>{this.props.nodeItemId}</Text>
                </View>
                <View style={styles.image_container}>
                    <Image source={require('../../images/icon_next.png')} style={styles.nextImage}></Image>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
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
    nodeImage: {
        height: 48,
        width: 48,
    },
    textName: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
    },
    textId: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
    },
    nextImage: {
        height: 36,
        width: 36,
        marginRight: 12,
    }
});
