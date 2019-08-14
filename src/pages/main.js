import api from '../services/api'
import React, {Component} from 'react';
import {
    Text,View,FlatList,TouchableOpacity
} from 'react-native';
import Style from './style'
export default class Main extends Component{
    static navigationOptions ={
        title: 'JSHunte',
    };
    
    state = {
           docs:[]
    };

componentDidMount(){
    this.loadProducts();
}
 loadProducts = async () =>{
    const response = await api.get('/products');
    const{docs} = response.data;
    
    this.setState({docs});

}
renderItem = ({item}) =>{
    return (
        <View style = {Style.productContainer}>
            <Text style = {Style.productTitle}>{item.title}</Text>
            <Text style = {Style.productDescription}>{item.description}</Text>
            <TouchableOpacity style = {Style.productButton} onPress = {()=>{}} >
                <Text style = {Style.productButtonText}>Acessar</Text>
            </TouchableOpacity>

            
        </View>
    )
}

    render(){
        return(
            <View style = {Style.container}>
                <FlatList 
                contentContainerStyle = {Style.list}
                data = {this.state.docs}
                keyExtractor ={item => item._id}
                renderItem = {this.renderItem}
                />
            </View>
        );
    }
}
