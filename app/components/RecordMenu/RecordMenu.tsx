import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { useRecordMenuAnimation } from './useRecordMenuAnimation';

export default function RecordMenu() {
  const { contentStyle, menuStyle, toggleMenu } = useRecordMenuAnimation();

  return (
    <Animated.View style={menuStyle}>
      <Pressable
        style={{
          zIndex: 100,
          paddingLeft: 10,
          width: 16,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 500,
        }}
        onPress={toggleMenu}>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 500,
            backgroundColor: 'red',
          }}></View>
      </Pressable>

      <Animated.View style={contentStyle}>
        <Text style={{ overflow: 'hidden', width: '100%' }} numberOfLines={1}>
          Testfile
        </Text>
      </Animated.View>
    </Animated.View>
  );
}
