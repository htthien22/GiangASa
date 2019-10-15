import React from 'react';
import { FlatList, ActivityIndicator,TouchableHighlight, Text, View, Image } from 'react-native';

import ChiTiet from './ChiTiet';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
class TruyenNgan extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  static navigationOptions = {
    title: 'Truyện Ngắn',
  };

  componentDidMount() {
    return fetch('http://10.0.3.3:8080/truyen/select_truyenngan.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate("ChiTiet",{id:item.id})}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.anh }} style={{ width: 130, height: 100, marginTop:10 }} />
                <Text style={{fontSize:18, marginTop:20, width:220,marginLeft:10}}>{item.tieude}</Text>

              </View>
            </TouchableHighlight>
          }
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
const AppTruyenNgan =createStackNavigator({
  TruyenNgan:{
    screen:TruyenNgan
  },
  ChiTiet:{
    screen:ChiTiet
  }
})

export default createAppContainer(AppTruyenNgan);
