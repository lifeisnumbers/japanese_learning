import React, { useEffect,useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Context } from '../../Context/Provider';
import Nguphap1 from '../NguPhap/Nguphap1';
import Nguphap2 from '../NguPhap/Nguphap2';
import Nguphap3 from '../NguPhap/Nguphap3';
import Nguphap4 from '../NguPhap/Nguphap4';
import Nguphap5 from '../NguPhap/Nguphap5';
const NguPhap=() =>{
  const { selectedLesson, setSelectedLesson, onSelectedLessonChange } = useContext(Context);
  const handleValueChange = (itemValue) => {
    setSelectedLesson(itemValue);
    AsyncStorage.setItem('selectedLesson', itemValue);
  };

  const lessons = [
    { label: 'Bài 1', value: '1', component: Nguphap1 },
    { label: 'Bài 2', value: '2', component: Nguphap2 },
    { label: 'Bài 3', value: '3', component: Nguphap3 },
    { label: 'Bài 4', value: '4', component: Nguphap4 },
    { label: 'Bài 5', value: '5', component: Nguphap5},
    { label: 'Bài 6', value: '6', component: Nguphap2 },
    { label: 'Bài 7', value: '7', component: Nguphap1 },
    { label: 'Bài 8', value: '8', component: Nguphap2 },
    { label: 'Bài 9', value: '9', component: Nguphap3 },
    { label: 'Bài 10', value: '10', component: Nguphap4 },
    { label: 'Bài 11', value: '11', component: Nguphap5},
    { label: 'Bài 12', value: '12', component: Nguphap2 },
    { label: 'Bài 13', value: '13', component: Nguphap1 },
    { label: 'Bài 14', value: '14', component: Nguphap2 },
    { label: 'Bài 15', value: '15', component: Nguphap3 },
    { label: 'Bài 16', value: '16', component: Nguphap4 },
    { label: 'Bài 17', value: '17', component: Nguphap5},
    { label: 'Bài 18', value: '18', component: Nguphap2 },
    { label: 'Bài 19', value: '19', component: Nguphap1 },
    { label: 'Bài 20', value: '20', component: Nguphap2 },
    { label: 'Bài 21', value: '21', component: Nguphap3 },
    { label: 'Bài 22', value: '22', component: Nguphap4 },
    { label: 'Bài 23', value: '23', component: Nguphap5},
    { label: 'Bài 24', value: '24', component: Nguphap2 },
    { label: 'Bài 25', value: '25', component: Nguphap2 },
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