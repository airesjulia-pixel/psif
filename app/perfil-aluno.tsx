import { View, Text, StyleSheet } from "react-native";

export default function PerfilAluno() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Aluno</Text>

      <View style={styles.card}>
        <Text>Nome: João Silva</Text>
        <Text>Curso: Informática</Text>
        <Text>Turma: 3º Ano A</Text>
      </View>

      <View style={styles.card}>
        <Text>Último relatório:</Text>
        <Text>Aluno apresentou melhora no rendimento.</Text>
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
    color: "#1f5d3d",
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
});