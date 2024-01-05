import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Nguphap5 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headertext}>1.Danh từ (địa điểm) へ いきます/ きます/ かえります</Text>
        <Text>
          Khi động từ chỉ sự di chuyển thì trợ từ 「へ」 được dùng sau danh từ chỉ phương hướng hoặc địa điểm
        </Text>

        <Text style={styles.colortim}>きょうとへいきます。</Text>
        <Text style={styles.colorblue}>Tôi đi Kyoto</Text>

        <Text style={styles.colortim}>日本へきました。</Text>
        <Text style={styles.colorblue}>Tôi đã đến Nhật Bản</Text>

        <Text style={styles.colortim}>うちへかえります。</Text>
        <Text style={styles.colorblue}>Tôi về nhà</Text>

        <Text style={styles.colorred}>Chú ý: Trợ từ 「へ」 phát âm là 「え」</Text>

        <Text style={styles.headertext}>2.どの 「へ」 もいきません/ いきませんでした</Text>
        <Text>
          Khi muốn phủ định hoàn toàn đối tượng (hoặc phạm vi) của từ nghi vấn thì dùng trợ từ 「も」 . Trong mẫu
          câu này thì động từ để ở dạng phủ định.
        </Text>

        <Text style={styles.colortim}>どこもいきません。</Text>
        <Text style={styles.colorblue}>Tôi không đi đâu cả.</Text>

        <Text style={styles.colortim}>なにもたべません。</Text>
        <Text style={styles.colorblue}>Tôi không ăn gì cả.</Text>

        <Text style={styles.colortim}>だれもいません。</Text>
        <Text style={styles.colorblue}>Không có ai cả.</Text>

        <Text style={styles.headertext}>3.いつ</Text>
        <Text>
          Khi muốn hỏi về thời điểm thực hiện một hành động nào đó thì ngoài cách dùng từ nghi vấn 「なん」 như
          「なんじ」 「なんようび」 「なんがつなんにち」 còn có thể dùng từ nghi vấn 「いつ (khi nào) 」 . Đối
          với 「いつ」 thì không dùng trợ từ 「に」 ở sau.
        </Text>

        <Text style={styles.colortim}>いつ日本へきましたか。</Text>
        <Text style={styles.colorblue}> Bạn đã đến Nhật bao giờ?</Text>

        <Text style={styles.colortim}>いつひろしまへいきますか。</Text>
        <Text style={styles.colorblue}>Bao giờ bạn sẽ đi Hiroshima.</Text>

        <Text style={styles.headertext}>4.Câu よ</Text>
        <Text>
          Từ 「よ」 được đặt ở cuối câu để nhấn mạnh một thông tin nào đó mà người nghe chưa biết hoặc để nhấn
          mạnh ý kiến hoặc sự phán đoán của người nói đối với người nghe.
        </Text>

        <Text style={styles.colortim}>このでんしゃはこうしえんへいきますか。</Text>
        <Text style={styles.colorblue}>Tàu điện này có đi đến Koshien không?</Text>

        <Text style={styles.colortim}>いいえ、いきません。つぎのふつうですよ。</Text>
        <Text style={styles.colorblue}>Không, không đi. Chuyến tàu thường tiếp theo mới đi cơ.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headertext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  colortim: {
    color: 'purple',
  },
  colorblue: {
    color: 'blue',
  },
  colorred: {
    color: 'red',
  },
});

export default Nguphap5;
