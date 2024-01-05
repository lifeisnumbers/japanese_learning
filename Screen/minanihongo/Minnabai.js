import React, { useState, useEffect,useContext } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Context } from '../../Context/Provider';
const Minnabai = () => {
  const [data, setData] = useState([]);
  const lessons = Array.from({ length: 25 }, (_, i) => i + 1);
  const [loading, setLoading] = useState(true);
  const { selectedLesson, setSelectedLesson, onSelectedLessonChange } = useContext(Context);
  useEffect(() => {
    fetch(`https://api-japan-2.vercel.app/api/tuvung/getByBai?bai=${selectedLesson}`)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [selectedLesson]);
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.word}>{item.ja} </Text>
      <Text style={styles.kanji}>{item.romaji}</Text>
      <Text style={styles.meaning}>{item.nghia}</Text>
      <Text style={styles.kanji}>{item.kanji}</Text>
    </View>
  );
 

  return (
    <View style={styles.container}>
      <View >
          <Text style={styles.header}>Minna No Ninhongo {selectedLesson}</Text>
          <View style={styles.pickercontainer}>
            <Picker
              selectedValue={selectedLesson}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => onSelectedLessonChange(itemValue)}
            >
            {lessons.map(lesson => (
              <Picker.Item key={lesson.toString()} label={`Bài ${lesson}`} value={lesson.toString()} style={styles.pickeritem} />
            ))}
            </Picker>
          </View>
       

      </View>
   

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#228B22', // Xanh lá đậm
    backgroundColor: 'white', // Nền trắng
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#228B22', // Xanh lá đậm
  },
  kanji: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'black', // Màu chữ đen hoặc tối
  },
  meaning: {
    fontSize: 16,
    color: 'grey', // Màu chữ xám cho nghĩa
  },
  
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: '#228B22', // Xanh lá đậm
  },
  pickercontainer:{
    borderRadius:10,
  },
  picker: {
    height: 50,
    width: '35%',
    backgroundColor: '#32CD32', // Xanh lá nhạt
    color: 'white', // Chữ màu trắng để dễ đọc
    marginTop: 10,
    marginBottom: 10,
    
  },
  
});

export default Minnabai ;
