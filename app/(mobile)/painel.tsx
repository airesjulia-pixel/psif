// =========================
// app/(web)/painel.tsx
// =========================

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Painel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel da Psicopedagoga</Text>

      <View style={styles.card}>
        <Text>Total de alunos: 124</Text>
      </View>

      <View style={styles.card}>
        <Text>Relatórios pendentes: 05</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 12,
    marginBottom: 20,
  },
});