    
  import { createStackNavigator } from 'react-navigation';
  import Main from './pages/main';
  import Product from './pages/Product'
  export default createStackNavigator({
      Main,
      Product,
  }, {
    navigationOptions: {
      headerStyle:{
        backgroundColor: '#DA552f'

      },
      headerTintColor:"#fff"
    }
  });