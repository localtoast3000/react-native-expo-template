import { View, Text } from 'react-native';
import styles from '../styles/tabtwo.css';
import { useTheme } from '@react-navigation/native';

export default function TabTwo({ navigation }) {
  const { main } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: main.bg1C }}>Tab Two</Text>
    </View>
  );
}
