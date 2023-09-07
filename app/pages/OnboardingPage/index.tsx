import React from 'react';
import Pages from '../../constants/pages';
import { Colors } from '../../constants/styles';
import TrailsLogo from '../../components/trailsLogo';
import { View, Text, ImageBackground, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CSS } from '../../constants/styles';
import Button from '../../components/button';

type Props = {
    styles?
  }

const ImagePage: React.FC<Props> = (props: Props) => {
    return(
        <View style={styles.background}>
            <ImageBackground source={require('../../assets/images/ai-photo.png')} style={styles.image}>
                <TrailsLogo/>
            </ImageBackground>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Upload Image
                </Text>
                <Image source={require('../../assets/images/defaultpfp.png')} style={styles.logo}/>
                <View>
                    <Image source={require('../../assets/images/upload.png')} style={styles.logo}/>
                </View>
                <Button label={'Continue'} url={Pages.landing} background={Colors.primaryDark} color={Colors.white}/>
                <Button label={'Continue without Image'} url={Pages.landing} background={Colors.white} color={Colors.primaryDark}/>
          </View>

        </View>
    )
}

const backg = CSS.AuthCSS.landingPageBackground;
backg.backgroundColor = 'transparent';

const cont = CSS.AuthCSS.landingPageContainer;
cont.marginTop = -50;

const styles = EStyleSheet.create({
    background: backg,
    container: cont,
    title: CSS.AuthCSS.AuthTitle,
    textInput: CSS.AuthCSS.AuthTextInput,
    text: CSS.AuthCSS.AuthText,
    link: CSS.AuthCSS.AuthLink,
    image: {
        width: 612,
        height: 523
    },
    logo: {
        alignSelf: 'center',
    },
    name: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  })
  export default ImagePage;
