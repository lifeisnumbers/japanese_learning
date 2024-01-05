import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Button, TextInput ,Modal} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import rawHiraganaCharacters from '../../components/hiraganaData';
import rawKatakanaCharacters  from '../../components/katakanaData';
import rawRomaji  from '../../components/RomajiData';
import IonIcon from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get('window');

const numColumns = 1; // Số cột trong danh sách câu hỏi
const numAnswers = 4; // Số lựa chọn đáp án
const cellWidth = Math.floor(width); // Chiều rộng của mỗi ô

const KiemtraScreen = () => {
  const [questions, setQuestions] = useState([]); // Danh sách câu hỏi và đáp án
  const [result, setResult] = useState([]);
  const [resultWrong, setResultWrong] = useState([]);
  const [resultquestions, setResultquestions] = useState([]);
  const [activeSet, setActiveSet] = useState('hiragana'); 
  const [userInput, setUserInput] = useState('');
  const [numberOfQuestions, setnumberOfQuestions] = useState(10);
  const [presentedQuestionCount, setPresentedQuestionCount] = useState(0);
  const [testMode, setTestMode] = useState("Trắc nghiệm");
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [isResultModalVisible, setIsResultModalVisible] = useState(false);
  
  const hiraganaCharacters = rawHiraganaCharacters.filter(item => item != null);
  const KatakanaCharacters = rawKatakanaCharacters.filter(item => item != null);
  const romaji = rawRomaji.filter(item => item != null);

  useEffect(() => {
    generateQuestions();
  }, [activeSet]);
  useEffect(() => {
    if (presentedQuestionCount === numberOfQuestions) {
      setIsResultModalVisible(true); // Hiển thị modal kết quả
      setPresentedQuestionCount(0);
    }
  }, [presentedQuestionCount, numberOfQuestions]);
  const handleNumberOfQuestionsChange = (value) => {
    setnumberOfQuestions(value);
  };

  const switchToHiragana = () => {
    setActiveSet('hiragana');
  };
  
  const switchToKatakana = () => {
    setActiveSet('katakana');
  };
  // Tạo câu hỏi và đáp án ngẫu nhiên
  const generateQuestions = () => {
    const newQuestions = [];
    const scriptCharacters = activeSet === 'hiragana' ? hiraganaCharacters : KatakanaCharacters;
    while (newQuestions.length < numColumns) {
      const randomIndex = Math.floor(Math.random() * scriptCharacters.length);
      const questionCharacter = scriptCharacters[randomIndex];
      const correctAnswerIndex = scriptCharacters.indexOf(questionCharacter);
      const answerOptions = getRandomAnswerOptions(romaji[correctAnswerIndex])
      newQuestions.push({
        id: newQuestions.length.toString(),
        question: questionCharacter,
        answers: answerOptions,
        correctAnswer: romaji[correctAnswerIndex],
      });
    }
    setQuestions(newQuestions);
  };
  

  // Lấy 4 đáp án ngẫu nhiên từ romaji, bao gồm đáp án đúng
  const getRandomAnswerOptions = (correctAnswer) => {
    const answerOptions = [correctAnswer]; // Bắt đầu với đáp án đúng
    while (answerOptions.length < numAnswers) {
      const randomIndex = Math.floor(Math.random() * romaji.length);
      const randomAnswer = romaji[randomIndex];
      if (randomAnswer !== null && !answerOptions.includes(randomAnswer)) {
        answerOptions.push(randomAnswer);
      }
    }
    return shuffleArray(answerOptions); // Xáo trộn các đáp án để chúng không cố định ở vị trí đầu
  };

  // Hàm để xáo trộn mảng
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Kiểm tra câu trả lời
  const checkAnswer = (question, selectedAnswer) => {

      console.log(question.question);
    if (question.correctAnswer === selectedAnswer) {
      result.push(question.question);
      console.log(result);
    } else {
      resultWrong.push(question.question);
      resultquestions.push(question.correctAnswer);
      console.log(resultWrong);
      console.log(resultquestions);
    }
    setPresentedQuestionCount(presentedQuestionCount + 1);
    if (presentedQuestionCount + 1 < numberOfQuestions) {
      generateQuestions(); // Generate next question
    }
    else {
      // alert('Kết thúc bài kiểm tra!');
      setPresentedQuestionCount(0);
      generateQuestions();  // Generate next question
      setIsResultModalVisible(true);
    }
  };
  const checkAnswer1 = (question) => {
    if (question.correctAnswer === userInput.trim()) {
      result.push(question.question);
    } else {
      resultWrong.push(question.question);
      resultquestions.push(question.correctAnswer);
    }
    setPresentedQuestionCount(presentedQuestionCount + 1);
    if (presentedQuestionCount + 1 < numberOfQuestions) {
      generateQuestions();
      setUserInput(''); // Reset the input field
    }
    else {
      setPresentedQuestionCount(0);
      generateQuestions();  // Generate next question
      setIsResultModalVisible(true);
      setUserInput(''); 
    }
    
  };
  const handleRestart = () => {
    setResult([]);
    setResultquestions([]);
    setResultWrong([]);
    setPresentedQuestionCount(0);
    setIsResultModalVisible(false); // Ẩn modal kết quả
    generateQuestions(); // Tạo lại câu hỏi mới
  };
  return (
    <View style={styles.container}>
      <Modal
      animationType="slide"
      transparent={true}
      visible={isSettingsModalVisible}
      onRequestClose={() => {
        setIsSettingsModalVisible(!isSettingsModalVisible);
      }}
      >
      <View style={styles.modalView}>
        <Text>Số câu hỏi:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleNumberOfQuestionsChange}
          value={numberOfQuestions.toString()}
          placeholder="10"
          keyboardType="numeric"
        />
        <Text>Phương thức:{testMode}</Text>
          <Picker
            selectedValue={testMode}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setTestMode(itemValue)
            }>
            <Picker.Item label="Trắc nghiệm" value="Trắc nghiệm" />
            <Picker.Item label="Nhập" value="Nhập" />
          </Picker>
          <Button title="Save Settings" onPress={() => setIsSettingsModalVisible(false)} />
        </View>
      </Modal>

      <View style={styles.switcher}>
        <View style={styles.switcher1}>
          <View style={styles.Buttonstyles}>
            <Button 
            onPress={switchToHiragana}
            title="Hiragana"
            color={activeSet === 'hiragana' ? "#228B22" : "#4390f7"}
            />
          </View>
          <View style={styles.Buttonstyles}>
          <Button
          onPress={switchToKatakana}
          title="Katakana"
          color={activeSet === 'katakana' ? "#228B22" : "#4390f7"}
          />
          </View>
        </View> 
        <View style={styles.settingsButtonContainer}>
           <TouchableOpacity style={styles.setingicon}>
              <IonIcon name="settings-outline" size={30} color="#4390f7" onPress={() => setIsSettingsModalVisible(true)} />
            </TouchableOpacity>
        </View>
      </View>
      
      <FlatList
      data={questions}
      renderItem={({ item }) => (
       <View style={styles.questionContainer}>
        <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>
              {item.question}
          </Text>
      </View>
      
      {testMode === "Trắc nghiệm" ? (
        <View>
          <Text style={styles.textlabel}>Chọn đáp án đúng</Text>
            <View style={styles.answersContainer}>
              
              {item.answers.map((answer, index) => (
                <TouchableOpacity
                  key={index.toString()}
                  style={styles.answerButton}
                  onPress={() => checkAnswer(item, answer)}
                >
                  <Text style={styles.answerText}>{answer}</Text>
                </TouchableOpacity>
              ))}
            </View>
        </View>
      ) : (
        <View>
          <Text style={styles.textlabel}>Nhập đáp án đúng</Text>
          <TextInput 
          style={styles.input}
          onChangeText={setUserInput}
          value={userInput}
          placeholder="Nhập đáp án"
          keyboardType="default"
          autoCapitalize="none"
        />
        <Button 
        title="Kiểm tra"
        onPress={() => checkAnswer1(item)}
        style={styles.Buttonstyles1}
      />
        </View>  
      )} 
    </View>
  )}
      keyExtractor={(item) => item.id}
      />   
      <Modal
      animationType="slide"
      transparent={true}
      visible={isResultModalVisible}
      onRequestClose={() => setIsResultModalVisible(false)}
    >
  
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsHeader}>Kết quả Bài Kiểm Tra</Text>
        <Text style={styles.correctAnswers}>Số câu đúng: {result.length}</Text>
        <Text style={styles.incorrectAnswers}>Số câu sai: {resultWrong.length}</Text>
        <View style={styles.detailedResults}>
          <Text>{result.map((item, index) => (
            <Text key={index} style={styles.correctItem}>　{item}</Text>
          ))}</Text>
          <Text>
          {resultWrong.map((item, index) => (
            <Text key={index} style={styles.incorrectItem}>　{item}</Text>
          ))}
          
          </Text>
          <Text>
          {resultquestions.map((item, index) => (
            <Text key={index} style={styles.correctItem}>　{item}</Text>
          ))}
          </Text>
          <Button title="Bắt đầu lại" onPress={handleRestart} />
        </View>
      </View> 
    </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  questionTextContainer: {
    flexDirection: 'row', // Để các phần tử con sắp xếp theo chiều ngang
    alignItems: 'center',
  },
  questionText: {
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 10,
 
  },
  answersContainer: {
    flexDirection: 'row', // Xếp các đáp án theo chiều ngang
    justifyContent: 'space-between', // Cách đều các đáp án
    width: cellWidth * 0.8, // Sử dụng 80% chiều rộng của màn hình
    marginTop: 20,
  },
  answerButton: {
    backgroundColor: '#4390f7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
  answerText: {
    fontSize: 18,
  },
  textlabel:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  switcher: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 20,
  },
  switcher1:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 140,
  },
  Buttonstyles:{
    borderRadius:20,
    margin:10,
  },
  Buttonstyles1:{
    borderRadius:20,
    margin:10,
    width: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  settingsButtonContainer:{
    justifyContent:'space-evenly',
  },
  setingicon:{
    marginLeft:50,
  },
  modalView:{
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    flex:1,
  },
  picker: {
    height: 50,
    width: '55%',
    backgroundColor: '#32CD32', // Xanh lá nhạt
    color: 'white', // Chữ màu trắng để dễ đọc
    marginTop: 10,
    marginBottom: 10,
  },
  resultsContainer: {
    backgroundColor: "white",
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },
  resultsHeader: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  correctAnswers: {
    color: 'green',
    fontSize: 18,
  },
  incorrectAnswers: {
    color: 'red',
    fontSize: 18,
  },
  detailedResults: {
    marginTop: 10,
    alignItems: 'center',
  },
  correctItem: {
    color: 'green',
  },
  incorrectItem: {
    color: 'red',
  },

  }
);

export default KiemtraScreen;
