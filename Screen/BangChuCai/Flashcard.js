import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Button  } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import rawHiraganaCharacters from '../../components/hiraganaData';
import rawKatakanaCharacters  from '../../components/katakanaData';
import rawRomaji  from '../../components/RomajiData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IonIcon from 'react-native-vector-icons/Ionicons';
const Flashcard = () => {
  const [isFront, setIsFront] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [activeSet, setActiveSet] = useState('hiragana'); 
  const [activeSetType, setActiveSetType] = useState('hiragana'); 
  const [shuffleCards, setShuffleCards] = useState(false);
  const [flashcards, setFlashcards] = useState([]); 
  const hiraganaCharacters = rawHiraganaCharacters.filter(item => item != null);
  const KatakanaCharacters = rawKatakanaCharacters.filter(item => item != null);
  const romaji = rawRomaji.filter(item => item != null);
  const [customFlashcards, setCustomFlashcards] = useState([]);

  const toggleCard = () => setIsFront(!isFront);
  const shuffleArray = array => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  };
  const nextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFront(true);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFront(true);
    }
  };

  const switchToHiragana = () => {
    setActiveSet('hiragana');
    setActiveSetType('hiragana');
    setCurrentCardIndex(0);
    setIsFront(true);
  };
  
  const switchToKatakana = () => {
    setActiveSet('katakana');
    setActiveSetType('katakana');
    setCurrentCardIndex(0);
    setIsFront(true);
  };
  const switchToCustom = () => {
    setActiveSet('custom');
    setActiveSetType('custom');
    setCurrentCardIndex(0);
    setIsFront(true);
  };
  const addToCustomList = () => {
    const currentFlashcard = flashcards[currentCardIndex];
    if (!customFlashcards.find(card => card.question === currentFlashcard.question)) {
      const newCustomFlashcards = [...customFlashcards, currentFlashcard];
      setCustomFlashcards(newCustomFlashcards);
      storeData(newCustomFlashcards);
    }
  };
  const removeFromCustomList = () => {
    const currentFlashcard = flashcards[currentCardIndex];
    const newCustomFlashcards = customFlashcards.filter(card => card.question !== currentFlashcard.question);
    setCustomFlashcards(newCustomFlashcards);
    storeData(newCustomFlashcards);
  
    // Adjust currentCardIndex if the last card is removed
    if (currentCardIndex === customFlashcards.length - 1 && currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };
  
  const onCheckBoxChange = () => {
    setShuffleCards(!shuffleCards);
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@customFlashcards', jsonValue)
    } catch (e) {
      // saving error
      console.error('Error storing data', e);
    }
  }
  useEffect(() => {
    let newFlashcards;
    if (activeSet === 'hiragana') {
      newFlashcards = hiraganaCharacters.map((char, index) => ({
        id: index, question: char, answer: romaji[index]
      }));
    } else if (activeSet === 'katakana') {
      newFlashcards = KatakanaCharacters.map((char, index) => ({
        id: index, question: char, answer: romaji[index]
      }));
    } else { // activeSet is 'custom'
      newFlashcards = customFlashcards;
    }
  
    if (shuffleCards) {
      newFlashcards = shuffleArray([...newFlashcards]);
    }
    setFlashcards(newFlashcards);
  }, [shuffleCards, activeSet, customFlashcards])

  useEffect(() => {
    setCurrentCardIndex(0);
  }, [activeSet,shuffleCards]); 
  useEffect(() => {
    const loadCustomFlashcards = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@customFlashcards');
        const loadedFlashcards = jsonValue != null ? JSON.parse(jsonValue) : [];
        setCustomFlashcards(loadedFlashcards);
      } catch (e) {
        console.error('Error reading data', e);
      }
    };
  
    loadCustomFlashcards();
  }, []);
return (
  <View style={styles.container}>
    
    <View style={styles.switcher}>
      <View style={styles.Buttonstyles}>
      <Button 
        onPress={switchToHiragana}
        title="Hiragana"
        color={activeSetType === 'hiragana' ? "#228B22" : "#4390f7"}
      />
      </View>
      <View style={styles.Buttonstyles}>
        <Button
        onPress={switchToKatakana}
        title="Katakana"
        color={activeSetType === 'katakana' ? "#228B22" : "#4390f7"}
      />
      </View>
      <View style={styles.Buttonstyles}>
        <Button
        onPress={switchToCustom}
        title="Chưa thuộc"
        color={activeSetType === 'custom' ? "#228B22" : "#4390f7"}
      />
      </View>     
    </View>
    <View style={styles.flashcard}>
        <TouchableOpacity onPress={toggleCard}>
          {flashcards.length > 0 && currentCardIndex < flashcards.length ? (
            <Text style={styles.cardText}>
              {isFront ? flashcards[currentCardIndex].question : flashcards[currentCardIndex].answer}
              
            </Text>
            
          ) : (
            <Text style={styles.cardText1} >Hãy thêm từ chưa nhớ vào</Text>
          )}
        </TouchableOpacity>
        
      </View>
      {activeSet !== 'custom' && (
          <TouchableOpacity onPress={addToCustomList} style={styles.chuathuoccontainer}>
            <IonIcon name="add-circle-outline" size={30} color="#4390f7" /> 
            <Text>Chưa nhớ</Text>
          </TouchableOpacity>
      )}
        {activeSet == 'custom' && (
              <TouchableOpacity onPress={removeFromCustomList} style={styles.chuathuoccontainer}>
                <IonIcon name="remove-circle-outline" size={30} color="#4390f7" /> 
                <Text>Đã nhớ</Text>
              </TouchableOpacity>
      )}
    <View style={styles.navigation}>
    
      <View style={styles.Buttonstyles}>
          <Button
            onPress={prevCard}
            title="Lùi lại"
            color="#4390f7"
          />    
      </View>
     <View style={styles.Buttonstyles}>
     <Button
        onPress={nextCard}
        title="Tiếp theo"
        color="#4390f7"
      />
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
    justifyContent: 'center', 
  }, 
  switcher: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  switcherText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: 'red',
  },
  Buttonstyles:{
    borderRadius:20,
    margin:10,
  },
  chuathuoccontainer: {
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically

  },
  
  flashcard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  cardText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardText1:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navigation: {
    flexDirection: 'row',
    marginTop: 10,

  },
  navText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: 'blue',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Flashcard;
