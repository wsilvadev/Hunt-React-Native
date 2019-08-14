import {StyleSheet} from 'react-native'
const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fafafa'
    },
    productContainer: {
        backgroundColor: '#FFF',
        borderWidth:  1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    list: {
        padding: 20
    },
    productTitle:{
        fontSize: 18,
        fontWeight:'bold',
        color: '#333'
    },
    productDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },
    productButton:{
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 10
        
    },
    productButtonText: {
        fontSize: 16,
        color: '#DA552F',
        fontWeight: 'bold'
    }
});
export default Style;