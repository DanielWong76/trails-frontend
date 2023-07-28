import React from 'react';
import { View, Text, Image } from "react-native";
import { CSS } from '../constants/styles';
import { Colors } from '../constants/styles';
import EStyleSheet from 'react-native-extended-stylesheet';
type Props = {
  styles?
}

const TrailsLogo: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Trails</Text>
      <Image style={styles.image} source={require('../assets/images/logo.png')} />
    </View>
  )
}

const styles = EStyleSheet.create({
  background: {
    backgroundColor: 'transparent',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4rem',
    marginBottom: '2rem'
  },
  title: {
    fontSize: 48,
    fontFamily: 'MochiyPopOne',
    color: Colors.secondary
  },
  image: {
    width: '6.25rem',
    height: '6.25rem'
  }



})

export default TrailsLogo;