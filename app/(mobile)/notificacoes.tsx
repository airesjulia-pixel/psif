import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Notificacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>

      <View style={styles.card}>
        <Text>🔔 Novo relatório disponível</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#f5f5f5",
    padding: 18,
    borderRadius: 10,
  },
});