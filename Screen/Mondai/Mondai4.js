import React,{useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button ,ScrollView} from 'react-native';
import { Audio } from 'expo-av';
import IonIcon from 'react-native-vector-icons/Ionicons';
const Mondai4 = () => {
  const [sound, setSound] = useState();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const playSound = async () => {
    console.log('Loading Sound');
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/audio/4-1.mp3')
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
        <Text style={styles.label1}>1.今 何時 ですか。</Text> 
        <Text style={styles.label4}>Bây giờ là mấy giờ vậy?</Text>
        <Text style={styles.label2}>10時です。</Text>
        <Text style={styles.label4}>Là 10 giờ.</Text> 
        <Text style={styles.label1}>2.あなたの 国の　銀行は　何時から　何時までですか。</Text> 
        <Text style={styles.label4}>Ngân hàng nước của bạn mở cửa từ mấy giờ đến mấy giờ vậy?</Text>
        <Text style={styles.label2}>とうきょうです。</Text> 
        <Text style={styles.label4}>Ở Tokyo.</Text>
        <Text style={styles.label1}>3.あなたの　とけいは　どこの　とけいですか。</Text> 
        <Text style={styles.label4}>Đồng hồ của bạn là đồng hò của đâu vậy?</Text>
        <Text style={styles.label2}>にほんのです。</Text>
        <Text style={styles.label4}>Là của Nhật.</Text> 
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

export default Mondai4;