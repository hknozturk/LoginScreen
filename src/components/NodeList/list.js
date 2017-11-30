/**
 * Created by Hawken on 29.11.2017.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    SectionList,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ListviewItem from './listviewItem';

export default class Listview extends Component {

    _onItemClick = (val) => {
        console.log("Clicked ", val.name);

        if (val.name === 'Balkon Filtrasyon') {
            Actions.filtration();
        }
        else if (val.name === 'Balkon Selenoid') {
            Actions.solenoid();
        }
        else if (val.name === 'Balkon Pompa') {
            Actions.pump();
        }
        else {
            // later babe
        }

    };

    state = {
        nodes: [
            {name: "Balkon Node", id: "1001"},
            {name: "Balkon Filtrasyon", id: "0101"},
            {name: "Balkon Selenoid", id: "1000"},
            {name: "Balkon Pompa", id: "1010"},
        ]
    };

    componentDidMount = () => {

        Actions.refresh({title: this.props.selectedEnterp + " List"})
    };

    render() {

        let nodeitems = this.state.nodes.map((val, key) => {
            return <TouchableWithoutFeedback key={key} onPress={() => this._onItemClick(val)}>

                <View style={styles.imagewrap}>
                    <ListviewItem nodeItemName={val.name} nodeItemId={val.id}></ListviewItem>
                </View>
            </TouchableWithoutFeedback>
        });

        return(
            <ImageBackground style={styles.container}  source={require('../../images/devintbluelightbg.jpg')}>
                {nodeitems}
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imagewrap: {
        height: 64,
        width: (Dimensions.get('window').width) -24,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 6,
        marginRight: 12,
        marginLeft: 12,
    },
});

