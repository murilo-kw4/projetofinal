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
  BACKGROUND: "#1A1A1A", // Fundo preto/cinza escuro
  TEXT_PRIMARY: "#FFFFFF", // Texto principal branco
  ACCENT_BRIGHT: "#FF7F00", // Laranja Vibrante / Cítrico (Energia!)
  ACCENT_DARK: "#D46900", // Laranja mais escuro para pressionar
  SURFACE: "#282828", // Cor de fundo para cards e superfícies
  TEXT_SECONDARY: "#C7C7CC", // Cinza claro para descrição
};

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* TÍTULO */}
        <Text style={styles.title}>FitLife</Text>
        <Text style={styles.greeting}>Bem-vindo(a)! Escolha seu próximo passo.</Text>

        {/* --- SEÇÃO DE NAVEGAÇÃO (Listas Limpas) --- */}
        <View style={styles.navigationSection}>
            <Text style={styles.sectionHeader}>Treino & Aprendizado</Text>
            
            {/* CARD - TREINOS */}
            <TouchableOpacity style={styles.navigationCard}>
                <Text style={styles.cardText}>🏋️ Montar Treino Personalizado</Text>
            </TouchableOpacity>

            {/* CARD - GUIA DE EXERCÍCIOS */}
            <TouchableOpacity style={styles.navigationCard}>
                <Text style={styles.cardText}>📚 Guia de Exercícios e Dicas</Text>
            </TouchableOpacity>
            
            {/* CARD - PROGRESSO */}
            <TouchableOpacity style={styles.navigationCard}>
                <Text style={styles.cardText}>📈 Acompanhar Meu Progresso</Text>
            </TouchableOpacity>
        </View>

        {/* --- SEÇÃO DE AÇÃO PRINCIPAL --- */}
        
        {/* BOTÃO PRINCIPAL DE AÇÃO */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Começar Treino do Dia</Text>
        </TouchableOpacity>

        {/* --- DESTAQUE RÁPIDO (Minimalista) --- */}
        <View style={styles.highlightSection}>
          <Text style={styles.highlightTitle}>🔥 Dica Rápida:</Text>
          <Text style={styles.highlightText}>
            Não pule o aquecimento! 5 minutos de cardio leve previnem lesões e otimizam a performance.
          </Text>
          <TouchableOpacity>
             <Text style={styles.linkText}>Ver mais dicas</Text>
          </TouchableOpacity>
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
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  
  // --- TÍTULOS E SAUDAÇÃO ---
  title: {
    fontSize: 42,
    color: COLORS.ACCENT_BRIGHT, // Título na cor viva
    fontWeight: "900", 
    marginTop: 40,
    textAlign: "left",
  },
  greeting: {
    fontSize: 18,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: "500",
    marginBottom: 40,
    textAlign: "left",
  },

  // --- NAVEGAÇÃO ---
  navigationSection: {
    marginBottom: 40,
  },
  sectionHeader: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: "700",
    marginBottom: 10,
    textTransform: 'uppercase', // Estilo profissional
  },
  navigationCard: {
    backgroundColor: COLORS.SURFACE,
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10, 
  },
  cardText: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 17,
    fontWeight: "600",
  },

  // --- BOTÃO PRINCIPAL ---
  primaryButton: {
    backgroundColor: COLORS.ACCENT_BRIGHT,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
    // Efeito de sombra vibrante
    elevation: 8, 
    shadowColor: COLORS.ACCENT_BRIGHT,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  buttonText: {
    color: COLORS.BACKGROUND, // Texto escuro em fundo claro/vibrante
    fontSize: 20,
    fontWeight: "bold",
  },

  // --- DESTAQUE RÁPIDO ---
  highlightSection: {
    backgroundColor: COLORS.SURFACE,
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.ACCENT_BRIGHT,
    marginBottom: 8,
  },
  highlightText: {
    fontSize: 15,
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 22,
    marginBottom: 10,
  },
  linkText: {
    color: COLORS.ACCENT_BRIGHT,
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
  }
});