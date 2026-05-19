import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Agenda() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>

      <View style={styles.card}>
        <Text>09:00 - João Silva</Text>
      </View>

      <View style={styles.card}>
        <Text>11:00 - Maria Souza</Text>
      </View>

      <View style={styles.card}>
        <Text>14:30 - Pedro Henrique</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },
});