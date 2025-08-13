import { Colors } from '@/constants/MaterialTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import Icon from '../ui/Icon';

export const AccountCard = () => {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <View
      style={{
        backgroundColor: Colors[colorScheme].surfaceContainer,
        ...styles.container,
      }}
    >
      {/* Balance Group */}
      <View>
        <ThemedText>Your balance</ThemedText>
        <View style={styles.balanceGroup}>
          <ThemedText style={styles.balanceText}>PKR 40,500.80</ThemedText>
          <View
            style={{
              backgroundColor: Colors[colorScheme].primaryContainer,
              ...styles.visibilityButton,
            }}
          >
            <Icon
              name="Eye"
              style={styles.visibilityIcon}
              color={Colors[colorScheme].onPrimaryContainer}
            />
          </View>
        </View>
      </View>
      {/* Details Group */}
      <View style={styles.detailGroup}>
        <View>
          <ThemedText>Account Number</ThemedText>
          <ThemedText>****9934</ThemedText>
        </View>
        <View>
          <ThemedText>Valid Thru/CVV</ThemedText>
          <ThemedText>05/08 ***</ThemedText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: 180,
    width: 300,
    padding: 14,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  balanceGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  visibilityButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    width: 34,
    borderRadius: '50%',
  },
  visibilityIcon: {
    height: 20,
    width: 20,
  },
  balanceText: {
    fontSize: 30,
  },
});
