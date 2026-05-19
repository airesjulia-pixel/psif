import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function NovoRelatorio() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Relatório</Text>

      <TextInput placeholder="Aluno" style={styles.input} />
      <TextInput
        placeholder="Descreva observações"
        multiline
        numberOfLines={5}
        style={styles.textArea}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar Relatório</Text>
      </TouchableOpacity>
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

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
  },

  textArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 14,
    borderRadius: 10,
    height: 150,
    textAlignVertical: "top",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#1f5d3d",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});