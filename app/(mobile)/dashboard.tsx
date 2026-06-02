
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { router } from "expo-router";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Dashboard</Text>

        <View style={styles.card}>
          <Text>Atendimentos hoje: 08</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(mobile)/alunos")}
        >
          <Text style={styles.buttonText}>Meus Alunos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(mobile)/relatorios")}
        >
          <Text style={styles.buttonText}>Relatórios</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(mobile)/notificacoes")}
        >
          <Text style={styles.buttonText}>Notificações</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#1f5d3d",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});