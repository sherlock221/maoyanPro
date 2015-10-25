/**
 * Sample React Native App
 * es6书写的 rn 启动类
 */

'use strict';

/**
 * 导入包
 */
import React from 'react-native'
import MovieView from "./App/View/Movie/MovieIndexView";
import CinemaView from "./App/View/Cinema/CinemaView";

/**
 * 解构声明(需要使用的类)
 */
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS,
    Component
    } = React;



/**
 * 项目启动类继承自 React.Component
 */
class maoyanPro extends Component {

    statics:{

        }

    //构造函数(组件挂载之前)
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tabMovie'
        };


        console.log("组件挂载.... 之前 getInitialState");
    }


    //初始化渲染之后
    componentDidMount() {
        console.log("init 渲染 之后 componentDidMount");
        //this.loadData();
    }

    //初始化渲染之前
    componentWillMount() {
        console.log("init 渲染 之前 componentWillMount")
    }



    //渲染导航条
    renderNavigatorBar(tabType='tabMovie', tabName='电影') {
        var componentView ;

        switch (tabType){
            case "tabMovie" :
                componentView = MovieView;
                break;
            case "tabCinema" :
                componentView = CinemaView;
                break;
            default :
               alert("view 错误");
                break;

        }

        return (
            <NavigatorIOS
                barTintColor='#e54847'
                titleTextColor='#fff'
                tintColor='#fff'
                style={css.nav}
                initialRoute={{
                            //rightButtonIcon : require('image!search'),
                            leftButtonTitle :    "西安",
                            component : componentView,
                            title : tabName,
                            passProps : {test : "111"}
                    }}
                />

        )
    }

    //渲染底部选项卡
    renderTabar() {
        return (
            <TabBarIOS 
                tintColor="#e54847"
                barTintColor="#fff">

                <TabBarIOS.Item
                    title="电影"
                    systemIcon="history"
                    selected={ this.state.selectedTab === 'tabMovie'  }
                    onPress={()=>{ this.setState({  selectedTab : "tabMovie"}) }}
                    >

                    {this.renderNavigatorBar()}
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="影院"
                    systemIcon="history"
                    selected={this.state.selectedTab === 'tabCinema'}
                    onPress={()=>{ this.setState({  selectedTab : "tabCinema"}) }}
                    >
                    {this.renderNavigatorBar('tabCinema','影院')}
                </TabBarIOS.Item>

            </TabBarIOS>
        )
    }

    render() {
        return(
            <View style={css.container}>
                {this.renderTabar()}
            </View>
        );
    }
}


var css = StyleSheet.create({
    container: {
        flex: 1
    },
    nav: {
        flex: 1
    }

});


AppRegistry.registerComponent('maoyanPro', () => maoyanPro);
