import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import romaji from '../../components/RomajiData';
import KatakanaCharacters from '../../components/katakanaData';
const { width, height } = Dimensions.get('window');




const numColumns = 5;
const numColumns1=numColumns+1;
const cellWidth = Math.floor(width / numColumns1); // Tính toán chiều rộng của mỗi ô

const KatakanaScreen = () => {
   const handleItemPress = async (item) => {
    const soundPath = `https://tiengnhatvn.com/audio/alphabet/${romaji[KatakanaCharacters.indexOf(item)]}.mp3`; // Đường dẫn đến tệp âm thanh

    const { sound } = await Audio.Sound.createAsync(
      { uri: soundPath }
    );

    try {
      await sound.playAsync();
    } catch (error) {
      console.error(`Failed to play sound: ${error}`);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={KatakanaCharacters}
        renderItem={({ item }) => {
          if (item === null) {
            return <View style={{ width: cellWidth, height: cellWidth }} />;
          }
          return (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <View style={[styles.cell, { width: cellWidth }]}>
                <Text style={styles.largeChar}>{item}</Text>
                {item && <Text style={styles.smallChar}>{romaji[KatakanaCharacters.indexOf(item)]}</Text>}
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        style={styles.grid}
        scrollEnabled={true}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  grid: {
    flex: 1,
    margin: 5,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: cellWidth, // Đặt chiều cao bằng chiều rộng để tạo ô vuông
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  largeChar: {
    fontSize: 24,
    color: '#000',
  },
  smallChar: {
    fontSize: 12,
    color: '#666',
  },
});

export default KatakanaScreen;