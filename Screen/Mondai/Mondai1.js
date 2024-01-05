import React,{useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button ,ScrollView} from 'react-native';
import { Audio } from 'expo-av';
import IonIcon from 'react-native-vector-icons/Ionicons';
const Mondai1 = () => {
  const [sound, setSound] = useState();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const playSound = async () => {
    console.log('Loading Sound');
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/audio/1-1.mp3')
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
         <Text style={styles.label1}>あなたは　せんせいですか。</Text> 
         <Text style={styles.label4}>Bạn là giáo viên hả?</Text>
         <Text style={styles.label2}>いいえ、わたしは　は　せんせいじゃ　ありません。</Text> 
         <Text style={styles.label4}> Không, tôi không phải là giáo viên.</Text>
         <Text style={styles.label1}>1.たは　サントスさんですか。</Text> 
         <Text style={styles.label4}>Bạn là Santos phải không?.</Text>
         <Text style={styles.label2}>いいえ、サントスじゃ　ありません。</Text>
        <Text style={styles.label4}>Ví dụ: Không, tôi không phải là Santos.</Text> 
        <Text style={styles.label1}>2.おなまえは？</Text> 
         <Text style={styles.label4}>Bạn tên là gì?</Text>
         <Text style={styles.label2}>マイク　ミラーです。</Text> 
         <Text style={styles.label4}>Mike Miller.</Text>
         <Text style={styles.label1}>3.なんさいですか。</Text> 
         <Text style={styles.label4}>Bạn bao nhiêu tuổi?</Text>
         <Text style={styles.label2}>いいえ、サントスじゃ　ありません。</Text>
        <Text style={styles.label4}>２８さいです。</Text> 
        <Text style={styles.label1}>4.アメリカじんですか。</Text> 
         <Text style={styles.label4}>Bạn là người Mỹ phải không?</Text>
         <Text style={styles.label2}>はい、アメリカじんです。</Text>
        <Text style={styles.label4}>Vâng, tôi là người Mỹ</Text>
        <Text style={styles.label1}>5.エンジニアですか。</Text> 
         <Text style={styles.label4}>Bạn là kỹ sư phải không?</Text>
         <Text style={styles.label2}>いいえ、エンジニアじゃ　ありません。</Text>
        <Text style={styles.label4}>Không, tôi không phải kỹ sư.</Text>
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

export default Mondai1;