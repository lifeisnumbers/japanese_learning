import React,{useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button ,ScrollView} from 'react-native';
import { Audio } from 'expo-av';
import IonIcon from 'react-native-vector-icons/Ionicons';
const Mondai2 = () => {
  const [sound, setSound] = useState();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const playSound = async () => {
    console.log('Loading Sound');
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/audio/2-1.mp3')
      );
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync(); 
    } catch (error) {
      console.error('Error loading or playing sound:', error);
    }
  };
  const handleButtonPress = () => {
    setIsButtonPressed(prevState => !prevState); // Toggle the state
  };

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); 
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nghe và trả lời câu hỏi?</Text>
      <TouchableOpacity onPress={playSound}>
        <IonIcon name="play-circle" size={50} color="#0000ff" />
      </TouchableOpacity>
      
      <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Bài giả" onPress={handleButtonPress} />

          </View>
          <ScrollView>
          {isButtonPressed && <View style={styles.displayedText}>
        <Text style={styles.label1}>1.これは　てちょうですか。</Text> 
        <Text style={styles.label4}>Cái này là sổ tay phải không?</Text>
        <Text style={styles.label2}>はい、そうです。。</Text>
        <Text style={styles.label4}>Vâng, đúng vậy.</Text> 
        <Text style={styles.label1}>2.これは　コンピューターですか、テープレコーダーですか。</Text> 
        <Text style={styles.label4}>Cái này là máy vi tính hay là  máy hát đĩa vậy?</Text>
        <Text style={styles.label2}>コンピューターです。</Text> 
        <Text style={styles.label4}>Là máy vi tính.</Text>
        <Text style={styles.label1}>3.これは　なんですか。</Text> 
        <Text style={styles.label4}>Cái này là gì vậy?</Text>
        <Text style={styles.label2}>めいしです。</Text>
        <Text style={styles.label4}>Là danh thiếp.</Text> 
        <Text style={styles.label1}>4.これは　なんの　ざっしですか。。</Text> 
        <Text style={styles.label4}>Cái này là tạp chí gì vậy?</Text>
        <Text style={styles.label2}>じどうしゃの　ざっしです。</Text>
        <Text style={styles.label4}>Là tạp chí xe hơi.</Text>
        <Text style={styles.label1}>5.このかばんは　あなたのですか</Text> 
        <Text style={styles.label4}>Cái cặp này là của bạn phải không?</Text>
        <Text style={styles.label2}>いいえ、わたしの　じゃ　ありません。</Text>
        <Text style={styles.label4}>Không, không phải là của tôi.</Text>
          </View>}
          </ScrollView>
        </View>
        
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 50,
  },
  label2: {
    fontSize: 18,
  },
  label1:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  label4:{
    fontSize: 18,
    color: 'blue',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
  },
  displayedText: {
 
  },

});

export default Mondai2;