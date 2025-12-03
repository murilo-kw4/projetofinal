import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Modal,
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

// Dados Fictícios dos Tipos de Treino (5 tipos completos e corrigidos)
const trainingTypes = [
  {
    id: 'T01',
    title: 'Treino de Força (Musculação)',
    subtitle: 'Focado em hipertrofia e aumento de massa muscular.',
    details: 'A musculação é fundamental para a hipertrofia e aumento da força máxima. Use cargas progressivas e descanse adequadamente. É crucial manter a forma correta para evitar lesões.',
    benefits: ['Aumento da massa muscular e força', 'Melhora da densidade óssea', 'Acelera o metabolismo'],
    structure: 'Geralmente dividido por grupo muscular (Ex: Push/Pull/Legs). 3-4 séries, 8-12 repetições. Exige progressão de carga constante.',
    examples: ['Agachamento Livre', 'Supino Reto', 'Remada Curvada', 'Desenvolvimento de Ombros', 'Levantamento Terra'], // 5 exemplos
    imageUrl: "https://via.placeholder.com/300x150/FF7F00/1A1A1A?text=FORCA",
    icon: '💪',
  },
  {
    id: 'T02',
    title: 'Treino Cardio',
    subtitle: 'Melhora a saúde cardiovascular e resistência física.',
    details: 'Exercícios aeróbicos como corrida ou ciclismo são cruciais para a queima calórica e saúde do coração. Mantenha a frequência consistente. Variação é a chave para evitar o tédio.',
    benefits: ['Saúde cardiovascular e pulmonar', 'Resistência e stamina', 'Queima calórica'],
    structure: 'Pode ser de baixa intensidade e longa duração (LISS) ou alta intensidade e curta duração (HIIT). Recomendado 30-60 minutos por sessão.',
    examples: ['Corrida na Esteira', 'Elíptico', 'Ciclismo (Indoor/Outdoor)', 'Pular Corda', 'Remo'], // 5 exemplos
    imageUrl: "https://via.placeholder.com/300x150/FF7F00/1A1A1A?text=CARDIO",
    icon: '🏃',
  },
  {
    id: 'T03',
    title: 'Treino Funcional e HIIT',
    subtitle: 'Movimentos que simulam atividades diárias, alta intensidade.',
    details: 'O treinamento funcional foca em integrar múltiplos grupos musculares, melhorando equilíbrio, coordenação e força do core. O HIIT adiciona a intensidade para máxima queima calórica em pouco tempo.',
    benefits: ['Melhora do equilíbrio e coordenação', 'Alta queima calórica (EPOC)', 'Aumento da agilidade'],
    structure: 'Funcional: Uso de peso corporal, kettlebells ou TRX. HIIT: Ciclos de 20-30 segundos de esforço máximo seguidos por descanso ativo.',
    examples: ['Burpees', 'Saltos na Caixa', 'Kettlebell Swing', 'Mountain Climbers', 'Thrusters'], // 5 exemplos
    imageUrl: "https://via.placeholder.com/300x150/FF7F00/1A1A1A?text=FUNCIONAL",
    icon: '🤸',
  },
  {
    id: 'T04',
    title: 'Calistenia (Bodyweight)',
    subtitle: 'Uso do peso corporal para desenvolver força e controle.',
    details: 'A calistenia exige controle corporal e força relativa para executar movimentos complexos como barras e flexões. Ótima para treinar em qualquer lugar.',
    benefits: ['Força relativa e resistência muscular', 'Controle e consciência corporal', 'Pode ser feito sem equipamentos'],
    structure: 'Geralmente focado em progressões de exercícios básicos. Ex: Transição de flexão na parede para flexão no chão, e depois com uma mão.',
    examples: ['Flexões', 'Barras Fixas (Pull-ups)', 'Dips (Paralelas)', 'Pranchas Avançadas', 'L-Sit Holds'], // 5 exemplos
    imageUrl: "https://via.placeholder.com/300x150/FF7F00/1A1A1A?text=CALISTENIA",
    icon: '🤸‍♂️',
  },
  {
    id: 'T05',
    title: 'Pilates e Ioga',
    subtitle: 'Foco na flexibilidade, postura e força do Core.',
    details: 'Pilates e Ioga são essenciais para corrigir a postura, melhorar a conexão mente-corpo e aumentar a flexibilidade, prevenindo lesões crônicas e dores nas costas.',
    benefits: ['Aumento da flexibilidade e mobilidade', 'Alívio do estresse e foco mental', 'Fortalecimento profundo do core'],
    structure: 'Série de movimentos controlados, respiração profunda e foco na ativação muscular correta. Mantenha a consistência semanal.',
    examples: ['Saudação ao Sol (Ioga)', 'Hundred (Pilates)', 'Cobra Pose', 'Single Leg Stretch', 'Roll Up'], // 5 exemplos
    imageUrl: "https://via.placeholder.com/300x150/FF7F00/1A1A1A?text=PILATES",
    icon: '🧘',
  },
];

