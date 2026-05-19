import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.card}>
        <Text>Alunos acompanhados: 124</Text>
      </View>

      <View style={styles.card}>
        <Text>Atendimentos hoje: 08</Text>
      </View>

      <View style={styles.card}>
        <Text>Relatórios pendentes: 05</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/alunos")}
      >
        <Text style={styles.buttonText}>Ver alunos</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#1f5d3d",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});