import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';

export function HapticButton(
  props: React.ComponentProps<typeof PlatformPressable>
) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}
