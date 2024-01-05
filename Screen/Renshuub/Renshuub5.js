
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Renshuub5 = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const handleButtonPress = () => {
    setIsButtonPressed((prevState) => !prevState);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.contaianh}>
          <Image source={require('../../assets/5-0.jpg')} style={{ width: screenWidth, height: 80 }} />
        </View>
        <Text style={styles.label1}>れい</Text>
        <Text style={styles.label2}>例: ⇒ スーパーへ　行いきます。</Text>
        <Text style={styles.label4}>Tôi đi đến siêu thị.</Text>
        <Text style={styles.label3}>Hoàn thành các câu sau: </Text>
        <Text style={styles.label3}>１）⇒ ２）⇒ ３）⇒ ４）⇒</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Bài giả" onPress={handleButtonPress} />
          </View>
        </View>

        {isButtonPressed && (
          <View style={styles.displayedText}>
            <Text style={styles.label2}>１） 郵便局ゆうびんきょくへ　行いきます。</Text>
            <Text style={styles.label4}>Tôi đi đến bưu điện.</Text>
            <Text style={styles.label2}>２） デパートへ　行いきます。</Text>
            <Text style={styles.label4}>Tôi đi đến trung tâm thương mại.</Text>
            <Text style={styles.label2}>３） 銀行ぎんこうへ　行いきます。</Text>
            <Text style={styles.label4}>Tôi đi đến ngân hàng.</Text>
            <Text style={styles.label2}>４） びじゅつかんへ　行いきます。</Text>
            <Text style={styles.label4}>Tôi đi đến bảo tàng mỹ thuật.</Text>
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

export default Renshuub5;
