import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList,Modal,Switch } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Context } from '../../Context/Provider';
import { Picker } from '@react-native-picker/picker';
const KanjiKiemtra = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [testMode, setTestMode] = useState('multipleChoice'); // 'multipleChoice' or 'textInput'
  const { selectedLesson } = useContext(Context);
  const [result, setResult] = useState([]);
  const [resultWrong, setResultWrong] = useState([]);
  const [resultquestions, setResultquestions] = useState([]);
  const [isResultModalVisible, setIsResultModalVisible] = useState(false);
  const [refetchTrigger, setRefetchTrigger] = useState(false);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [tempTimerEnabled, setTempTimerEnabled] = useState(timerEnabled);
  const [initialTimerDuration, setInitialTimerDuration] = useState(10); // Thời gian người dùng thiết lập
  const [currentTimer, setCurrentTimer] = useState(initialTimerDuration); // Thời gian còn lại

  useEffect(() => {
    let countdown = null;
    if (timerEnabled && questions.length > 0 && currentQuestionIndex < questions.length) {
      setCurrentTimer(initialTimerDuration); // Reset đồng hồ với thời gian bắt đầu
      countdown = setInterval(() => {
        setCurrentTimer(prevTimer => {
          if (prevTimer === 1) {
            clearInterval(countdown); // Dừng đồng hồ khi hết giờ
            handleTimeout(); // Xử lý khi hết giờ
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
  
    return () => clearInterval(countdown);
  }, [currentQuestionIndex, questions.length, timerEnabled, initialTimerDuration]);
  
  const handleTimeout = () => {
    // Xử lý khi người dùng không trả lời kịp trước khi hết giờ\
    const question = questions[currentQuestionIndex];
    resultquestions.push(question.correctAnswer);
    setResultWrong([...resultWrong, questions[currentQuestionIndex].question]);
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex + 1 < numberOfQuestions && currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      setIsResultModalVisible(true);
    }
  };

  const handleTimerDurationChange = (value) => {
    setInitialTimerDuration(value); // Thay đổi thời gian bắt đầu
  };
  useEffect(() => {
    fetch(`https://api-japan-2.vercel.app/api/kanji/getByBai?bai=${selectedLesson}`)
      .then(response => response.json())
      .then(data => {
        let shuffledQuestions = data.map(item => ({
          question: item.Kanji,
          correctAnswer: item.Hantu, // or item.nghia for meaning
          allAnswers: shuffleArray([item.Hantu, ...getRandomAnswers(data, item.Hantu)])
        }));
        shuffledQuestions = shuffleArray(shuffledQuestions); // Shuffle the questions
        setQuestions(shuffledQuestions);
      })
      .catch(error => console.error(error));
  }, [selectedLesson,refetchTrigger]);
  

  const getRandomAnswers = (data, correctAnswer) => {
    let answers = [];
    while (answers.length < 3) {
      const randomAnswer = data[Math.floor(Math.random() * data.length)].Hantu; // or .nghia
      if (randomAnswer !== correctAnswer && !answers.includes(randomAnswer)) {
        answers.push(randomAnswer);
      }
    }
    return answers;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswerSubmit = (answer) => {
    const question = questions[currentQuestionIndex];
    if (answer === question.correctAnswer) {
      setResult([...result, question.question]);
    } else {
      resultquestions.push(question.correctAnswer);
      setResultWrong([...resultWrong, question.question]);
    }

    if (currentQuestionIndex + 1 < numberOfQuestions && currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
    } else {
      setQuizCompleted(true);
      setIsResultModalVisible(true);
    }
  };
  const handleAnswerSubmit1 = () => {
    const question = questions[currentQuestionIndex]; 
    if (userAnswer.trim() === question.correctAnswer) {
      setResult([...result, question.question]);
    } else {
      setResultWrong([...resultWrong, question.question]);
      resultquestions.push(question.correctAnswer); // Store correct answer for review
    }
  
    if (currentQuestionIndex + 1 < numberOfQuestions && currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      setIsResultModalVisible(true);
    }
    setUserAnswer(''); // Reset answer field for the next question
  };
  

  const handleRestart = () => {
    // Reset the quiz
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setRefetchTrigger(!refetchTrigger);
    setResult([]);
    setResultWrong([]);
    setQuizCompleted(false);
    setIsResultModalVisible(false);
    setResultquestions([]);
  };
  const saveSettings = () => {
    setTimerEnabled(tempTimerEnabled);
    setIsSettingsModalVisible(false);
    // Các thay đổi cài đặt khác
  };
  const toggleSettingsModal = () => {
    setTempTimerEnabled(timerEnabled);
    setIsSettingsModalVisible(!isSettingsModalVisible);
  };
  

  const handleNumberOfQuestionsChange = (value) => {
    setNumberOfQuestions(value);
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={toggleSettingsModal} style={styles.settingsIcon}>
        <IonIcon name="settings-outline" size={30} />
      </TouchableOpacity>
     { timerEnabled &&
      <Text style={styles.timetext}>Thời gian còn lại: {currentTimer} giây</Text>
     } 
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSettingsModalVisible}
        onRequestClose={toggleSettingsModal}
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
          <Text>Phương thức: {testMode === 'multipleChoice' ? 'Trắc nghiệm' : 'Nhập'}</Text>
          <Picker
            selectedValue={testMode}
            style={styles.picker}
            onValueChange={(itemValue) => setTestMode(itemValue)}
          >
            <Picker.Item label="Trắc nghiệm" value="multipleChoice" />
            <Picker.Item label="Nhập" value="textInput" />
          </Picker>
          <Switch
            value={tempTimerEnabled}
            onValueChange={setTempTimerEnabled}
          />

          <Text>Kích hoạt đồng hồ đếm ngược</Text>

          {tempTimerEnabled && (
            <>
              <Text>Thời gian cho mỗi câu hỏi (giây):</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleTimerDurationChange}
                value={initialTimerDuration.toString()}
                placeholder="10"
                keyboardType="numeric"
              />
            </>
          )}
          <Button title="Save Settings" onPress={saveSettings} />
        </View>
      </Modal>
      {!quizCompleted ? (
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            {questions[currentQuestionIndex]?.question}
          </Text>
          {testMode === 'multipleChoice' ? (
            <View>
              <Text style={styles.textlabel}>Chọn đáp án đúng</Text>
                <View style={styles.answerContainer}>
              {questions[currentQuestionIndex]?.allAnswers.map((answer, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.answerButton} 
                  onPress={() => handleAnswerSubmit(answer)}
                >
                  <Text>{answer}</Text>
                </TouchableOpacity>
              ))}
            </View>
            </View>
            
          ) : (
            <View>
              <Text style={styles.textlabel}>Nhập đáp án đúng</Text>
              <TextInput
                style={styles.input}
                value={userAnswer}
                onChangeText={setUserAnswer}
                placeholder="Enter your answer"
                autoCapitalize="none"
              />
              <Button title="Kiểm tra" onPress={handleAnswerSubmit1} />
            </View>
          )}
        </View>
      ) : null}
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  score: {
    fontSize: 22,
    color: 'green'
  },
  settingsIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
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
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerContainer: {
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-around', // Evenly space out buttons
    width: '100%', // Take full width to accommodate buttons
    marginTop: 20,
  },
  answerButton: {
    backgroundColor: '#4390f7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10, // Add horizontal margin for spacing
    borderRadius: 10,
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
  textlabel:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timetext:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
    marginBottom: 10,
  }
});

export default KanjiKiemtra;
