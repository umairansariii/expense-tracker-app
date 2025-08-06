import { Colors } from '@/constants/MaterialTheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { View, type ViewProps } from 'react-native';

// Overrides default theme color
export type ThemedViewProps = ViewProps & {
  colorRole?: keyof typeof Colors.light & keyof typeof Colors.dark;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  colorRole,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorRole ?? 'background'
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
