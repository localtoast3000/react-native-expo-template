import { View, Text } from 'react-native';
import styles from '../styles/tabone.css';
import { useTheme } from '@react-navigation/native';

export default function TabOne({ navigation }) {
  const { main } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: main.bg1C }}>Tab One</Text>
    </View>
  );
}
