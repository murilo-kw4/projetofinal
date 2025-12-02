import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet, Text, View, platform } from 'react-native';
import foto from "../assets/foto.jpeg";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre mim</Text>
      <View style={styles.main}>
        <View>
          <Image source={foto} style={styles.foto} />
        </View>
        <View>
          <Text style={styles.subtitle}>Detalhes estudantis</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2e9f0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flexDirection: Platform.OS === "web" ? "row" : "column",  
  }
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#888'
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  }
});
