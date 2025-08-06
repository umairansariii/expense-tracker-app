import { icons } from 'lucide-react-native';

type IconName = keyof typeof icons;

type BottomTabsType = {
  route: string;
  title: string;
  iconName: IconName;
  iconSize: number;
  actionButton?: boolean;
};

export const BottomTabs: BottomTabsType[] = [
  {
    route: 'index',
    title: 'Home',
    iconName: 'House',
    iconSize: 26,
  },
  {
    route: 'insight',
    title: 'Insight',
    iconName: 'TrendingUp',
    iconSize: 26,
  },
  {
    route: 'null_route',
    title: 'null_route',
    iconName: 'Plus',
    iconSize: 32,
    actionButton: true,
  },
  {
    route: 'budget',
    title: 'Budget',
    iconName: 'ChartPie',
    iconSize: 26,
  },
  {
    route: 'setting',
    title: 'Settings',
    iconName: 'Settings',
    iconSize: 26,
  },
];
