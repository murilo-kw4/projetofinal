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
  FlatList,
} from "react-native";

// Paleta de Cores (Reutilizada)
const COLORS = {
  BACKGROUND: "#1A1A1A",
  TEXT_PRIMARY: "#FFFFFF",
  ACCENT_BRIGHT: "#FF7F00", // Laranja Vibrante
  SURFACE: "#282828",
  TEXT_SECONDARY: "#C7C7CC",
  ACCENT_DARK: "#D46900",
  SUCCESS: "#4CAF50", // Verde para Vantagens
  DANGER: "#FF3B30",  // Vermelho para Desvantagens
};

// Dados das Academias de Presidente Venceslau (Simulados)
const localAcademies = [
  {
    id: 'A01',
    title: 'VR Power Gym',
    subtitle: 'Musculação e Fitness (Foco em Horário Estendido)',
    description: 'Conhecida por ter um horário de funcionamento muito amplo, ideal para quem tem rotinas de trabalho flexíveis ou noturnas. Geralmente com equipamentos básicos e funcionais.',
    hours: '05:00 - 23:00',
    tags: ['Musculação', 'Horário Flexível', 'Preço Acessível'],
    advantages: [
      'Horário de funcionamento estendido (até 23h)',
      'Bom custo-benefício (Plano Starter Wellhub)',
      'Foco em treino livre e musculação tradicional',
    ],
    disadvantages: [
      'Pode ficar muito cheia nos horários de pico (early-morning e pós-trabalho)',
      'Pouca variedade de aulas coletivas',
      'Equipamentos podem ser mais básicos',
    ],
    localImage: require("../assets/powergym.png"),
  },
  {
    id: 'A02',
    title: 'CT Juliano Silva',
    subtitle: 'CrossFit, Funcional e Musculação Integrada',
    description: 'Um Centro de Treinamento que oferece diversas modalidades além da musculação, como CrossFit e Funcional Kids. Foco em treinamento de alta intensidade e comunidade.',
    hours: '05:30 - 20:30',
    tags: ['CrossFit', 'Funcional', 'Aulas em Grupo', 'Comunidade'],
    advantages: [
      'Variedade de modalidades (Musculação, CrossFit, Funcional)',
      'Ambiente de treino motivacional e em comunidade',
      'Acompanhamento mais próximo em aulas de grupo',
    ],
    disadvantages: [
      'Preço de planos pode ser mais alto que academias tradicionais',
      'Horário de fechamento mais cedo (20:30)',
      'Foco na musculação pode ser menor do que em academias dedicadas',
    ],
    localImage: require("../assets/ctju.png"),
  },
{
  id: 'A03',
    title: 'Academia Gowfit',
      subtitle: 'Musculação Especializada e Espaço Amplo',
        description: 'Promete musculação especializada com aparelhos modernos e espaço amplo. Boa opção para quem busca uma experiência de treino mais confortável e com estrutura.',
          hours: '05:00 - 23:00',
            tags: ['Musculação', 'Moderna', 'Ampla'],
              advantages: [
                'Espaço amplo e aparelhos mais novos (simulado)',
                'Ótima para quem foca apenas em musculação',
                'Horário estendido similar ao concorrente',
              ],
                disadvantages: [
                  'Preço no plano básico um pouco superior ao concorrente (R$ 59,90 Wellhub)',
                  'Possível maior concentração de pessoas devido à reputação de espaço moderno',
                  'Pode faltar aulas específicas de nicho (Boxe, Dança)',
                ],
                  localImage: require("../assets/gowfit.png"),
  },
{
  id: 'A04',
    title: 'Mais Fit Life Academia Ltda',
      subtitle: 'Treinamento Funcional e Aeróbicos Variados',
        description: 'Academia com foco em diferentes tipos de treinamento funcional e aeróbicos, oferecendo uma rotina diversificada de exercícios e aulas coletivas.',
          hours: '05:30 - 22:00',
            tags: ['Funcional', 'Fit Training', 'Aeróbicos', 'Diversidade'],
              advantages: [
                'Grande variedade de aulas e modalidades',
                'Ideal para quem se entedia facilmente com a rotina de musculação',
                'Bom horário de fechamento (22:00)',
              ],
                disadvantages: [
                  'Horário de pico pode ter lotação nas salas de aula',
                  'Menos foco e espaço dedicado à musculação pura',
                  'O preço do plano Wellhub é o mais acessível, o que pode indicar alta lotação',
                ],
                  localImage: require("../assets/maisfit.png"),
  },
];

