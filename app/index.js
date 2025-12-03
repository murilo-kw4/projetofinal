import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

// Paleta de Cores Vivas e Energéticas
const COLORS = {
  BACKGROUND: "#1A1A1A", 
  TEXT_PRIMARY: "#FFFFFF", 
  ACCENT_BRIGHT: "#FF7F00", // Laranja Vibrante
  ACCENT_DARK: "#D46900", 
  SURFACE: "#282828", 
  TEXT_SECONDARY: "#C7C7CC", 
};

export default function InviteScreen() {
    
    const handleEntry = () => {
        // Função que será chamada ao tocar no bloco principal (ação de entrar)
        console.log("Usuário clicou para entrar no site/app!");
    };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* TÍTULO PRINCIPAL */}
        <Text style={styles.appTitle}>FitLife</Text>
        
        {/* TEXTO DE CONVITE SECUNDÁRIO */}
        <Text style={styles.tagline}>Seu progresso começa aqui! 🚀</Text>
        
        {/* --- SEÇÃO PRINCIPAL DE CONVITE (CTA Clicável) --- */}
        <TouchableOpacity 
            style={styles.invitationBlock}
            onPress={handleEntry}
            activeOpacity={0.8}
        >
            {/* FRASE ATUALIZADA AQUI */}
            <Text style={styles.headline}>
                Encontre o treino ideal e alcance seus 
                <Text style={styles.accentText}> objetivos</Text>.
            </Text>
            
            <Text style={styles.ctaMessage}>
                Bem-vindo ao seu espaço de evolução. Aqui você encontra treinos, informações e as melhores academias da cidade para começar ou aprimorar sua jornada no mundo fitness.
            </Text>

            <View style={styles.horizontalRule} />

           
        </TouchableOpacity>

        {/* --- DESTAQUES/BENEFÍCIOS --- */}
        <View style={styles.highlightSection}>
            <Text style={styles.sectionHeader}>O que você vai encontrar:</Text>
            
            <View style={styles.benefitCard}>
                <Text style={styles.cardText}>✅ Diferentes tipo de treinos</Text>
            </View>

            <View style={styles.benefitCard}>
                <Text style={styles.cardText}>📚 As melhores academias</Text>
            </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-around', 
    paddingVertical: 50,
  },
  
  // --- TÍTULO PRINCIPAL ---
  appTitle: {
    fontSize: 48,
    color: COLORS.ACCENT_BRIGHT, 
    fontWeight: "900", 
    textAlign: "left", 
    marginBottom: 5, 
  },
  
  // --- TAGLINE ---
  tagline: {
    fontSize: 20,
    color: COLORS.TEXT_PRIMARY, 
    fontWeight: "500",
    textAlign: "left",
    marginBottom: 40, 
  },

  // --- BLOCO DE CONVITE PRINCIPAL ---
  invitationBlock: {
    backgroundColor: COLORS.SURFACE, 
    padding: 30,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 50,
    borderWidth: 2, 
    borderColor: COLORS.ACCENT_BRIGHT, 
    
    elevation: 10, 
    shadowColor: COLORS.ACCENT_BRIGHT,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  headline: {
    fontSize: 28, // Mantido 28, pois a frase é curta
    color: COLORS.TEXT_PRIMARY,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 15,
    // Removido lineHeight, pois não é mais necessário para a frase curta
  },
  accentText: {
    color: COLORS.ACCENT_BRIGHT,
  },
  ctaMessage: {
    fontSize: 18,
    color: COLORS.TEXT_SECONDARY,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: '500',
  },
  horizontalRule: {
    height: 1,
    width: '80%',
    backgroundColor: COLORS.TEXT_SECONDARY,
    opacity: 0.3,
    marginVertical: 15,
  },
  smallText: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    textAlign: "center",
  },

  // --- DESTAQUES/BENEFÍCIOS (Cards) ---
  highlightSection: {
    marginBottom: 30,
    paddingHorizontal: 5, 
  },
  sectionHeader: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: "700",
    marginBottom: 15,
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  benefitCard: {
    backgroundColor: COLORS.SURFACE,
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10, 
    borderLeftWidth: 5, 
    borderLeftColor: COLORS.ACCENT_BRIGHT,
  },
  cardText: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 17,
    fontWeight: "600",
    textAlign: 'left',
  },
});