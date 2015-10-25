/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import MovieIndexView from "./App/View/Movie/MovieIndexView";
import CinemaView from "./App/View/Cinema/CinemaView";
import DrawerItemAndroid from "./App/View/DrawerItemAndroid";


var {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    BackAndroid,
    TouchableHighlight,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    Navigator
    } = React;



var initialRoute = {itemName: 'movie'};


const DRAWER_REF = 'drawer';
const DRAWER_WIDTH_LEFT = 56;

var  toolbarActions = [
    {title: '搜索', icon:require("image!ic_message_white"),show: 'always'},
    {title: '关于', show: 'never'},
    {title: '帮助', show: 'never'}
];

var _navigator;

var maoyanPro = React.createClass({




    getInitialState : function(){

        return {
            navTitle : "电影"
        }
    },


    RouteMapper : function(route, navigationOperations, onComponentRef){
         _navigator = navigationOperations;

        if (route.itemName === 'movie') {
            return (
                    <MovieIndexView ></MovieIndexView>
            );
        }
        else if(route.itemName === 'cinema'){
            return (
               <CinemaView />
            );
        }
    },

    _renderNavigationView(){
        return (
           <DrawerItemAndroid onSelectItem = {this._onSelectItem} />
        );
    },

    _onSelectItem(item){
        console.log(item);
        this.setState({
            navTitle : item.itemDesc
        });
        this.refs[DRAWER_REF].closeDrawer();
        _navigator.replace(item);
    },
    render: function() {

        return (

            <DrawerLayoutAndroid
                ref={DRAWER_REF}
                drawerWidth={Dimensions.get("window").width - DRAWER_WIDTH_LEFT}
                keyboardDismissMode="on-drag"
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView = {this._renderNavigationView}

                >

                <ToolbarAndroid
                    navIcon={require('image!ic_menu_white')}
                    title={this.state.navTitle}
                    titleColor="#fff"
                    subtitleColor = "#fff"
                    style={styles.toolbar}
                    actions={toolbarActions}
                    onIconClicked={()=>{ this.refs[DRAWER_REF].openDrawer()}}
                    onActionSelected={this.onActionSelected}>
                </ToolbarAndroid>

            <Navigator
                style={styles.container}
                initialRoute={initialRoute}
                configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                renderScene={this.RouteMapper.bind(this)}
                />




            </DrawerLayoutAndroid>
        )
    }
});




var styles = StyleSheet.create({

    container: {
        flex: 1
    },
    toolbar: {
        backgroundColor: '#e54847',
        height: 56,
        color : "#ffffff"
    }

});

AppRegistry.registerComponent('maoyanPro', () => maoyanPro);
