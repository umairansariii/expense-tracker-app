import { Colors } from '@/constants/Colors';
import {
  ColumnPinningState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TableSettingsModal } from '../modal/TableSettingsModal';
import { HapticButton } from './HapticButton';
import { IconSymbol } from './IconSymbol';

type TableProps = {
  columns: any[];
  data: any[];
};

const Table = ({ columns, data }: TableProps) => {
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>({
    left: [],
    right: [],
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility,
      columnPinning,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onColumnPinningChange: setColumnPinning,
  });

  const openSettingsModal = () => setSettingsOpen(true);
  const onCloseSettingsModal = () => setSettingsOpen(false);

  return (
    <View style={[styles.container]}>
      <TableSettingsModal
        open={settingsOpen}
        onClose={onCloseSettingsModal}
        table={table}
      />
      <View style={styles.tableOptions}>
        <HapticButton onPress={openSettingsModal}>
          <IconSymbol
            size={28}
            name="gearshape.fill"
            color={Colors.light.icon}
          />
        </HapticButton>
      </View>
      <ScrollView horizontal>
        <View style={styles.table}>
          {/* Headers */}
          {table.getHeaderGroups().map((headerGroup) => (
            <View style={styles.tableHeader} key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <View
                  key={header.id}
                  style={[styles.tableCell, { width: header.getSize() }]}
                >
                  <Text>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Text>
                </View>
              ))}
            </View>
          ))}
          {/* Body */}
          <View style={styles.tableBody}>
            <ScrollView style={{ height: '100%' }}>
              {table.getRowModel().rows.map((row) => (
                <View key={row.id} style={styles.tableRow}>
                  {row.getVisibleCells().map((cell) => (
                    <View
                      key={cell.id}
                      style={[
                        styles.tableCell,
                        { width: cell.column.getSize() },
                      ]}
                    >
                      <Text>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
  },
  tableOptions: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingVertical: 4,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableBody: {
    height: '100%',
    maxHeight: 360,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableCell: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

export default Table;
