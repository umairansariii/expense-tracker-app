import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

type HeaderProps = {
  title: string;
  key: string;
  size?: number;
};

type TableProps = {
  headers: HeaderProps[];
  data: any[];
};

const Table = ({ headers, data }: TableProps) => {
  return (
    <View style={[styles.container]}>
      <ScrollView horizontal>
        <View style={styles.table}>
          {/* Headers */}
          <View style={styles.tableHeader}>
            {headers.map((header) => (
              <View
                key={header.key}
                style={[styles.tableCell, { width: header.size || 100 }]}
              >
                <Text>{header.title}</Text>
              </View>
            ))}
          </View>
          {/* Body */}
          <View style={styles.tableBody}>
            <ScrollView style={{ height: '100%' }}>
              {data.map((row, index) => (
                <View key={index} style={[styles.tableRow]}>
                  {headers.map((header) => (
                    <View
                      key={header.key}
                      style={[styles.tableCell, { width: header.size || 100 }]}
                    >
                      <Text>{row[header.key]}</Text>
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
