import { HapticTab } from '@/components/HapticTab';
import { BottomTabs } from '@/constants/BottomTabs';
import { Colors } from '@/constants/MaterialTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import Icon from '../ui/Icon';
import { AppBar } from './AppBar';

export const BottomNavigation = () => {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        header: () => <AppBar />,
        tabBarBackground: undefined,
        tabBarStyle: Platform.select({
          default: {
            backgroundColor: Colors[colorScheme].surfaceContainer,
            ...styles.tabBar,
          },
        }),
        tabBarButton: HapticTab,
        tabBarActiveTintColor: Colors[colorScheme].primary,
        tabBarInactiveTintColor: Colors[colorScheme].onSurface,
        tabBarLabelStyle: {
          ...styles.tabBarLabel,
        },
      }}
    >
      {BottomTabs.map((tab) => {
        // Action tab button
        if (tab.actionButton) {
          return (
            <Tabs.Screen
              key={tab.route}
              name={tab.route}
              options={{
                tabBarButton: (props) => (
                  <HapticTab
                    {...props}
                    onPress={() => {
                      console.log('Action button clicked!');
                    }}
                    style={{
                      backgroundColor: Colors[colorScheme].primary,
                      ...styles.actionButton,
                    }}
                  >
                    <Icon
                      name={tab.iconName}
                      size={tab.iconSize}
                      color={Colors[colorScheme].onPrimary}
                    />
                  </HapticTab>
                ),
              }}
            />
          );
        }

        // Native tab button
        return (
          <Tabs.Screen
            key={tab.route}
            name={tab.route}
            options={{
              title: tab.title,
              tabBarIcon: ({ color }) => (
                <Icon name={tab.iconName} size={tab.iconSize} color={color} />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
  },
  actionButton: {
    height: 42,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 10,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: 'bold',
  },
});
