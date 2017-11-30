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
    ImageBackground
} from 'react-native';
import { Fonts } from '../../utils/Fonts.js'

export default class ImageElement extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.imgsource} style={styles.image}>
                </Image>
                <Text style={styles.text}>{this.props.imgtitle}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    image: {
        marginTop: 30,
        height: 96,
        width: 96,
        alignSelf: 'center',
    },
    text: {
        color: '#1c496d',
        fontSize: 18,
        fontFamily: Fonts.Orbiotron,
        textAlign: 'center',
        marginTop: 10,
    }
});