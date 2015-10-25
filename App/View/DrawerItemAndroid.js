import React from "react-native";

var {
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    TouchableHighlight,
    Platform,
    TouchableNativeFeedback
    } = React;


const ItemList = [
    {
        "itemName" : "movie",
        "itemDesc" : "电影"
    },
    {
        "itemName" : "cinema",
        "itemDesc" : "影院"
    }


];


class DrawerItemAndroid extends React.Component{

    constructor(props){
        super(props);

    }



    _renderHeader(){

        let TouchableElement;

        if (Platform.OS === 'android') {
            TouchableElement = TouchableNativeFeedback;
        }
        else{
            TouchableElement = TouchableHighlight;
        }

        return (
            <View style={css.itemHeader}>
                <View style={css.userInfo}>
                    <TouchableElement>
                        <View style={{flexDirection: 'row', alignItems: 'center', padding: 16}}>
                            <Image
                                source={require('image!comment_avatar')}
                                style={{width: 40, height: 40, marginLeft: 8, marginRight: 8}} />
                            <Text style={css.menuText}>
                                请登录
                            </Text>
                        </View>
                    </TouchableElement>

                </View>
            </View>

        );
    }

    _renderNav(){

        var temp = [];
        let TouchableElement;

        if (Platform.OS === 'android') {
            TouchableElement = TouchableNativeFeedback;
        }
        else{
            TouchableElement = TouchableHighlight;
        }

        for(let item of ItemList){
            temp.push (<TouchableElement
                onPress={() => {this.props.onSelectItem(item)} }
               >
                <View style={css.themeItem}>
                    <Text style={css.themeName}>
                        {item.itemDesc}
                    </Text>
                </View>
            </TouchableElement>);
        }
        return temp;
    }
    render(){
        return(
            <View style={css.container}>
                {this._renderHeader()}
                {this._renderNav()}
            </View>
        );
    }
}




var css = StyleSheet.create({
    container :{
        backgroundColor : "#fff",
        flex : 1
    },
    itemHeader: {
    },
    userInfo: {
        backgroundColor: '#e54847',
        paddingTop : 25,
        paddingBottom : 25

    },
    menuText: {
        fontSize: 14,
        color: 'white',
    },
    themeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    themeName: {
        fontSize: 16,
        marginLeft: 16
    }
});

module.exports = DrawerItemAndroid;