import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, ActivityIndicator } from 'react-native';

const Tudien = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchKanjiData = fetch('https://api-japan-2.vercel.app/api/kanji/getAll')
      .then((response) => response.json());

    const fetchVocabularyData = fetch('https://api-japan-2.vercel.app/api/tuvung/getAll')
      .then((response) => response.json());

    Promise.all([fetchKanjiData, fetchVocabularyData])
      .then(([kanjiData, vocabularyData]) => {
        setData([...kanjiData, ...vocabularyData]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredData = data.filter(item => {
    const itemData = `${item.ja || item.Kanji} ${item.romaji} ${item.nghia || item.Nghia}`;
    return itemData.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const renderItemContent = (item) => {
    if (item.ja) {
      // Render vocabulary item
      return (
        <View style={styles.card}>
          <Text style={styles.title}>{item.ja}</Text>
          <Text>Kanji: {item.kanji}</Text>
          <Text>Romaji: {item.romaji}</Text>
          <Text>Nghĩa: {item.nghia}</Text>
          <Text>Bài: {item.bai}</Text>
        </View>
      );
    } else {
      // Render Kanji item
      return (
        <View style={styles.card}>
          <Text style={styles.title}>{item.Kanji}</Text>
          <Text>Onyomi: {item.Onyomi}</Text>
          <Text>Kunyomi: {item.Kunyomi}</Text>
          <Text>Nghĩa: {item.Nghia}</Text>
          <Text>Hán tự: {item.Hantu}</Text>
          <Text>Bài: {item.bai}</Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.searchInput}
        placeholder="Tìm kiếm..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView style={styles.scrollView}>
        {filteredData.map((item) => (
          <View key={item._id}>{renderItemContent(item)}</View>
        ))}
      </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    fontSize: 16,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Tudien;
