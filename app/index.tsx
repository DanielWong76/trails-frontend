import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';
import Button from './components/button';
import { CSS, Colors } from './constants/styles';
import Pages from './constants/pages';
import { loadAsync } from 'expo-font';
import useFonts from './hooks/useFonts';
import { useState, useEffect } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

type Props = {
    styles?
}



const LandingPage: React.FC<Props> = (props: Props) => {
    const [IsReady, SetIsReady] = useState(false);
    const LoadFonts = async () => {
        await useFonts();
    };

    EStyleSheet.build({});

    useEffect(() => {
        LoadFonts().catch(console.error);
    }, [])




    return (
        <View style={[styles.background]}>

            <Image style={styles.logo} source={require('./assets/images/logo.png')} />

            <View style={styles.container}>
                <Text style={styles.title}>Welcome to <Text style={styles.trails}>Trails</Text></Text>
                <Text style={styles.subTitle}>A place where your mom is being explored</Text>

                <Button url={Pages.login} label={'Login'} color={Colors.white} background={Colors.primaryDark} />
                <Button url={Pages.signUp} label={'Sign Up'} color={Colors.primaryDark} background={Colors.white} />
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    background: CSS.AuthCSS.landingPageBackground,
    logo: {
        marginTop: '7.188rem',
        marginBottom: '6.25rem'
    },
    container: CSS.AuthCSS.landingPageContainer,
    title: {
        width: '64%',
        fontSize: 30,
        color: Colors.secondary,
        marginBottom: '0.25rem',
        fontFamily: 'MochiyPopOne',
    },
    trails: {
        fontSize: 48
    },
    subTitle: {
        color: Colors.secondaryLight,
        fontSize: 12,
        flexGrow: 1,
        fontFamily: 'MochiyPopOne',
    }
})

export default LandingPage;