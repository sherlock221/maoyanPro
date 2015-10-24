var React = require('react-native');
//var TimerMixin = require('react-timer-mixin');
var MaoYanService = require("../../Network/API");
var css = require("./style.js");
var baseCss = require("../Common/CmStyle");

var {
    StyleSheet,
    Text,
    View,
    Component,
    ListView,
    Image,
    TouchableHighlight,
    ScrollView,
    } = React;


class MovieIndexView extends Component {

    //构造函数
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
            isLoading: true
        }

    }

    //组件渲染之后
    componentDidMount() {
        this._loadData();
    }


    _getTicket(movie) {

        console.log("ticket");

        this.props.navigator.push({name:"list",index : 1});

    }

//<ActivityIndicatorIOS
//animating={this.state.isLoading}
//size='small'/>
    
    //加载loading
    _renderLoading() {
        return (
                <View style={css.loadingWrap}>

                    <Text style={{marginLeft : 15}}>
                        加载数据中...
                    </Text>

                </View>
        );
    }

    //渲染每一行
    _renderRow(movie, sectionID, rowID) {

        let movieTag, movieNewTag;

        //电影标签
        if (movie.imax || movie['3d']) {
            movieTag = (
                <View style={baseCss.movieTypeWrap}>
                    <Text style={baseCss.movieTag}>
                        {movie['3d'] ? ("3D") : null}&nbsp;{movie.imax ? ("IMAX") : null}
                    </Text>
                </View>

            );
        }

        //电影是否最新
        if (movie.late) {
            movieNewTag = (
                <View style={baseCss.movieHotWrap}>
                    <Text style={baseCss.movieTag}>
                        {movie.late ? ("新") : null }
                    </Text>
                </View>
            );
        }


        return (
            <View style={css.movieRow}>
                <View style={css.movieLeft}>
                    <Image source={{uri : movie.img}} style={css.movieImage}/>
                </View>

                <View style={css.movieMiddle}>

                    <View style={css.movieTitle}>
                        <Text style={css.movieTitleContent}>
                            {movie.nm}
                        </Text>
                        {movieTag}
                        {movieNewTag}

                    </View>

                    <Text numberOfLines={1} style={css.movieDesc}>
                        {movie.scm}
                    </Text>
                    <Text numberOfLines={1} style={css.movieDesc}>
                        今天{movie.cnms}家影院上映{movie.snum}场
                    </Text>
                </View>

                <View style={css.movieRight}>

                    <Text style={css.movieScore}>{movie.sc}分</Text>

                    <View style={{   alignSelf : "stretch",flex : 1}}>
                    </View>

                    <View>

                        <TouchableHighlight onPress={ () => {this._getTicket(movie)} }>
                            <View style={[baseCss.btn_outline,baseCss.btn_outline_red]}>
                                <Text style={baseCss.btn_outline_red_text}>购票</Text>
                            </View>
                        </TouchableHighlight>

                    </View>

                </View>

            </View>
        );
    }

    //加载数据
    _loadData() {

        MaoYanService.getMovieList()
            .then((res) => {
                console.log("数据拉成功");
                let movieData = res.data.movies;

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(movieData),
                    isLoading: false
                });
            })
            .catch((ex) => {
                console.log(ex);
            })
            .done();
    }

    render() {

        let temp;

        if (this.state.isLoading){
            temp =  this._renderLoading();
        }
        else{
            temp = (
                    <ListView scrollEnabled={false}
                              removeClippedSubviews ={true}
                              dataSource={this.state.dataSource}
                              renderRow={this._renderRow.bind(this)}>
                    </ListView>
            )
        }

        return (
            <ScrollView >
                {temp}
            </ScrollView>
        );


    }

}


module.exports = MovieIndexView;
