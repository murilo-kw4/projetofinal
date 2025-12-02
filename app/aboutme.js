import profile from "../assets/foto.jpeg";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";

// Paleta de Cores (Reutilizada)
const COLORS = {
  BACKGROUND: "#1A1A1A", 
  TEXT_PRIMARY: "#FFFFFF", 
  ACCENT_BRIGHT: "#FF7F00", // Laranja Vibrante
  SURFACE: "#282828", 
  TEXT_SECONDARY: "#C7C7CC", 
  ACCENT_DARK: "#D46900",
};

// Dados do Criador
const creatorData = {
  name: "Murilo Borges",
  role: "Desenvolvedor & Entusiasta Fitness",
  bio: [
    "Bem-vindo! Eu sou Murilo Borges, o criador deste aplicativo. Minha paixão por desenvolvimento e fitness me levou a construir uma ferramenta que fosse não apenas funcional, mas genuinamente útil para quem busca melhorar sua rotina de treino.",
    "Acredito que o conhecimento é a chave para o sucesso na academia. Por isso, o foco deste app é simplificar informações complexas, tornando-as acessíveis a todos, desde iniciantes até atletas intermediários.",
    "Espero que este aplicativo seja um catalisador na sua jornada fitness. Juntos, vamos alcançar novos níveis de força e performance!",
  ],
  contact: "contato.muriloborges@email.com",
  socialLink: "https://www.linkedin.com/in/muriloborges", // Exemplo de link
  profilePicUrl: "https://via.placeholder.com/150/FF7F00/FFFFFF?text=MB", // Foto profissional/logo
};

// Componente para um link social/contato
const SocialLink = ({ label, onPress, icon }) => (
  <TouchableOpacity style={styles.socialButton} onPress={onPress}>
    <Text style={styles.socialButtonText}>{icon} {label}</Text>
  </TouchableOpacity>
);

export default function AboutMeCreator() {
  
  // Função de simulação para abrir um link externo
  const handleOpenLink = (url) => {
    console.log(`Abrir link externo: ${url}`);
    // Na prática, você usaria o Linking API do React Native aqui
    // Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* CABEÇALHO DO CRIADOR */}
        <View style={styles.header}>
            <Image 
                source={{ uri: creatorData.profilePicUrl }} 
                style={styles.profileImage} 
            />
            <Text style={styles.creatorName}>{creatorData.name}</Text>
            <Text style={styles.creatorRole}>{creatorData.role}</Text>
        </View>

        {/* --- BIOGRAFIA --- */}
        <Text style={styles.sectionTitle}>Minha História</Text>
        <View style={styles.bioContainer}>
          {creatorData.bio.map((paragraph, index) => (
            <Text key={index} style={styles.bioText}>
              {paragraph}
            </Text>
          ))}
        </View>
        
        {/* --- DADOS TÉCNICOS/PROJETO --- */}
        <Text style={styles.sectionTitle}>Filosofia do App</Text>
        <View style={styles.techBox}>
            <Text style={styles.techText}>
                Este aplicativo foi desenvolvido com foco em **acessibilidade e informação prática**. Usamos a tecnologia para desmistificar o treino.
            </Text>
            <Text style={styles.techVersion}>
                Versão 1.0.0 (Build 2025)
            </Text>
        </View>

        {/* --- CONTATO E REDES --- */}
        <Text style={styles.sectionTitle}>Conecte-se</Text>
        <SocialLink 
            label="LinkedIn Profissional" 
            icon="🔗"
            onPress={() => handleOpenLink(creatorData.socialLink)}
        />
        <SocialLink 
            label={creatorData.contact} 
            icon="📧"
            onPress={() => handleOpenLink(`mailto:${creatorData.contact}`)}
        />
        

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  
  // --- CABEÇALHO/CRIADOR ---
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: COLORS.ACCENT_BRIGHT, // Destaque vibrante
    marginBottom: 15,
  },
  creatorName: {
    fontSize: 28,
    color: COLORS.ACCENT_BRIGHT, // Nome em destaque vibrante
    fontWeight: "800",
    marginBottom: 5,
  },
  creatorRole: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: '500',
  },

  // --- BIOGRAFIA ---
  sectionTitle: {
    fontSize: 20,
    color: COLORS.TEXT_PRIMARY,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 15,
  },
  bioContainer: {
    backgroundColor: COLORS.SURFACE,
    borderRadius: 12,
    padding: 15,
  },
  bioText: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'justify',
  },

  // --- TECNOLOGIA / VERSÃO ---
  techBox: {
    backgroundColor: COLORS.SURFACE,
    borderRadius: 12,
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.ACCENT_BRIGHT,
  },
  techText: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    marginBottom: 8,
  },
  techVersion: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    textAlign: 'right',
  },

  // --- LINKS SOCIAIS ---
  socialButton: {
    backgroundColor: COLORS.SURFACE,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.ACCENT_DARK, // Borda sutil para dar profundidade
  },
  socialButtonText: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 16,
    fontWeight: '600',
  },
});