import {
  FlatList,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import pokemonList from "./data.json";
import groupedPokemonList from "./grouped-data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}

      {/* <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          console.log(item.id);
          return (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          );
        }}
        style={styles.flatList}
        // horizontal={true}
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorComponent={<View style={{ height: 16 }} />}
        ListEmptyComponent={
          <Text
            style={{ textAlign: "center", fontSize: 30, marginTop: "100%" }}
          >
            No items found
          </Text>
        }
        ListHeaderComponent={
          <Text style={styles.headerText}>Pokemon List</Text>
        }
        ListFooterComponent={<Text style={styles.footerText}>End of list</Text>}
      /> */}

      <View style={styles.scrollView}>
        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
                {/* 'item' here refers to each element in the 'data' array in our list. */}
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  flatList: {
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
    fontWeight: "bold",
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