// Componente individual para o Card de Treino (Sem mudanças)
const TrainingCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    {/* ... Imagem e conteúdo do card ... */}
    <Image 
      source={{ uri: item.imageUrl }} 
      style={styles.cardImage} 
      resizeMode="cover"
    />
    
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{item.icon} {item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      
      <View style={styles.tagContainer}>
        <Text style={styles.tagText}>Ver Detalhes</Text>
      </View>
    </View>
  </TouchableOpacity>
);


export default function TrainingTypes() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState(null); 

  
  const handleSelectTraining = (training) => {
    setSelectedTraining(training); 
    setModalVisible(true); 
  };
  
  const closeModal = () => {
    setModalVisible(false);
    setSelectedTraining(null);
  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* TÍTULOS DA TELA */}
        <Text style={styles.headerTitle}>Tipos de Treino</Text>
        <Text style={styles.headerSubtitle}>
          Escolha uma modalidade para aprender sobre benefícios, estrutura e exemplos de exercícios.
        </Text>

        {/* LISTA DE CARDS DE TREINO */}
        <View style={styles.listContainer}>
          {trainingTypes.map((item) => (
            <TrainingCard 
              key={item.id} 
              item={item} 
              onPress={() => handleSelectTraining(item)}
            />
          ))}
        </View>

        {/* Informação Extra/Foco em Ensino */}
        <View style={styles.infoBox}>
            <Text style={styles.infoBoxText}>
                ⚠️ Dica: Combine diferentes tipos de treino para um desenvolvimento físico completo e equilibrado.
            </Text>
        </View>

      </ScrollView>
      
      {/* 🚨 COMPONENTE MODAL - JANELA FLUTUANTE DE INFORMAÇÃO */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedTraining?.icon} {selectedTraining?.title}</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✖︎</Text>
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.modalScroll}>
                
                {/* 1. Visão Geral */}
                <Text style={styles.modalTextDescription}>{selectedTraining?.details}</Text>

                {/* 2. Benefícios */}
                <Text style={styles.sectionHeaderModal}>Benefícios Chave</Text>
                {selectedTraining?.benefits.map((benefit, index) => (
                    <Text key={index} style={styles.listItem}>
                        {`\u2022 ${benefit}`}
                    </Text>
                ))}
                
                {/* 3. Estrutura */}
                <Text style={styles.sectionHeaderModal}>Estrutura Típica</Text>
                <Text style={styles.modalText}>{selectedTraining?.structure}</Text>

                {/* 4. Exemplos de Exercícios */}
                <Text style={styles.sectionHeaderModal}>Exemplos de Exercícios</Text>
                {selectedTraining?.examples.map((example, index) => (
                    <Text key={index} style={styles.listItem}>
                        {`\u2022 ${example}`}
                    </Text>
                ))}

            </ScrollView>
            
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ... Estilos de tela (safeArea, container, headerTitle, etc.)
  safeArea: { flex: 1, backgroundColor: COLORS.BACKGROUND },
  container: { flex: 1, paddingHorizontal: 20, paddingVertical: 10, },
  headerTitle: { fontSize: 30, color: COLORS.ACCENT_BRIGHT, fontWeight: "800", marginTop: 20, marginBottom: 10, },
  headerSubtitle: { fontSize: 16, color: COLORS.TEXT_SECONDARY, fontWeight: "400", marginBottom: 25, },
  listContainer: { marginBottom: 20, },
  card: { backgroundColor: COLORS.SURFACE, borderRadius: 12, marginBottom: 20, overflow: 'hidden', elevation: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.3, shadowRadius: 4, },
  cardImage: { width: '100%', height: 150, backgroundColor: COLORS.ACCENT_BRIGHT, },
  cardContent: { padding: 15, },
  cardTitle: { fontSize: 20, color: COLORS.TEXT_PRIMARY, fontWeight: "700", marginBottom: 5, },
  cardSubtitle: { fontSize: 14, color: COLORS.TEXT_SECONDARY, marginBottom: 15, },
  tagContainer: { alignSelf: 'flex-start', backgroundColor: COLORS.ACCENT_BRIGHT, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, },
  tagText: { color: COLORS.BACKGROUND, fontSize: 14, fontWeight: '700', },
  // --- ESTILOS DO MODAL ---
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  modalContent: {
    backgroundColor: COLORS.SURFACE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 15,
    height: '80%',
    shadowColor: COLORS.ACCENT_BRIGHT,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BACKGROUND,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.ACCENT_BRIGHT,
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: 'bold',
  },
  modalScroll: {
    paddingBottom: 40,
  },
  modalTextDescription: {
    fontSize: 16,
    color: COLORS.TEXT_PRIMARY,
    lineHeight: 24,
    marginBottom: 20,
    fontWeight: '500',
  },
  modalText: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 24,
    marginBottom: 20,
  },
  sectionHeaderModal: {
    fontSize: 18,
    color: COLORS.ACCENT_BRIGHT,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  listItem: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 26,
    marginLeft: 10,
  },
});