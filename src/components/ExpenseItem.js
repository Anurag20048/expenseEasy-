import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants/theme';
import { formatAmount, formatDate } from '../utils/format';

export default function ExpenseItem({ item, onPress, onDelete }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.left}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.meta}>
          {item.category} • {formatDate(item.date)}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.amount}>{formatAmount(item.amount)}</Text>
        <TouchableOpacity onPress={onDelete} hitSlop={10}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.card, borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: colors.border },
  left: { flex: 1, paddingRight: 8 }, right: { alignItems: 'flex-end' },
  title: { fontSize: 16, fontWeight: '600', color: colors.text }, meta: { fontSize: 12, color: colors.muted, marginTop: 4 },
  amount: { fontSize: 16, fontWeight: '700', color: colors.primary }, delete: { fontSize: 12, color: colors.danger, marginTop: 6 },
});
