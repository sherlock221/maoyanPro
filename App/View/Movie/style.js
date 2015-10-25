var React = require('react-native');
var {
    StyleSheet,
    } = React;


var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    c1: {

    },

    loadingWrap: {
        flexDirection: "row",
        alignItems: 'center',
        flex : 1,
        justifyContent  :"center",

        marginTop : 30
    },
    movieRow: {
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: .5,
        borderBottomColor: '#d6d6d6',
        height : 105
    },

    movieLeft: {
    },

    movieMiddle: {
        flex: 1,
        paddingLeft: 10
    },
    movieRight: {
        alignItems: "flex-end"
    },


    movieImage: {
        width: 61,
        height: 84
    },
    movieTitle: {
        flexDirection: "row",
        marginTop: 4,
        alignItems: 'center'
    },
    movieTitleContent: {
        fontSize: 16,
        marginRight: 4
    },
    movieDesc: {
        color: "#666",
        fontSize: 14,
        marginTop: 7
    },

    movieScore: {
        marginTop: 4,
        color: "#ff9a00"
    }



    //button



});


module.exports = styles;