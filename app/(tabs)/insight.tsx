import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text } from 'react-native';

export default function InsightScreen() {
  return (
    <ThemedView style={StyleSheet.absoluteFillObject} colorRole="surface">
      <Text>Insight Screen</Text>
    </ThemedView>
  );
}
