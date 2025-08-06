import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text } from 'react-native';

export default function BudgetScreen() {
  return (
    <ThemedView style={StyleSheet.absoluteFillObject} colorRole="surface">
      <Text>Budget Screen</Text>
    </ThemedView>
  );
}
