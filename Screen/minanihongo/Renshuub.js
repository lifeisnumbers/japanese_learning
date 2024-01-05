import React, { useEffect, useState,useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Context } from '../../Context/Provider';
import Renshuub1 from '../Renshuub/Renshuub1';
import Renshuub2 from '../Renshuub/Renshuub2';
import Renshuub3 from '../Renshuub/Renshuub3';
import Renshuub4 from '../Renshuub/Renshuub4';
import Renshuub5 from '../Renshuub/Renshuub5';

const NguPhap=() =>{
  const { selectedLesson, setSelectedLesson, onSelectedLessonChange } = useContext(Context);
  const handleValueChange = (itemValue) => {
    setSelectedLesson(itemValue);
    AsyncStorage.setItem('selectedLesson', itemValue);
  };

  const lessons = [
    { label: 'Bài 1', value: '1', component: Renshuub1 },
    { label: 'Bài 2', value: '2', component: Renshuub2 },
    { label: 'Bài 3', value: '3', component: Renshuub3 },
    { label: 'Bài 4', value: '4', component: Renshuub4 },
    { label: 'Bài 5', value: '5', component: Renshuub5 },
    { label: 'Bài 6', value: '6', component: Renshuub2 },
    { label: 'Bài 7', value: '7', component: Renshuub5 },
    { label: 'Bài 8', value: '8', component: Renshuub2 },
    { label: 'Bài 9', value: '9', component: Renshuub4 },
    { label: 'Bài 10', value: '10', component: Renshuub2 },
    { label: 'Bài 11', value: '11', component: Renshuub5 },
    { label: 'Bài 12', value: '12', component: Renshuub3 },
    { label: 'Bài 13', value: '13', component: Renshuub4 },
    { label: 'Bài 14', value: '14', component: Renshuub1 },
    { label: 'Bài 15', value: '15', component: Renshuub4 },
    { label: 'Bài 16', value: '16', component: Renshuub2 },
    { label: 'Bài 17', value: '17', component: Renshuub5},
    { label: 'Bài 18', value: '18', component: Renshuub2 },
    { label: 'Bài 19', value: '19', component: Renshuub1 },
    { label: 'Bài 20', value: '20', component: Renshuub3 },
    { label: 'Bài 21', value: '21', component: Renshuub4 },
    { label: 'Bài 22', value: '22', component: Renshuub5 },
    { label: 'Bài 23', value: '23', component: Renshuub1 },
    { label: 'Bài 24', value: '24', component: Renshuub3 },
    { label: 'Bài 25', value: '25', component: Renshuub4 },

  ];
  
  return (
    <React.Fragment>
      <Picker
        selectedValue={selectedLesson}
        style={styles.picker}
        onValueChange={handleValueChange}
      >
        {lessons.map((lesson) => (
          <Picker.Item key={lesson.value} label={lesson.label} value={lesson.value} />
        ))}
      </Picker>
  
      {lessons.map((lesson) => selectedLesson === lesson.value && <lesson.component key={lesson.value} />)}
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: '35%',
    backgroundColor: '#32CD32', // Xanh lá nhạt
    color: 'white', // Chữ màu trắng để dễ đọc
    marginTop: 10,
    marginBottom: 10,
    
  },
});
export default NguPhap;