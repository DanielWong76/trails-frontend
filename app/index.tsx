import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {

}

const Home: React.FC<Props> = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Link href='/pages/login'>Login here</Link >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        padding: 24
    }
})

export default Home;