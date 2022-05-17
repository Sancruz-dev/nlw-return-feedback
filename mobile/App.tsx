import 'react-native-gesture-handler'
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { theme } from './src/theme';
import Widget  from './src/components/Widget';

export default function App() {

  return (
    <View style={{ flex: 1,  backgroundColor: theme.colors.background }}>

      <StatusBar 
        style='light'
        backgroundColor='transparent'
        translucent
      />

      <Widget/>
    </View>
  );
}
