import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Alunos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alunos</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/perfil-aluno")}
      >
        <Text>João Silva - Informática</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text>Maria Souza - Edificações</Text>
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
});