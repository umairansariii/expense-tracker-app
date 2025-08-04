import { Colors } from '@/constants/Colors';
import { currency } from '@/utils/CurrencyUtils';
import { formatDate } from '@/utils/DateUtils';
import { StyleSheet, Text, View } from 'react-native';
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
  const isDebit = data.type === 'Debit';
  const textColor = {
    color: isDebit ? Colors.green.text : Colors.red.text,
  };
  const iconRotate = {
    transform: isDebit ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsGroup}>
        <View style={styles.iconBox}>
          <IconSymbol
            size={22}
            name="arrow.up.right"
            color={Colors.light.icon}
            style={[iconRotate, textColor]}
          />
        </View>
        <View>
          <Text style={styles.titleText}>{data.title}</Text>
          <Text style={styles.fadedText}>{formatDate(data.datetime)}</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.titleText, styles.textRight, textColor]}>
          {isDebit ? '+' : '-'}
          {currency.format(data.amount)}
        </Text>
        <Text style={[styles.fadedText, styles.textRight]}>
          {data.category}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
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
  fadedText: {
    color: 'gray',
  },
  textRight: {
    textAlign: 'right',
  },
});
