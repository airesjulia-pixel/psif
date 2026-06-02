import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function CadastroAluno() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Aluno</Text>

      <TextInput placeholder="Nome do aluno" style={styles.input} />
      <TextInput placeholder="Curso" style={styles.input} />
      <TextInput placeholder="Turma" style={styles.input} />
      <TextInput placeholder="Matrícula" style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#1f5d3d",
    padding: 16,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});