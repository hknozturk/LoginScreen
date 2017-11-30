/**
 * Created by Hawken on 28.11.2017.
 */

/**
 * Created by Hawken on 28.08.2017.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    Dimensions,
    Modal,
    ImageBackground,
    ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImageElement from './imageElement'

const dimen = (Dimensions.get('window').width/2);
class optionScreen extends Component {

    _onItemClick = (val) => {
        console.log('clicked: ', val.imgTitle);

        if (val.imgTitle === 'Araziler') {
            Actions.enterp();
        }
        else if (val.imgTitle === 'Alarmlar') {
            Actions.alarm({selectedEnterp: this.props.text});
        }
        else if (val.imgTitle === 'Ölçüm Birimleri') {
            Actions.measurement();
        }
        else {
            Actions.nodelist({selectedEnterp: this.props.text});
        }
    };

    state = {
        modalVisible: false,
        modalImage: require('../../images/icon_enterp.png'),
        images: [
            {img:require('../../images/icon_enterp.png'), imgTitle: "Araziler"},
            {img:require('../../images/icon_alert.png'), imgTitle: "Alarmlar"},
            {img:require('../../images/icon_selenoid.png'), imgTitle: "Parseller"},
            {img:require('../../images/icon_pump.png'), imgTitle: "Pompalar"},
            {img:require('../../images/icon_filter.png'), imgTitle: "Filtrasyon"},
            {img:require('../../images/icon_measure.png'), imgTitle: "Ölçüm Birimleri"},
        ]
    };

    setModalVisible(visible, imageKey) {
        this.setState({modalImage: this.state.images[imageKey]});
        this.setState({modalVisible: visible})
    }

    getImage() {
        return this.state.modalImage;
    }

    componentDidMount = () => {

        Actions.refresh({title: this.props.text})
    };

    render() {
        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key} onPress={() => this._onItemClick(val)}>

                <View style={styles.imagewrap}>
                    <ImageElement imgsource={val.img} imgtitle={val.imgTitle}></ImageElement>
                </View>
            </TouchableWithoutFeedback>
        });
        return (
        <ScrollView>
            <ImageBackground style={styles.container} source={require('../../images/devintbluelightbg.jpg')}>
                {images}
            </ImageBackground>
        </ScrollView>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imagewrap: {
        height: dimen,
        width: dimen,
        backgroundColor: 'transparent',
        borderColor: '#1c496d',
        borderWidth: 0.5
    },
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0,0.9)'
    },
    text: {
        color: '#fff'
    }
});

export default optionScreen;
