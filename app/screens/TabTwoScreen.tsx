import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import RecordMenu from '../components/RecordMenu/RecordMenu';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [text, setText] = React.useState('Hello');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>

      <View
        style={{
          width: '100%',
          padding: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>Test</Text>
        <RecordMenu />
        {/* <TextInput
          style={{ width: '100%', height: '100%' }}
          multiline
          value={text}
          onChange={(e) => setText(e.nativeEvent.text)}
        /> */}
      </View>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
