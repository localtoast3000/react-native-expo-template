import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Home from './screens/Home';
import TabOne from './screens/TabOne';
import TabTwo from './screens/TabTwo';
import store from './store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { lightTheme, darkTheme } from './styles/theme/theme';
import { useEffect } from 'react';
import { setTheme, selectTheme } from './reducers/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

function Index() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(setTheme(colorScheme));
  }, []);

  return (
    <NavigationContainer theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Tabs' component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='TabOne'>
      <Tab.Screen
        name='TabOne'
        component={TabOne}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <FontAwesome name={'mobile-phone'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='TabTwo'
        component={TabTwo}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <FontAwesome name={'desktop'} color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
