import { Colors } from '@/constants/MaterialTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TOP_MONTHLY_BUDGET } from '@/mock/TopMonthlyBudget';
import { monthlyBudgetToManuItem } from '@/utils/KeyMapping';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { MenuGroup } from './MenuGroup';

export const BudgetCard = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const BALANCE_PERCENT = 60;

  return (
    <ThemedView
      style={[{ shadowColor: Colors[colorScheme].shadow }, styles.container]}
      colorRole="surfaceContainer"
    >
      {/* Budget Group */}
      <View>
        <ThemedText style={styles.boldText}>Monthly Budget</ThemedText>
        <View style={styles.budgetGroup}>
          <ThemedText style={styles.amountText}>PKR 40,500.80</ThemedText>
          <ThemedView
            style={styles.balanceIndicator}
            colorRole="primaryContainer"
          >
            <ThemedView
              style={[
                styles.balanceIndicator,
                { maxWidth: `${BALANCE_PERCENT}%` },
              ]}
              colorRole="onPrimaryContainer"
            />
          </ThemedView>
          <ThemedText>
            Great job! You have{' '}
            <ThemedText style={styles.boldText} colorRole="onPrimaryContainer">
              26,500.00
            </ThemedText>{' '}
            left.
          </ThemedText>
        </View>
      </View>
      {/* Monthly Group */}
      <View>
        <ThemedText style={styles.boldText}>Top Monthly Budgets</ThemedText>
        <View style={styles.monthlyGroup}>
          <MenuGroup items={monthlyBudgetToManuItem(TOP_MONTHLY_BUDGET)} />
        </View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 20,
    padding: 14,
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  budgetGroup: {
    display: 'flex',
    gap: 10,
  },
  monthlyGroup: {
    marginTop: 5,
  },
  amountText: {
    fontSize: 30,
    fontWeight: 400,
  },
  balanceIndicator: {
    height: 10,
    width: '100%',
    borderRadius: 10,
  },
  boldText: {
    fontWeight: 600,
  },
});
