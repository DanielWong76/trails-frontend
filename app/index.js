import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Link href='/login'>Login here</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        padding:24
    }})

export default Home;