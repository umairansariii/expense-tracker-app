import { Colors } from '@/constants/Colors';
import {
  ColumnPinningState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { HapticButton } from './HapticButton';
import { IconSymbol } from './IconSymbol';

type TableProps = {
  columns: any[];
  data: any[];
};

type TableSettingsModalProps = {
  open: boolean;
  onClose: () => void;
  table: any;
};

function toggleColumnPinning(column: any) {
  const pinState = column.getIsPinned();

  if (!pinState) {
    column.pin('right');
  } else if (pinState === 'right') {
    column.pin('left');
  } else {
    column.pin(false);
  }
}

const TableSettingsModal = ({
  open,
  onClose,
  table,
}: TableSettingsModalProps) => {
  const columns = table.getAllLeafColumns().map((column: any) => ({
    header: column.columnDef.header,
    accessorKey: column.id,
  }));

  return (
    <Modal
      isVisible={open}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
    >
      <View style={styles.settingsModal}>
        <FlatList
          data={columns}
          renderItem={({ item }) => {
            const column = table
              .getAllLeafColumns()
              .find((column: any) => column.id === item.accessorKey);

            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 2,
                }}
              >
                <Text>{item.header}</Text>
                <View style={{ flexDirection: 'row', gap: 4 }}>
                  <HapticButton
                    onPress={column.getToggleVisibilityHandler()}
                    style={styles.iconButton}
                  >
                    {column.getIsVisible() ? (
                      <IconSymbol
                        size={20}
                        name="eye"
                        color={Colors.light.icon}
                      />
                    ) : (
                      <IconSymbol
                        size={20}
                        name="eye.slash"
                        color={Colors.light.icon}
                      />
                    )}
                    <Text>{column.getIsVisible() ? 'Hide' : 'Show'}</Text>
                  </HapticButton>
                  <HapticButton
                    onPress={() => toggleColumnPinning(column)}
                    style={styles.iconButton}
                  >
                    {!column.getIsPinned() ? (
                      <IconSymbol
                        size={20}
                        name="arrow.right.to.line"
                        color={Colors.light.icon}
                      />
                    ) : column.getIsPinned() === 'right' ? (
                      <IconSymbol
                        size={20}
                        name="arrow.left.to.line"
                        color={Colors.light.icon}
                      />
                    ) : (
                      <IconSymbol
                        size={20}
                        name="xmark"
                        color={Colors.light.icon}
                      />
                    )}
                    <Text>
                      {!column.getIsPinned()
                        ? 'Pin Right'
                        : column.getIsPinned() === 'right'
                        ? 'Pin Left'
                        : 'Unpin'}
                    </Text>
                  </HapticButton>
                </View>
              </View>
            );
          }}
        />
      </View>
    </Modal>
  );
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
  settingsModal: {
    backgroundColor: Colors.light.background,
    padding: 20,
    borderRadius: 10,
  },
  iconButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    gap: 4,
  },
});

export default Table;
