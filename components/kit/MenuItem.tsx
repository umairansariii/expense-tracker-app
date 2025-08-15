import { Colors } from '@/constants/MaterialTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { icons } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import Icon from '../ui/Icon';

type IconName = keyof typeof icons;

export type MenuItemProps = {
  title: string;
  leadingIcon: IconName | null;
  trailingIcon: IconName | null;
  startText: string;
  endText: string;
};

export const MenuItem = ({
  data,
  isLast = false,
}: {
  data: MenuItemProps;
  isLast: boolean;
}) => {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <View
      style={[
        styles.container,
        isLast && styles.lastContainer,
        { borderColor: Colors[colorScheme].outline },
      ]}
    >
      {/* Title Group */}
      <View style={styles.inlineGroup}>
        {data.leadingIcon && (
          <Icon style={styles.icon} name={data.leadingIcon} />
        )}
        {data.startText && <ThemedText>{data.startText}</ThemedText>}
        <ThemedText>{data.title}</ThemedText>
      </View>
      {/* Action Group */}
      <View style={styles.inlineGroup}>
        {data.endText && <ThemedText>{data.endText}</ThemedText>}
        <Icon
          style={styles.icon}
          name={data.trailingIcon ? data.trailingIcon : 'ChevronRight'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingLeft: 4,
    borderBottomWidth: 1,
  },
  lastContainer: {
    borderBottomWidth: 0,
  },
  inlineGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
