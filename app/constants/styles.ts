import { ViewStyle } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Colors = {
  primary: '#7FC893',
  primaryDark: '#43754C',
  secondary: '#4F4037',
  secondaryLight: '#D0A98F',
  white: '#FFFFFF'
}

const Auth = EStyleSheet.create({
  landingPageContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: '2.5rem',
    flexGrow: 1,
  },
  landingPageBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  AuthTitle: {
    fontSize: 32,
    color: Colors.secondary,
    paddingBottom: '2.5rem',
    fontFamily: 'MochiyPopOne',
  },
  AuthTextInput: {
    color: Colors.primaryDark + '73',

    borderColor: Colors.primaryDark,
    borderWidth: 1,
    paddingVertical: '0.5rem',
    paddingHorizontal: '1rem',
    borderRadius: 5,
    marginBottom: '1.875rem',
    fontSize: 12,
    fontFamily: 'MochiyPopOne',
  },
  AuthText: {
    paddingTop: '1rem',
    textAlign: 'center',
    color: Colors.primary,
    fontFamily: 'MochiyPopOne',
  },
  AuthLink: {
    color: Colors.primaryDark
  }
})

export const CSS = {
  AuthCSS: Auth,


}