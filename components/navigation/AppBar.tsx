import { Colors } from '@/constants/MaterialTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import Icon from '../ui/Icon';

export const AppBar = () => {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={styles.headerContainer} colorRole="surface">
      <ThemedView style={styles.header} colorRole="surfaceContainer">
        {/* User Group */}
        <View style={styles.userGroup}>
          <TouchableOpacity onPress={() => console.log('Profile pressed')}>
            <View
              style={[
                styles.iconButton,
                { backgroundColor: Colors[colorScheme].primaryContainer },
              ]}
            >
              <Icon
                name="User"
                size={24}
                color={Colors[colorScheme].onPrimaryContainer}
              />
            </View>
          </TouchableOpacity>
          <View>
            <ThemedText type="label" colorRole="onSurfaceContainer">
              John Doe
            </ThemedText>
            <ThemedText type="small" colorRole="onSurfaceContainer">
              Last update 2 days ago
            </ThemedText>
          </View>
        </View>
        {/* Actions Group */}
        <View style={styles.actionGroup}>
          <TouchableOpacity
            onPress={() => console.log('Notification pressed')}
            style={styles.iconButton}
          >
            <Icon
              name="Bell"
              size={20}
              color={Colors[colorScheme].onSurfaceContainer}
            />
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 44,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    paddingHorizontal: 12,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  actionGroup: {
    flexDirection: 'row',
  },
  iconButton: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: 24,
  },
});
