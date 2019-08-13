import api from '../services/api'
import React, {Component} from 'react';
import {
    Text,View,FlatList
} from 'react-native';

state = {

    docs:[],
};
export default class Main extends Component{
static navigationOptions ={
    title: 'JSHunte',
}

componentDidMount(){
    this.loadProducts();
}
 loadProducts = async () =>{
    const response = await api.get('/products');

    const{docs} = response.data;
console.log(docs)
    this.setState({docs: this.state.docs});

}
renderItem = ({item}) =>(
    <View>
    <Text>{item.title}</Text>
    <Text>{item.description}</Text>

    </View>
)
    render(){
        return(
            <View>
                <FlatList
                data={this.state.title}
                keyExtractor={item =>  item._id}
                renderItem={this.renderItem}
                />

            </View>
        );
    }
}