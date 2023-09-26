import React, { useState } from 'react';
import Pages from '../../constants/pages';
import { Colors } from '../../constants/styles';
import TrailsLogo from '../../components/trailsLogo';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CSS } from '../../constants/styles';
import Button from '../../components/button';
import * as ImagePicker from 'expo-image-picker';
import { UserImage } from '../../service/api/user';
import * as FileSystem from 'expo-file-system';

type Props = {
    styles?
}


const ImagePage: React.FC<Props> = (props: Props) => {
    const [photo, setPhoto] = useState(null);

    function fileToBase64(filePath, callback) {
        const reader = new FileReader();

        // Handle the file read completion event
        reader.onload = function (event) {
            const base64DataUrl = event.target.result;
            callback(base64DataUrl);
        };

        // Read the file as a Data URL
        fetch(filePath)
            .then((response) => response.blob())
            .then((blob) => {
                reader.readAsDataURL(blob);
            });
    }

    const cont = (async () => {
        try {
            fileToBase64(photo, function (base64DataUrl) {
                console.log(base64DataUrl); // This is the base64 Data URL
                const response = UserImage('6505eb72f1848df58c229539', base64DataUrl)
            });
        }
        catch (error) {
            console.log(error);
        }
    })

    const handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            setPhoto(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.background}>
            <ImageBackground source={require('../../assets/images/ai-photo.png')} style={styles.image}>
                <TrailsLogo />
            </ImageBackground>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Upload Image
                </Text>
                <Image source={photo ? { uri: photo } : require('../../assets/images/defaultpfp.png')} style={styles.profilePhoto} />
                <TouchableOpacity onPress={handleChoosePhoto}>
                    <View style={styles.uploadContainer}>
                        <Image source={require('../../assets/images/upload.png')} style={styles.uploadLogo} />
                    </View>
                </TouchableOpacity>
                <Button label={'Continue'} url={Pages.landing} background={Colors.primaryDark} color={Colors.white} onPress={cont} />
                <Button label={'Continue without Image'} url={Pages.landing} background={Colors.white} color={Colors.primaryDark} />
            </View>

        </View>
    )
}

const styles = EStyleSheet.create({
    background: {
        ...CSS.AuthCSS.landingPageBackground,
        backgroundColor: 'transparent'
    },
    container: {
        ...CSS.AuthCSS.landingPageContainer,
        position: 'absolute',
        top: 218,
        zIndex: 1
    },
    trailsLogo: {
        position: 'absolute',
        top: 108,
        zIndex: 1
    },
    title: {
        ...CSS.AuthCSS.AuthTitle,
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
    profilePhoto: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 30
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
