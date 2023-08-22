import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import TrailsLogo from '../../components/trailsLogo';
import { CSS } from '../../constants/styles';
import { useState } from 'react';
import Button from '../../components/button';
import Pages from '../../constants/pages';
import { Colors } from '../../constants/styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import { UserSignUp } from '../../service/api/user';
import User from '../../models/user';

type Props = {
  styles?
}

const SignUpPage: React.FC<Props> = (props: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  EStyleSheet.build()

  const signUp = (async () => {
    console.log(firstName)
    if (confirmPassword != password) {
      throw new Error("Passwords do not match");
    }
    try {
      const data = new User({
        firstName: firstName, 
        lastName: lastName, 
        username: username, 
        email: email, 
        passwordDigest: password
      });
      console.log('Making API call');
      const { user } = await UserSignUp(data);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <View style={styles.background}>
      <TrailsLogo />
      <View style={styles.container}>
        <Text style={styles.title}>
          Sign Up
        </Text>
        <View style={styles.name}>
          <TextInput style={[styles.textInput, { width: '45%' }]} placeholder='First Name' onChangeText={setFirstName} value={firstName} placeholderTextColor={Colors.primaryDark + '73'} />
          <TextInput style={[styles.textInput, { width: '45%' }]} placeholder='Last Name' onChangeText={setLastName} value={lastName} placeholderTextColor={Colors.primaryDark + '73'} />
        </View>
        <TextInput style={styles.textInput} placeholder='Username' onChangeText={setUsername} value={username} placeholderTextColor={Colors.primaryDark + '73'} />
        <TextInput style={styles.textInput} placeholder='Email' onChangeText={setEmail} value={email} placeholderTextColor={Colors.primaryDark + '73'} />
        <TextInput style={styles.textInput} placeholder='Password' onChangeText={setPassword} value={password} placeholderTextColor={Colors.primaryDark + '73'} />
        <TextInput style={styles.textInput} placeholder='Confirm Password' onChangeText={setConfirmPassword} value={confirmPassword} placeholderTextColor={Colors.primaryDark + '73'} />



        <Button label={'Sign Up'} url={Pages.landing} background={Colors.primaryDark} color={Colors.white} onPress={signUp} />

        <Button label={'Back'} url={Pages.landing} color={Colors.primaryDark} background={Colors.white} />

        <Text style={styles.text}>Already have an Account? <Link style={styles.link} href={Pages.login}>Login</Link></Text>

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
  name: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }


})


export default SignUpPage;