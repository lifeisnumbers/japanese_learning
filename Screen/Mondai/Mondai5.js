import React,{useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button ,ScrollView} from 'react-native';
import { Audio } from 'expo-av';
import IonIcon from 'react-native-vector-icons/Ionicons';
const Mondai5 = () => {
  const [sound, setSound] = useState();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const playSound = async () => {
    console.log('Loading Sound');
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/audio/5-1.mp3')
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
        <Text style={styles.label1}>1.日曜日にちようび　どこへ　行いきますか。</Text> 
        <Text style={styles.label4}>Chủ nhật sẽ đi đâu vậy?</Text>
        <Text style={styles.label2}>京都きょうとへ　行いきます</Text>
        <Text style={styles.label4}>Sẽ đi Kyoto</Text> 
        <Text style={styles.label1}>2.なんで　スーパーへ　行いきますか。</Text> 
        <Text style={styles.label4}>Đi siêu thị bằng gì vậy?</Text>
        <Text style={styles.label2}>自動車じどうしゃで　行いきます。。</Text> 
        <Text style={styles.label4}>Đi bằng xe hơi.</Text>
        <Text style={styles.label1}>3.だれと　スーパーへ　行いきますか。</Text> 
        <Text style={styles.label4}>Đi siêu thị với ai vậy?</Text>
        <Text style={styles.label2}>一人ひとりで　行いきます。。</Text>
        <Text style={styles.label4}>Đi một mình.</Text> 
        <Text style={styles.label1}>4.あなたの　テープレコーダーは　にほんのですか。</Text> 
        <Text style={styles.label4}>Máy hát đĩa của bạn là của Nhật à?</Text>
        <Text style={styles.label2}>いいえ、にほんの　じゃ　ありません。</Text>
        <Text style={styles.label4}>Không, không phải là của Nhật.</Text>
        <Text style={styles.label1}>5.あなたの　とけいは　いくらですか。</Text> 
        <Text style={styles.label4}>Đồng hồ của bạn giá bao nhiêu vậy?</Text>
        <Text style={styles.label2}>16,500えんです。</Text>
        <Text style={styles.label4}>16,500 yên.</Text>
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

export default Mondai5;