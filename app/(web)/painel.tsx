import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PainelWeb() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel da Psicopedagoga</Text>

      <View style={styles.card}>
        <Text>Total de alunos: 124</Text>
      </View>

      <View style={styles.card}>
        <Text>Relatórios pendentes: 05</Text>
      </View>

      <View style={styles.card}>
        <Text>Atendimentos hoje: 08</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 12,
    marginBottom: 20,
  },
});