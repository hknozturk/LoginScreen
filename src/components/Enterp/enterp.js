/**
 * Created by Hawken on 24.11.2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    SectionList,
    TouchableHighlight,
} from 'react-native';

import {Fonts} from '../../utils/Fonts.js'
import {Actions} from 'react-native-router-flux';

const dataSource = [
    {data: [{name: 'COMU'}, {name: 'Devint'}, {name: 'Semak'}, {name: 'Organiz Kiraz'}, {name: 'Manzara'}, {name: 'Deneme'}]}
];

class Enterp extends Component {

    _onItemClick = (item) => {
        console.log('clicked: ', item.item.name, ' index: ' , item.index);
        Actions.options({text: item.item.name});
    };

    renderItem = (item) => {
        return <TouchableHighlight style={styles.item_container} onPress={() => this._onItemClick(item)}>
            <Image  style={styles.imageContainer} source={require('../../images/background.png')}>
                <Text style={styles.text}>{item.item.name}</Text>
            </Image>
        </TouchableHighlight>
    };

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../images/devintbluelightbg.jpg')}>
                <SectionList
                    renderItem={this.renderItem}
                    sections={dataSource}
                    keyExtractor={(item) => item.name}
                />

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 8,
        paddingLeft: 8,
        paddingBottom: 8,
    },
    item_container: {
        height: 140,
        marginTop: 6,
        alignItems: 'stretch'
    },
    imageContainer: {
        flex: 1,
        width: null,
        height: null,
    },
    text: {
        flex: 1,
        fontSize: 21,
        fontFamily: Fonts.Orbiotron,
        color: '#1c496d',
        textAlign: 'center',
        marginTop: 60

    }
});

export default Enterp;