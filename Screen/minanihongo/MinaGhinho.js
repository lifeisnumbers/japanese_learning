import React, { useState, useEffect,useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Context } from '../../Context/Provider';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import IonIcon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MinaGhinho = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffleCards, setShuffleCards] = useState(false);
  const { selectedLesson, onSelectedLessonChange } = useContext(Context);
  const [notRememberedList, setNotRememberedList] = useState([]);
  const [isNotRememberedActive, setIsNotRememberedActive] = useState(false);

  useEffect(() => {
    if (selectedLesson !== null) {
      fetchVocabulary(selectedLesson);
    }
  }, [selectedLesson]);

  useEffect(() => {
    if (shuffleCards) {
      const shuffledData = shuffleArray([...data]);
      setData(shuffledData);
    }
  }, [shuffleCards]);
  useEffect(() => {
    const loadNotRememberedList = async () => {
      const storedList = await AsyncStorage.getItem('notRememberedList');
      if (storedList) setNotRememberedList(JSON.parse(storedList));
    };
    loadNotRememberedList();
  }, []);
  useEffect(() => {
    AsyncStorage.setItem('notRememberedList', JSON.stringify(notRememberedList));
  }, [notRememberedList]);

  const fetchVocabulary = (lesson) => {
    fetch(`https://api-japan-2.vercel.app/api/tuvung/getByBai?bai=${lesson}`)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setOriginalData([...json]); // Lưu trữ bản sao dữ liệu ban đầu
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    // Check if the not remembered list is being displayed
    if (isNotRememberedActive) {
      setData(notRememberedList);
      // Optionally reset the current card index
  
    }
  }, [notRememberedList, isNotRememberedActive]);
  
  const addToNotRemembered = () => {
    const currentItem = data[currentCardIndex];
    if (!notRememberedList.includes(currentItem)) {
      setNotRememberedList([...notRememberedList, currentItem]);
    }
  };
  
  const removeToNotRemembered = () => {
    const currentItem = data[currentCardIndex];
    const newList = notRememberedList.filter(item => item !== currentItem);
    setNotRememberedList(newList);
  
    if (isNotRememberedActive) {
      // Only update the data, don't change the current card index
      setData(newList);
  
      // If the last item is removed, prevent index from going out of bounds
      if (currentCardIndex >= newList.length) {
        setCurrentCardIndex(newList.length > 0 ? newList.length - 1 : 0);
      }
    }
  };
  const toggleNotRememberedList = () => {
    setIsNotRememberedActive(!isNotRememberedActive);

    if (!isNotRememberedActive) {
      // If activating, load the not remembered list
      setData(notRememberedList);
      setCurrentCardIndex(0);
    } else {
      // If deactivating, load the regular data
      fetchVocabulary(selectedLesson);
    }
  };
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (currentCardIndex < data.length - 1) {
      setCurrentCardIndex(prevIndex => prevIndex + 1);
    }
    setIsFlipped(false);
  };
  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => (prevIndex - 1) % data.length);
      setIsFlipped(false);
    }
  };
  const shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  const onCheckBoxChange = () => {
    if (shuffleCards) {
      // Reset to the original data if shuffle is being turned off
      const listToReset = isNotRememberedActive ? notRememberedList : originalData;
      setData(listToReset);
      setCurrentCardIndex(0);
    } else {
      // Shuffle the appropriate list based on isNotRememberedActive
      const listToShuffle = isNotRememberedActive ? [...notRememberedList] : [...originalData];
      const shuffledData = shuffleArray(listToShuffle);
      setData(shuffledData);
      setCurrentCardIndex(0);
    }
    setShuffleCards(!shuffleCards);
  };
  

  
  return (
    <View style={styles.container}>
  
      <Picker
        selectedValue={selectedLesson}
        style={styles.picker}
        onValueChange={(itemValue) => onSelectedLessonChange(itemValue)}>
        {Array.from({ length: 25 }, (_, i) => (
          <Picker.Item label={`Bài ${i + 1}`} value={`${i + 1}`} key={i} />
        ))}
      </Picker>
      
      
      <Button 
        onPress={toggleNotRememberedList}
        title="Danh sách chưa nhớ"
        color={isNotRememberedActive ? "#228B22" : "#4390f7"}
      />
      <View >
      {data.length > 0 && data[currentCardIndex] ? (
  <TouchableOpacity onPress={flipCard} style={styles.card}>
    {!isFlipped ? (
      <Text style={styles.text}>{data[currentCardIndex].ja}</Text>
    ) : (
      <View>
        <Text style={styles.text}>{data[currentCardIndex].romaji}</Text>
        <Text style={styles.text}>{data[currentCardIndex].nghia}</Text>
        <Text style={styles.text}>{data[currentCardIndex].kanji}</Text>
      </View>
    )}
  </TouchableOpacity>
) : (
  <TouchableOpacity onPress={flipCard} style={styles.card}>
    <Text style={styles.cardText1}>Hãy thêm từ chưa nhớ vào</Text>
  </TouchableOpacity>
)}


        {!isNotRememberedActive && (
          <TouchableOpacity onPress={addToNotRemembered} style={styles.chuathuoccontainer}>
            <IonIcon name="add-circle-outline" size={30} color="#4390f7" /> 
            <Text>Chưa nhớ</Text>
          </TouchableOpacity>
      )} 
      {isNotRememberedActive && (
          <TouchableOpacity onPress={removeToNotRemembered} style={styles.chuathuoccontainer}>
            <IonIcon name="remove-circle-outline" size={30} color="#4390f7" /> 
            <Text>Đã nhớ</Text>
          </TouchableOpacity>
      )}
      <View style={styles.buntoncontainer}>
        
        <TouchableOpacity onPress={prevCard} style={styles.preButton}>
          <Text style={styles.buttonText}>Lùi lại</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextCard} style={styles.nextButton}>
          <Text style={styles.buttonText}>Tiếp theo</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          size={25}
          text='Ngẫu nhiên'
          fillColor="#228B22"
          isChecked={false}
          textStyle={{
            textDecorationLine: "none",
            fontWeight: "900",
          }}
          onPress={onCheckBoxChange}
        />
      </View> 
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 200,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  nextButton: {
    backgroundColor: '#32CD32',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 50,
  },
  preButton: {
    backgroundColor: '#32CD32',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buntoncontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  cardText1:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: '35%',
    backgroundColor: '#32CD32', // Xanh lá nhạt
    color: 'white', // Chữ màu trắng để dễ đọc
    marginTop: 10,
    marginBottom: 10,
    marginRight:270,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  reviewListButton: {
    backgroundColor: '#32CD32',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  chuathuoccontainer:{
    flexDirection: 'row',
    alignItems: 'center', 
    marginLeft: 120,
    marginBottom: 10,
  },
});

export default MinaGhinho;
