import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Table from '@/components/ui/Table';
import { createColumnHelper } from '@tanstack/react-table';

type Transaction = {
  date: string;
  particular: string;
  debit: number;
  credit: number;
  balance: number;
};

const columnHelper = createColumnHelper<Transaction>();

export default function HomeScreen() {
  const columns = [
    columnHelper.accessor('date', {
      header: 'Date',
      size: 100,
    }),
    columnHelper.accessor('particular', {
      header: 'Particular',
      size: 200,
    }),
    columnHelper.accessor('debit', {
      header: 'Debit',
      size: 100,
    }),
    columnHelper.accessor('credit', {
      header: 'Credit',
      size: 100,
    }),
    columnHelper.accessor('balance', {
      header: 'Balance',
      size: 100,
    }),
  ];

  const data: Transaction[] = [
    {
      date: '2023-10-01',
      particular: 'Opening Balance',
      debit: 0,
      credit: 0,
      balance: 1000,
    },
    {
      date: '2023-10-02',
      particular: 'Deposit',
      debit: 500,
      credit: 0,
      balance: 1500,
    },
    {
      date: '2023-10-03',
      particular: 'Withdrawal',
      debit: 0,
      credit: 200,
      balance: 1300,
    },
    {
      date: '2023-10-04',
      particular: 'Transfer',
      debit: 300,
      credit: 0,
      balance: 1000,
    },
    {
      date: '2023-10-05',
      particular: 'Interest',
      debit: 0,
      credit: 50,
      balance: 1050,
    },
    {
      date: '2023-10-06',
      particular: 'Fee',
      debit: 20,
      credit: 0,
      balance: 1030,
    },
    {
      date: '2023-10-07',
      particular: 'Refund',
      debit: 0,
      credit: 100,
      balance: 1130,
    },
    {
      date: '2023-10-08',
      particular: 'Adjustment',
      debit: 30,
      credit: 0,
      balance: 1100,
    },
    {
      date: '2023-10-09',
      particular: 'Bonus',
      debit: 0,
      credit: 200,
      balance: 1300,
    },
    {
      date: '2023-10-10',
      particular: 'Chargeback',
      debit: 100,
      credit: 0,
      balance: 1200,
    },
    {
      date: '2023-10-11',
      particular: 'Payment',
      debit: 0,
      credit: 400,
      balance: 1600,
    },
    {
      date: '2023-10-12',
      particular: 'Refund',
      debit: 50,
      credit: 0,
      balance: 1550,
    },
    {
      date: '2023-10-13',
      particular: 'Deposit',
      debit: 600,
      credit: 0,
      balance: 2150,
    },
    {
      date: '2023-10-14',
      particular: 'Withdrawal',
      debit: 0,
      credit: 300,
      balance: 1850,
    },
    {
      date: '2023-10-15',
      particular: 'Transfer',
      debit: 200,
      credit: 0,
      balance: 1650,
    },
    {
      date: '2023-10-16',
      particular: 'Interest',
      debit: 0,
      credit: 70,
      balance: 1720,
    },
    {
      date: '2023-10-17',
      particular: 'Fee',
      debit: 40,
      credit: 0,
      balance: 1680,
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{' '}
          to see changes. Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">
            npm run reset-project
          </ThemedText>{' '}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{' '}
          directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
        <Table columns={columns} data={data} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
