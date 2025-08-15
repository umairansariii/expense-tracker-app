import { MenuItemProps } from '@/components/kit/MenuItem';
import { icons } from 'lucide-react-native';
import { currency } from './CurrencyUtils';

type IconName = keyof typeof icons;

function monthlyBudgetToManuItem(
  data: {
    title: string;
    icon: IconName;
    amount: number;
  }[]
): MenuItemProps[] {
  return data.map((item) => {
    return {
      title: item.title,
      leadingIcon: item.icon,
      trailingIcon: null,
      startText: '',
      endText: currency.format(item.amount),
    };
  });
}

export { monthlyBudgetToManuItem };
