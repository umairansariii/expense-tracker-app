import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text } from 'react-native';

export default function BudgetScreen() {
  return (
    <ThemedView style={StyleSheet.absoluteFillObject} name="surface">
      <Text>Budget Screen</Text>
    </ThemedView>
  );
}
