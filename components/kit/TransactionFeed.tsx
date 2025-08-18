import { TRANSACTION_DATA } from '@/mock/TransactionData';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { TransactionTile } from './TransactionTile';

export const TransactionFeed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerGroup}>
        <ThemedText style={styles.boldText}>Recent Transactions</ThemedText>
        <ThemedText colorRole="primary">See all</ThemedText>
      </View>
      {TRANSACTION_DATA.map((data, index) => (
        <TransactionTile data={data} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 8,
    padding: 16,
  },
  headerGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  boldText: {
    fontWeight: 600,
  },
});
