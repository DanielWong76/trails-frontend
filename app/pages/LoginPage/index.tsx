import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from "react-native";
import { Link } from "expo-router";
import TrailsLogo from '../../components/trailsLogo';
import { CSS, Colors } from '../../constants/styles';
import Button from '../../components/button';
import Pages from '../../constants/pages';
import EStyleSheet from 'react-native-extended-stylesheet';
type Props = {
    styles?
}

const LoginPage: React.FC<Props> = (props: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    EStyleSheet.build()

    return (
        <View style={styles.background}>
            <TrailsLogo />
            <View style={styles.container}>
                <Text style={styles.title}>
                    Login
                </Text>

                <TextInput style={styles.textInput} placeholder='Username' onChangeText={setUsername} value={username} placeholderTextColor={Colors.primaryDark + '73'} />
                <TextInput style={styles.textInput} placeholder='Password' onChangeText={setPassword} value={password} placeholderTextColor={Colors.primaryDark + '73'} />



                <Button label={'Login'} url={Pages.home} background={Colors.primaryDark} color={Colors.white} />
                <Button label={'Back'} url={Pages.landing} color={Colors.primaryDark} background={Colors.white} />

                <Text style={styles.text}>New User? <Link style={styles.link} href={Pages.signUp}>Sign Up</Link></Text>

            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    background: CSS.AuthCSS.landingPageBackground,
    container: CSS.AuthCSS.landingPageContainer,
    title: CSS.AuthCSS.AuthTitle,
    textInput: CSS.AuthCSS.AuthTextInput,
    text: CSS.AuthCSS.AuthText,
    link: CSS.AuthCSS.AuthLink,
})

export default LoginPage;