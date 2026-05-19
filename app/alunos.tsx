import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Alunos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Alunos</Text>

      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.name}>João Silva</Text>
          <Text>Curso: Informática</Text>
          <Text>Turma: 3º Ano A</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.name}>Maria Souza</Text>
          <Text>Curso: Edificações</Text>
          <Text>Turma: 2º Ano B</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#f5f5f5",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});