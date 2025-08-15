import { AccountCarousel } from '@/components/kit/AccountCarousel';
import { TransactionFeed } from '@/components/kit/TransactionFeed';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={StyleSheet.absoluteFillObject} colorRole="surface">
      <Text>Home Screen</Text>
      <AccountCarousel />
      <TransactionFeed />
    </ThemedView>
  );
}
