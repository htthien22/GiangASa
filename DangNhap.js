
import React, { Component } from 'react';
import {
    View, Image,
    Text, Button, TextInput, TouchableOpacity
} from 'react-native';
import { yellow } from 'ansi-colors';

export default class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dangky: false,
        }
    }
    static navigationOptions = {
        title: 'Đăng Nhập',
      };
    render() {
        if (this.state.dangky == false) {
            return (
                <View style={{ backgroundColor: '#fff', height: 700 }}>
                    {<Image source={require('./image/dd.jpg')} style={{ height: 170, width: '100%', marginTop: 50 }}></Image> }
                    <View style={{ margin: 20 }}>
                        <TextInput placeholder='Usename' style={{ backgroundColor: '#000', borderRadius: 5, }}
                            onChangeText={user => this.setState({ user })}
                        ></TextInput>
                        <TextInput placeholder="Password" secureTextEntry={true} style={{ backgroundColor: '#000', borderRadius: 5, marginTop: 5 }}
                            onChangeText={pass => this.setState({ pass })}
                        placeholderTextColor='#fff'
                        ></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 130 }}>
                        <Button stule={{marginTop: 20}}title="đăng nhập" onPress={() => this.props.navigation.navigate('ViewItem')} ></Button>

                    </View>
                    <TouchableOpacity onPress={() => this.setState({ dangky: true })}>
                        <Text style={{
                            width:95, height:33, backgroundColor: 'red',
                             borderRadius:5,marginLeft:132,
                                textAlign:'center', 
                                paddingTop: 5,
                             marginTop:10
                             }}>ĐĂNG KÝ 
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View >
                    <View style={{ margin: 20 }}>
                        <TextInput placeholder='Usename' style={{ backgroundColor: '#ECE0F8', borderRadius: 5, marginBottom:5 }}

                        ></TextInput>
                        <TextInput placeholder='Họ Và Tên' style={{ backgroundColor: '#ECE0F8', borderRadius: 5, }}

                        ></TextInput>
                        <TextInput placeholder="Password" secureTextEntry={true} style={{ backgroundColor: '#ECE0F8', borderRadius: 5, marginTop: 5 }}
                            onChangeText={pass => this.setState({ pass })}
                        ></TextInput>
                    </View>
                    <View style={{ width:95, height:33,
                             borderRadius:10,marginLeft:132,
                                textAlign:'center', 
                                paddingTop: 5,marginBottom: 5,}}>
                        <Button  title="Đăng Ký" onPress={() => this.setState({ dangky: false })} ></Button>

                    </View>
                    <TouchableOpacity onPress={() => this.setState({ dangky: false })}>
                        <Text style={{
                            width:95, height:33, backgroundColor: 'red',
                             borderRadius:5,marginLeft:132,
                                textAlign:'center', 
                                paddingTop: 5,
                             marginTop:10
                             }}>Quay lại
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}




