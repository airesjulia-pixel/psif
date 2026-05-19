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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* topo */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Olá, Professor(a)</Text>
            <Text style={styles.subGreeting}>Bem-vindo(a) de volta!</Text>
          </View>

          <Text style={styles.menu}>☰</Text>
        </View>

        {/* card principal */}
        <View style={styles.mainCard}>
          <View>
            <Text style={styles.cardTitle}>Atendimentos de hoje</Text>
            <Text style={styles.bigNumber}>08</Text>
            <Text style={styles.compare}>+2 em relação a ontem</Text>
          </View>

          <Text style={styles.icon}>👥</Text>
        </View>

        {/* cards menores */}
        <View style={styles.row}>
          <View style={styles.smallCard}>
            <Text style={styles.smallTitle}>Alunos Acompanhados</Text>
            <Text style={styles.smallNumber}>124</Text>
          </View>

          <View style={styles.smallCard}>
            <Text style={styles.smallTitle}>Relatórios Pendentes</Text>
            <Text style={styles.smallNumber}>05</Text>
          </View>
        </View>

        {/* ações rápidas */}
        <Text style={styles.sectionTitle}>Ações rápidas</Text>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => router.push("/atendimentos")}
        >
          <Text style={styles.actionText}>📝 Novo Atendimento</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => router.push("/alunos")}
        >
          <Text style={styles.actionText}>👨‍🎓 Meus Alunos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => router.push("/relatorios")}
        >
          <Text style={styles.actionText}>📄 Relatórios</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* menu inferior */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>🏠{"\n"}Início</Text>
        <Text style={styles.navItem}>📅{"\n"}Atend.</Text>
        <Text style={styles.navItem}>👨‍🎓{"\n"}Alunos</Text>
        <Text style={styles.navItem}>📄{"\n"}Relat.</Text>
        <Text style={styles.navItem}>⋯{"\n"}Mais</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 25,
  },

  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
  },

  subGreeting: {
    color: "#888",
    marginTop: 4,
  },

  menu: {
    fontSize: 24,
  },

  mainCard: {
    backgroundColor: "#f4f4f4",
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  cardTitle: {
    color: "#666",
    fontSize: 14,
  },

  bigNumber: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#1f5d3d",
    marginVertical: 8,
  },

  compare: {
    color: "#888",
    fontSize: 12,
  },

  icon: {
    fontSize: 45,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 25,
  },

  smallCard: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 16,
  },

  smallTitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },

  smallNumber: {
    fontSize: 32,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 15,
  },

  actionCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  actionText: {
    fontSize: 15,
    color: "#333",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },

  navItem: {
    textAlign: "center",
    fontSize: 11,
    color: "#666",
  },
});