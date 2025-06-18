import { HapticButton } from '@/components/ui/HapticButton';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { toggleColumnPinning } from '@/utils/TableUtils';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

export type TableSettingsModalProps = {
  open: boolean;
  onClose: () => void;
  table: any;
};

export const TableSettingsModal = ({
  open,
  onClose,
  table,
}: TableSettingsModalProps) => {
  // Get list of all columns from the table
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
      <View style={styles.container}>
        <FlatList
          data={columns}
          renderItem={({ item }) => {
            // Select the column by identifier
            const column = table
              .getAllLeafColumns()
              .find((column: any) => column.id === item.accessorKey);

            return (
              <View style={styles.optionRows}>
                <Text>{item.header}</Text>
                <View style={styles.buttonGroup}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    padding: 20,
    borderRadius: 10,
  },
  optionRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 4,
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
