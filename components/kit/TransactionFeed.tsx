import { TRANSACTION_DATA } from '@/mock/TransactionData';
import { StyleSheet, View } from 'react-native';
import { TransactionTile } from './TransactionTile';

export const TransactionFeed = () => {
  return (
    <View style={styles.container}>
      {TRANSACTION_DATA.map((data) => (
        <TransactionTile data={data} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 20,
  },
});
