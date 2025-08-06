import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text } from 'react-native';

export default function SettingScreen() {
  return (
    <ThemedView style={StyleSheet.absoluteFillObject} name="surface">
      <Text>Setting Screen</Text>
    </ThemedView>
  );
}