// Componente individual para o Card da Academia
const AcademyCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image
      source={item.localImage ? item.localImage : { uri: item.imageUrl }}
      style={styles.cardImage}
      resizeMode="cover"
    />

    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>

      <View style={styles.tagRow}>
        {item.tags.map((tag, index) => (
          <View key={index} style={styles.tagContainer}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
    <View style={styles.infoHours}>
      <Text style={styles.infoHoursText}>🕒 {item.hours}</Text>
    </View>
  </TouchableOpacity>
);


export default function AcademiasPV() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAcademy, setSelectedAcademy] = useState(null);


  const handleSelectAcademy = (academy) => {
    setSelectedAcademy(academy);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedAcademy(null);
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={localAcademies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <AcademyCard
            item={item}
            onPress={() => handleSelectAcademy(item)}
          />
        )}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.headerTitle}>Academias em Presidente Venceslau</Text>
            <Text style={styles.headerSubtitle}>
              Análise comparativa das principais academias da região para ajudar você a escolher a melhor para o seu treino.
            </Text>
          </View>
        )}
      />

      {/* 🚨 COMPONENTE MODAL DE DETALHES COM VANTAGENS/DESVANTAGENS */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>

            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedAcademy?.title}</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✖︎</Text>
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.modalScroll}>

              {/* Descrição e Horário */}
              <Text style={styles.modalTextDescription}>{selectedAcademy?.description}</Text>
              <Text style={styles.modalHours}>🕒 **Horário:** {selectedAcademy?.hours}</Text>


              {/* VANTAGENS */}
              <Text style={[styles.sectionHeaderModal, { color: COLORS.SUCCESS }]}>👍 Vantagens</Text>
              {selectedAcademy?.advantages.map((adv, index) => (
                <View key={index} style={styles.bulletItem}>
                  <Text style={[styles.bulletPoint, { color: COLORS.SUCCESS }]}>•</Text>
                  <Text style={styles.listItem}>{adv}</Text>
                </View>
              ))}

              {/* DESVANTAGENS */}
              <Text style={[styles.sectionHeaderModal, { color: COLORS.DANGER }]}>👎 Desvantagens</Text>
              {selectedAcademy?.disadvantages.map((disadv, index) => (
                <View key={index} style={styles.bulletItem}>
                  <Text style={[styles.bulletPoint, { color: COLORS.DANGER }]}>•</Text>
                  <Text style={styles.listItem}>{disadv}</Text>
                </View>
              ))}

              {/* Rodapé do Modal */}
              <View style={styles.modalFooter}>
                <Text style={styles.modalTextFooter}>
                  *Esta análise é baseada em informações públicas e tipos de academia. Verifique preços e estrutura pessoalmente.
                </Text>
              </View>

            </ScrollView>

          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.BACKGROUND },
  listContainer: { paddingHorizontal: 20, paddingVertical: 10, paddingBottom: 50 },

  headerTitle: { fontSize: 30, color: COLORS.ACCENT_BRIGHT, fontWeight: "800", marginTop: 20, marginBottom: 10, },
  headerSubtitle: { fontSize: 16, color: COLORS.TEXT_SECONDARY, fontWeight: "400", marginBottom: 25, },

  // --- CARD DA ACADEMIA ---
  card: { backgroundColor: COLORS.SURFACE, borderRadius: 12, marginBottom: 20, overflow: 'hidden', elevation: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.3, shadowRadius: 4, },
  cardImage: { width: '100%', height: 120, backgroundColor: COLORS.ACCENT_BRIGHT, },
  cardContent: { padding: 15, },
  cardTitle: { fontSize: 20, color: COLORS.TEXT_PRIMARY, fontWeight: "700", marginBottom: 5, },
  cardSubtitle: { fontSize: 14, color: COLORS.TEXT_SECONDARY, marginBottom: 10, },

  tagRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 },
  tagContainer: { alignSelf: 'flex-start', backgroundColor: COLORS.ACCENT_DARK, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4, marginRight: 5, marginBottom: 5 },
  tagText: { color: COLORS.TEXT_PRIMARY, fontSize: 12, fontWeight: '500', },

  infoHours: {
    padding: 10,
    backgroundColor: COLORS.ACCENT_BRIGHT,
    borderTopWidth: 1,
    borderTopColor: COLORS.SURFACE
  },
  infoHoursText: {
    color: COLORS.BACKGROUND,
    fontSize: 14,
    fontWeight: '700'
  },

  // --- ESTILOS DO MODAL ---
  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.85)' },
  modalContent: {
    backgroundColor: COLORS.BACKGROUND,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 15,
    height: '90%', // Modal bem grande para caber todo o conteúdo
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
    borderBottomColor: COLORS.SURFACE,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.ACCENT_BRIGHT,
  },
  closeButton: { padding: 10 },
  closeButtonText: { fontSize: 20, color: COLORS.TEXT_SECONDARY, fontWeight: 'bold' },
  modalScroll: { paddingBottom: 40 },

  modalTextDescription: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 24,
    marginBottom: 15,
  },
  modalHours: {
    fontSize: 16,
    color: COLORS.TEXT_PRIMARY,
    lineHeight: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  sectionHeaderModal: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 20,
    marginRight: 8,
    lineHeight: 22,
  },
  listItem: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 22,
    flexShrink: 1, // Permite que o texto quebre a linha
  },

  modalFooter: {
    marginTop: 30,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.SURFACE,
  },
  modalTextFooter: {
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
    fontStyle: 'italic',
    textAlign: 'center',
  }
});