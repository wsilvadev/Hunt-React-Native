import api from '../services/api';
import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Style from './style';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunte',
  };

  state = {
    productInfo: {},
    docs: [],
    page: 1,
  };

  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = async (page = 1) => {
    const response = await api.get(`./products?page=${page}`);

    const {docs, ...productInfo} = response.data;

    this.setState({docs: [...this.state.docs, ...docs], productInfo, page});
  };
  loadMore = () => {
    const {page, productInfo} = this.state;

    if (page == productInfo.pages) {
      return;
    }

    const newPages = page + 1;
    this.loadProducts(newPages);
  };
  renderItem = ({item}) => {
    return (
      <View style={Style.productContainer}>
        <Text style={Style.productTitle}>{item.title}</Text>
        <Text style={Style.productDescription}>{item.description}</Text>
        <TouchableOpacity
          style={Style.productButton}
          onPress={() => {
            this.props.navigation.navigate('Product', {product: item});
          }}>
          <Text style={Style.productButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={Style.container}>
        <FlatList
          contentContainerStyle={Style.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}
