import { StyleSheet, View } from 'react-native';
import { AccountCard } from './AccountCard';

export const AccountCarousel = () => {
  return (
    <View style={styles.container}>
      <AccountCard />
      <AccountCard />
      <AccountCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflowX: 'auto',
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
