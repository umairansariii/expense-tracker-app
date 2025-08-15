import { View } from 'react-native';
import { MenuItem, MenuItemProps } from './MenuItem';

export const MenuGroup = ({ items }: { items: MenuItemProps[] }) => {
  return (
    <View>
      {items.map((item: MenuItemProps, index) => (
        <MenuItem data={item} isLast={index === items.length - 1} key={index} />
      ))}
    </View>
  );
};
