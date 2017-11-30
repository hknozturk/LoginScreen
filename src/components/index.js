/**
 * Created by Hawken on 24.11.2017.
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './Login/login';
import EnterpScreen from './Enterp/enterp';
import OptionScreen from './Option/options';
import ListviewScreen from './NodeList/list';
import PumpScreen from './Pump/pump';
import FiltrationScreen from './Filtration/filtration';
import SolenoidScreen from './Solenoid/solenoid';
import AlarmScreen from './Alarm/alarm';
import MeasurementScreen from './MeasurementStation/measurementStation';

const App = () => {

    return (
        <Router>
            <Scene key="root">
                <Scene key="login"
                       hideNavBar
                       component={LoginScreen}
                       initial
                />
                <Scene
                    key="enterp"
                    renderLeftButton={() => (null)}
                    component={EnterpScreen}
                    title="Araziler"
                    navigationBarStyle={{backgroundColor: '#6b9cbd'}}
                />
                <Scene
                    key="options"
                    component={OptionScreen}
                    navigationBarStyle={{backgroundColor: '#6b9cbd'}}
                />
                <Scene
                    key="nodelist"
                    component={ListviewScreen}
                    navigationBarStyle={{backgroundColor: '#6b9cbd'}}
                />
                <Scene
                    key="pump"
                    component={PumpScreen}
                    navigationBarStyle={{backgroundColor: '#6b9cbd'}}
                />
                <Scene
                    key="filtration"
                    component={FiltrationScreen}
                    navigationBarStyle={{backgroundColor: '#6b9cbd'}}
                />
                <Scene
                    key="solenoid"
                    component={SolenoidScreen}
                    navigationBarStyle={{backgroundColor: '#6b9cbd'}}
                />
                <Scene
                    key="alarm"
                    component={AlarmScreen}
                    navigationBarStyle={{backgroundColor: '#6b9cbd'}}
                />
                <Scene
                    key="measurement"
                    component={MeasurementScreen}
                    navigationBarStyle={{backgroundColor: '#6b9cbd'}}
                />
            </Scene>
        </Router>
    );
};

export default App;