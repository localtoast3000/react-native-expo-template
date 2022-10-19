import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/home.css';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../reducers/theme';

export default function Home({ navigation }) {
  const { main } = useTheme();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.homeText, color: main.bg1C }}>Home</Text>
      <TouchableOpacity style={{ ...styles.button, backgroundColor: main.pa4 }} onPress={() => dispatch(toggleTheme())}>
        <Text style={{ ...styles.buttonText, color: main.pa2C }}>Toggle theme</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: main.pa1 }}
        onPress={() => navigation.navigate('Tabs')}>
        <Text style={{ ...styles.buttonText, color: main.pa1C }}>Go To Tabs</Text>
      </TouchableOpacity>
    </View>
  );
}
