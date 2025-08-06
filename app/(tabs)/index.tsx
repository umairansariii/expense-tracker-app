import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={StyleSheet.absoluteFillObject} colorRole="surface">
      <Text>Home Screen</Text>
    </ThemedView>
  );
}
