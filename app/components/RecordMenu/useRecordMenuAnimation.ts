import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

export function useRecordMenuAnimation() {
  const isOpen = useSharedValue(false);

  const mainDelay = 300;
  const config: WithTimingConfig = {
    duration: 250,
    easing: Easing.ease,
  };

  const menuStyle = useAnimatedStyle(() => ({
    width: withDelay(mainDelay, withTiming(isOpen.value ? 200 : 30, config)),
    height: 30,
    borderRadius: 500,
    backgroundColor: 'darkgray',
    position: 'relative',
    justifyContent: 'center',
    zIndex: 100,
  }));

  const contentStyle = useAnimatedStyle(() => ({
    width: withDelay(mainDelay, withTiming(isOpen.value ? 200 : 30, config)),
    position: 'absolute',
    top: withTiming(isOpen.value ? 40 : 0, config),
    left: 0,
    minHeight: withDelay(
      mainDelay,
      withTiming(isOpen.value ? 100 : 30, config)
    ),
    borderRadius: 14,
    backgroundColor: 'green',
    zIndex: 1,
    padding: withDelay(
      mainDelay - 100,
      withTiming(isOpen.value ? 10 : 0, config)
    ),
    overflow: 'hidden',
  }));

  const toggleMenu = () => (isOpen.value = !isOpen.value);

  return {
    menuStyle,
    contentStyle,
    toggleMenu,
  };
}
