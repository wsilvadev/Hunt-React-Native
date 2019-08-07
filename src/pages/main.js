import React, {Component} from 'react';
import {
    Text,View
} from 'react-native';

export default class Main extends Component{
static navigationOptions ={
    title: 'JSHunte',
}
    render(){
        return(
            <View>
                <Text>Funcionou</Text>
            </View>
        );
    }
}