import { BudgetCard } from '@/components/kit/BudgetCard';
import { TransactionFeed } from '@/components/kit/TransactionFeed';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView
      style={[StyleSheet.absoluteFillObject, styles.screen]}
      colorRole="surface"
    >
      <BudgetCard />
      {/* <AccountCarousel /> */}
      <TransactionFeed />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 106,
  },
});
