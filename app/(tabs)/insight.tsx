import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text } from 'react-native';

export default function InsightScreen() {
  return (
    <ThemedView style={StyleSheet.absoluteFillObject} name="surface">
      <Text>Insight Screen</Text>
    </ThemedView>
  );
}
