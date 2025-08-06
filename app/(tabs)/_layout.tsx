import { BottomNavigation } from '@/components/navigation/BottomNavigation';
import { StyleSheet, View } from 'react-native';

export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <View>{children}</View>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
