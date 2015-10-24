/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import MainViewAndroid from "./App/View/MainViewAndroid";

global.fetch = "originalFetch";


var {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    BackAndroid,
    TouchableHighlight,
    Navigator
    } = React;



var initialRoute = {name: 'home'};

var maoyanPro = React.createClass({

    RouteMapper : function(route, navigationOperations, onComponentRef){
        let _navigator = navigationOperations;
        if (route.name === 'home') {
            return (
                    <MainViewAndroid ></MainViewAndroid>
            );
        }
        else if(route.name === 'list'){
            return (
                <View>
                    <TouchableHighlight onPress={ () => {_navigator.pop()} }>
                            <Text>购票</Text>
                    </TouchableHighlight>

                </View>
            );
        }
    },
    render: function() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={initialRoute}
                configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                renderScene={this.RouteMapper.bind(this)}
                />
        )
    }
});






var styles = StyleSheet.create({

    container: {
        flex: 1
    }

});

AppRegistry.registerComponent('maoyanPro', () => maoyanPro);
