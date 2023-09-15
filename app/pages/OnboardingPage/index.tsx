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
                <Image source={require('../../assets/images/defaultpfp.png')} style={styles.uploadLogo}/>
                <View style={styles.uploadContainer}>
                    <Image source={require('../../assets/images/upload.png')} style={styles.uploadLogo}/>
                </View>
                <Button label={'Continue'} url={Pages.landing} background={Colors.primaryDark} color={Colors.white}/>
                <Button label={'Continue without Image'} url={Pages.landing} background={Colors.white} color={Colors.primaryDark}/>
          </View>

        </View>
    )
}

const styles = EStyleSheet.create({
    background: {...CSS.AuthCSS.landingPageBackground,
                    backgroundColor: 'transparent'
                },
    container: {...CSS.AuthCSS.landingPageContainer,
                    position: 'absolute',
                    top: 218,
                    zIndex: 1
                },
    trailsLogo: { position: 'absolute',
            top: 108,
            zIndex:1},
    title: {...CSS.AuthCSS.AuthTitle,
                paddingBottom: '1.5rem'
    },
    textInput: CSS.AuthCSS.AuthTextInput,
    text: CSS.AuthCSS.AuthText,
    link: CSS.AuthCSS.AuthLink,
    image: {
        width: 612,
        height: 523
    },
    uploadLogo: {
        alignSelf: 'center',
    },
    name: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    uploadContainer: {
        width: 320,
        height: 200,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 3,
        justifyContent: 'center',
        marginBottom: '1.5rem',
        marginTop: '1.5rem'
    }
  })
  export default ImagePage;
