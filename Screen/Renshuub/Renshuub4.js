
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Renshuub4 = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const handleButtonPress = () => {
    setIsButtonPressed((prevState) => !prevState);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.contaianh}>
          <Image source={require('../../assets/4-0.jpg')} style={{ width: 410, height: 70 }} />
        </View>
        <Text style={styles.label1}>れい</Text>
        <Text style={styles.label2}>例: ⇒ ３時じ（さんじ）　です。</Text>
        <Text style={styles.label4}> 3 giờ.</Text>
        <Text style={styles.label3}>Hoàn thành các câu sau: </Text>
        <Text style={styles.label3}>１）⇒ ２）⇒ ３）⇒ ４）⇒</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Bài giả" onPress={handleButtonPress} />
          </View>
        </View>

        {isButtonPressed && (
          <View style={styles.displayedText}>
            <Text style={styles.label2}>１）７時じ半（７じはん）です。</Text>
            <Text style={styles.label4}>7 giờ rưỡi.</Text>
            <Text style={styles.label2}>２）１２時じ１５ふんです。</Text>
            <Text style={styles.label4}>12 giờ 15 phút.</Text>
            <Text style={styles.label2}>３）２時じ４５ふんです。</Text>
            <Text style={styles.label4}>2 giờ 45 phút.</Text>
            <Text style={styles.label2}>４）１０時じ２０ぷんです。</Text>
            <Text style={styles.label4}>10 giờ 20 phút.</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contaianh: {
    marginTop: 10,
  },
  label1: {
    fontSize: 10,
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
  label4: {
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

export default Renshuub4;
