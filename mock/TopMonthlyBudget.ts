import { icons } from 'lucide-react-native';

type IconName = keyof typeof icons;

type TOP_MONTHLY_BUDGET_TYPE = {
  title: string;
  icon: IconName;
  amount: number;
};

export const TOP_MONTHLY_BUDGET: TOP_MONTHLY_BUDGET_TYPE[] = [
  {
    title: 'Financial',
    icon: 'Landmark',
    amount: 12850,
  },
  {
    title: 'Bills & Utilities',
    icon: 'Luggage',
    amount: 8920,
  },
];
