import { Link } from 'expo-router';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

type Props = {
  styles?,
  label,
  url?,
  color?,
  background?,
  onPress?,

}

const Button: React.FC<Props> = (props: Props) => {
  const { label, url, background, color, onPress } = props;

  EStyleSheet.build()

  return (
    <View style={[styles.container, { backgroundColor: background, borderColor: color }]} >
      <Link href={url} style={[styles.text, { color: color }]} onPress={onPress}>{label}</Link>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    borderRadius: 10,
    width: '100%',
    height: '2.5rem',
    borderColor: 'black',
    borderWidth: 1,
    paddingBottom: '0.5rem',
    paddingTop: '0.5rem',
    marginTop: '1.25rem'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontFamily: 'MochiyPopOne',
  }
})

export default Button;