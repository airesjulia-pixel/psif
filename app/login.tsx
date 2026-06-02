import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>

        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logoImage}
        />

        <Text style={styles.logo}>PSIF</Text>

        <Text style={styles.subtitle}>
          Plataforma de Suporte Psicopedagógico
        </Text>

        <TextInput
          placeholder="Seu E-mail"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          placeholder="********"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        <View style={styles.optionsRow}>
          <Text style={styles.remember}>☐ Lembrar-me</Text>

          <TouchableOpacity
            onPress={() => router.push("/recuperarSenha")}
          >
            <Text style={styles.forgot}>
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(mobile)/dashboard")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Acesso exclusivo para psicopedagogos e professores do IFPB
        </Text>

        <TouchableOpacity>
          <Text style={styles.register}>
            Não possui conta? Cadastre-se
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#efefef",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  logoImage: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginBottom: 12,
    resizeMode: "contain",
  },

  logo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222",
    marginBottom: 5,
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    fontSize: 13,
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
    backgroundColor: "#fafafa",
  },

  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  remember: {
    color: "#777",
    fontSize: 12,
  },

  forgot: {
    color: "#1f5d3d",
    fontWeight: "bold",
    fontSize: 12,
  },

  button: {
    backgroundColor: "#d84b4b",
    padding: 15,
    borderRadius: 12,
    marginBottom: 18,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  footer: {
    textAlign: "center",
    fontSize: 11,
    color: "#999",
    marginBottom: 15,
  },

  register: {
    textAlign: "center",
    color: "#1f5d3d",
    fontWeight: "bold",
    fontSize: 13,
  },
});