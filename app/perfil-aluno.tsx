
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function PerfilAluno() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Perfil do Aluno</Text>

      <View style={styles.card}>
        <Text style={styles.name}>João Silva</Text>
        <Text>Curso: Informática</Text>
        <Text>Turma: 3º Ano A</Text>
        <Text>Matrícula: 20231234</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Observações</Text>
        <Text>
          Aluno apresenta dificuldade de concentração e organização de tarefas.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Último Atendimento</Text>
        <Text>18/05/2026</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontWeight: "bold", marginBottom: 8 },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },
});