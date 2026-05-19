import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Notificacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>

      <View style={styles.card}>
        <Text>🔔 Relatório pendente de João Silva</Text>
      </View>

      <View style={styles.card}>
        <Text>🔔 Atendimento agendado para 14h</Text>
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