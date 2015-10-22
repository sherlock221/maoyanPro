
var React = require("react-native");


var {
    StyleSheet
    } = React;



var CommonStyles = StyleSheet.create({


    fx_row : {
        flexDirection : "row"
    },

    fx_column : {
        flexDirection : "column"
    },

    fx : {
        flex : 1
    },

    mb15:{
        marginBottom : 15
    },

    mt15:{
        marginTop : 15
    },

    //完全居中
    comCenter : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },

    //outline button
    btn_outline : {
        borderWidth : 1,
        borderColor : "#e54847",
        borderRadius : 4,
        paddingTop : 4,
        paddingBottom :4,
        paddingLeft : 10,
        paddingRight : 10,
        textAlign :"center"
    },

    text_left : {
        textAlign : "left"
    },

    text_right : {
        textAlign : "right"
    },

    //购买
    btn_outline_red:{
        borderColor : "#e54847"
    },
    btn_outline_red_text : {
        color : "#e54847",
        fontSize : 13
    },

    //预售
    btn_outline_blue:{
        borderColor : "#159df1"
    },
    btn_outline_blue_text : {
        color : "#159df1",
        fontSize : 13
    },


    //实心button
    btn : {
        height : 35,
        lineHeight : 35,
        textAlign : "center",
        fontSize : 16,
        borderRadius : 4
    },
    btn_block : {
        flex : 1
    },
    btn_red :{
        backgroundColor : "#e54847"
    },

    btn_red_text : {
        color : "#fff"
    },
    star_style: {
        width : 14.5,
        height : 14.5
    },
    //电影类型
    movieClass : {
        paddingLeft :5,
        paddingRight : 5,
        borderWidth : 0.5,
        borderColor : "#c3c3c3",
        marginRight : 8,
        borderRadius : 2,
        textAlign : 'center',
        fontSize : 10,
        paddingTop : 2,
        paddingBottom : 2
    },
    //电影标签
    movieTypeWrap : {
        paddingLeft  : 4,
        paddingRight : 4,
        backgroundColor : '#2895db',
        borderRadius : 3,
        marginRight : 4
    },
    //最热标签
    movieHotWrap : {
        paddingLeft  : 4,
        paddingRight : 4,
        backgroundColor : '#ff9400',
        borderRadius : 3,
        marginRight : 4
    },
    movieTag : {
        fontSize : 11,
        textAlign : "center",
        color : "#fff"
    },

    pd_lr_15 : {
        paddingLeft : 15,
        paddingRight : 15
    },

    pd_tm_15 : {
        paddingTop : 15,
        paddingBottom : 15
    }



});


module.exports = CommonStyles;

