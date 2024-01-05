import React,{useState} from 'react';
import { View, Text, StyleSheet, Image,Button,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
// sử dụng screenWidth để đặt chiều rộng cho ảnh
const Renshuub1 = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const handleButtonPress = () => {
    setIsButtonPressed(prevState => !prevState); // Toggle the state
  };
  return (    
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.contaianh}>
        <Image 
          source={require('../../assets/1-1.jpg')} 
          style={{ width: screenWidth, height: 170 }} 
        />
        </View> 
        <Text style={styles.label1}>れい</Text> 
        <Text style={styles.label2} >例:  　⇒　ミラーさんは　アメリカじん　です。</Text>
        <Text style={styles.label3}>Hoàn thành các câu sau:  </Text>
        <Text  style={styles.label3}>１）⇒  ２）⇒  ３）⇒  ４）⇒</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Bài giả" onPress={handleButtonPress} />
          </View>
        </View>

        {isButtonPressed && <View style={styles.displayedText}>
         <Text style={styles.label2}>１）やまださんは　にほんじん　です。</Text> 
         <Text style={styles.label4}>Chị Yamada là người Nhật.</Text>
         <Text style={styles.label2}>２）ワットさんは　イギリスじん　です。</Text> 
         <Text style={styles.label4}>Anh Watt là người Anh.</Text>
         <Text style={styles.label2}>３）タワポンさんは　タイじん　です。</Text> 
         <Text style={styles.label4}>Anh Thawaphon là người Thái.</Text>
         <Text style={styles.label2}>４）シュミットさんは　ドイツじん　です。</Text>
        <Text style={styles.label4}>Anh Schmidt là người Đức.</Text>  
          </View>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  contaianh:{
    marginTop: 10,
  },
  label1: {
    fontSize:10,
  },
  label2: {
    fontSize: 18,
    },

  label3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  label4:{
    fontSize: 24,
    color: 'blue',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 100,
    height: 50,
  },
  displayedText: {
   justifyContent: 'center',
   alignItems: 'center',
  },
});

export default Renshuub1;