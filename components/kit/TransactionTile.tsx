import { Colors } from '@/constants/MaterialTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { currency } from '@/utils/CurrencyUtils';
import { formatDate } from '@/utils/DateUtils';
import { StyleSheet, Text, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { IconSymbol } from '../ui/IconSymbol';

type Transaction = {
  title: string;
  datetime: string;
  category: string;
  amount: number;
  account: string;
  type: string;
};

type TransactionTileProps = {
  data: Transaction;
};

export const TransactionTile = ({ data }: TransactionTileProps) => {
  const colorScheme = useColorScheme() ?? 'light';
  const isDebit = data.type === 'Debit';
  const textColor = {
    color: isDebit ? Colors[colorScheme].success : Colors[colorScheme].error,
  };
  const iconRotate = {
    transform: isDebit ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  return (
    <ThemedView style={styles.container} colorRole="surfaceContainer">
      <View style={styles.detailsGroup}>
        <View style={styles.iconBox}>
          <IconSymbol
            size={22}
            name="arrow.up.right"
            color={Colors[colorScheme].onSurface}
            style={[iconRotate, textColor]}
          />
        </View>
        <View>
          <ThemedText style={styles.titleText} colorRole="onSurface">
            {data.title}
          </ThemedText>
          <ThemedText colorRole="onSurfaceVariant">
            {formatDate(data.datetime)}
          </ThemedText>
        </View>
      </View>
      <View>
        <Text style={[styles.titleText, styles.textRight, textColor]}>
          {isDebit ? '+' : '-'}
          {currency.format(data.amount)}
        </Text>
        <ThemedText style={styles.textRight} colorRole="onSurfaceVariant">
          {data.category}
        </ThemedText>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingLeft: 4,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  detailsGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  iconBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  titleText: {
    fontWeight: 600,
  },
  textRight: {
    textAlign: 'right',
  },
});
