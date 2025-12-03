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

// Paleta de Cores
const COLORS = {
  BACKGROUND: "#1A1A1A",
  TEXT_PRIMARY: "#FFFFFF",
  ACCENT_BRIGHT: "#FF7F00",
  SURFACE: "#282828",
  TEXT_SECONDARY: "#C7C7CC",
  ACCENT_DARK: "#D46900",
};

// Dados dos Tipos de Treino
const trainingTypes = [
  {
    id: "T01",
    title: "Treino de Força (Musculação)",
    subtitle: "Focado em hipertrofia e aumento de massa muscular.",
    details:
      "A musculação é fundamental para a hipertrofia e aumento da força máxima. Use cargas progressivas e descanse adequadamente. É crucial manter a forma correta para evitar lesões.",
    benefits: [
      "Aumento da massa muscular e força",
      "Melhora da densidade óssea",
      "Acelera o metabolismo",
    ],
    structure:
      "Geralmente dividido por grupo muscular (Ex: Push/Pull/Legs). 3-4 séries, 8-12 repetições.",
    examples: [
      "Agachamento Livre",
      "Supino Reto",
      "Remada Curvada",
      "Desenvolvimento de Ombros",
      "Levantamento Terra",
    ],
    // >>>>>>>>>>> IMAGEM LOCAL AQUI
    localImage: require("../assets/homemmusculacao.jpg"),
    icon: "💪",
  },
  {
    id: "T02",
    title: "Treino Cardio",
    subtitle: "Melhora a saúde cardiovascular e resistência física.",
    details:
      "Exercícios aeróbicos como corrida ou ciclismo são cruciais para a queima calórica e saúde do coração.",
    benefits: ["Saúde cardiovascular", "Resistência", "Queima calórica"],
    structure:
      "Pode ser LISS (leve e longo) ou HIIT (intenso e curto). Recomendado 30-60 minutos.",
    examples: ["Corrida", "Bike", "Elíptico", "Pular corda", "Remo"],
    localImage: require("../assets/cardio.png"),
    icon: "🏃",
  },
  {
    id: "T03",
    title: "Treino Funcional e HIIT",
    subtitle: "Movimentos dinâmicos e de alta intensidade.",
    details:
      "O funcional trabalha múltiplos grupos musculares e melhora equilíbrio e coordenação.",
    benefits: ["Coordenação", "Alta queima calórica", "Agilidade"],
    structure:
      "Funcional usa peso corporal, HIIT usa ciclos de esforço e descanso.",
    examples: ["Burpees", "Box Jump", "Kettlebell Swing", "Mountain Climbers"],
   localImage: require("../assets/crossfitnepai.png"),
    icon: "🤸",
  },
  {
    id: "T04",
    title: "Calistenia (Bodyweight)",
    subtitle: "Força e controle com o próprio corpo.",
    details:
      "A calistenia exige controle corporal e progressão de movimentos.",
    benefits: ["Força relativa", "Controle corporal", "Sem equipamentos"],
    structure: "Baseada em progressões (flexão → barras → movimentos avançados).",
    examples: ["Flexões", "Barras", "Paralelas", "Pranchas"],
    localImage: require("../assets/calistenia.png"),
    icon: "🤸‍♂️",
  },
  {
    id: "T05",
    title: "Pilates e Ioga",
    subtitle: "Flexibilidade, postura e conexão mente-corpo.",
    details:
      "Excelentes para postura, respiração, foco e flexibilidade.",
    benefits: ["Mobilidade", "Relaxamento", "Core forte"],
    structure: "Movimentos controlados + respiração profunda.",
    examples: ["Cobra Pose", "Roll Up", "Hundred", "Single Leg Stretch"],
    localImage: require("../assets/ioga.png"),
    icon: "🧘",
  },
];

// Card de Treino
const TrainingCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image
      source={item.localImage ? item.localImage : { uri: item.imageUrl }}
      style={styles.cardImage}
      resizeMode="cover"
    />

    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>
        {item.icon} {item.title}
      </Text>
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
        <Text style={styles.headerTitle}>Tipos de Treino</Text>

        <Text style={styles.headerSubtitle}>
          Escolha uma modalidade para conhecer benefícios e estrutura.
        </Text>

        <View style={styles.listContainer}>
          {trainingTypes.map((item) => (
            <TrainingCard
              key={item.id}
              item={item}
              onPress={() => handleSelectTraining(item)}
            />
          ))}
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoBoxText}>
            ⚠️ Dica: Combine diferentes treinos para melhores resultados!
          </Text>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {selectedTraining?.icon} {selectedTraining?.title}
              </Text>

              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✖︎</Text>
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.modalScroll}>
              <Text style={styles.modalTextDescription}>
                {selectedTraining?.details}
              </Text>

              <Text style={styles.sectionHeaderModal}>Benefícios Chave</Text>
              {selectedTraining?.benefits.map((b, i) => (
                <Text key={i} style={styles.listItem}>
                  • {b}
                </Text>
              ))}

              <Text style={styles.sectionHeaderModal}>Estrutura Típica</Text>
              <Text style={styles.modalText}>
                {selectedTraining?.structure}
              </Text>

              <Text style={styles.sectionHeaderModal}>Exemplos</Text>
              {selectedTraining?.examples.map((e, i) => (
                <Text key={i} style={styles.listItem}>
                  • {e}
                </Text>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.BACKGROUND },
  container: { flex: 1, paddingHorizontal: 20, paddingVertical: 10 },
  headerTitle: {
    fontSize: 30,
    color: COLORS.ACCENT_BRIGHT,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: 25,
  },
  listContainer: { marginBottom: 20 },
  card: {
    backgroundColor: COLORS.SURFACE,
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 5,
  },
  cardImage: { width: "100%", height: 150 },
  cardContent: { padding: 15 },
  cardTitle: {
    fontSize: 20,
    color: COLORS.TEXT_PRIMARY,
    fontWeight: "700",
    marginBottom: 5,
  },
  cardSubtitle: { fontSize: 14, color: COLORS.TEXT_SECONDARY, marginBottom: 15 },
  tagContainer: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.ACCENT_BRIGHT,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    color: COLORS.BACKGROUND,
    fontSize: 14,
    fontWeight: "700",
  },

  // Modal
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.85)",
  },
  modalContent: {
    backgroundColor: COLORS.SURFACE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 15,
    height: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BACKGROUND,
    paddingBottom: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.ACCENT_BRIGHT,
  },
  closeButtonText: { color: COLORS.TEXT_SECONDARY, fontSize: 20 },
  modalScroll: { paddingBottom: 40 },
  modalTextDescription: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 16,
    marginBottom: 20,
  },
  modalText: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 16,
    marginBottom: 20,
  },
  sectionHeaderModal: {
    color: COLORS.ACCENT_BRIGHT,
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 8,
  },
  listItem: { color: COLORS.TEXT_SECONDARY, fontSize: 16, marginLeft: 10 },
  infoBoxText: { color: "#fff", marginBottom: 40 },
});

