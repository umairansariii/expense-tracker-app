import { HapticTab } from '@/components/HapticTab';
import { BottomTabs } from '@/constants/BottomTabs';
import { Colors } from '@/constants/MaterialTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import Icon from '../ui/Icon';

export const BottomNavigation = () => {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
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
    height: 70,
    borderTopWidth: 0,
    paddingTop: 2,
  },
  actionButton: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    top: -32,
    left: '50%',
    transform: 'translate(-50%)',
    borderRadius: '50%',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
