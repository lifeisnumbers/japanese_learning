import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Nguphap1 = () => {
  const navigation = useNavigation();
  
  return (    
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.headertext}>1.Danh từ 1 は Danh từ 2 です</Text>
      <Text>Trợ từ 「は」 biểu thị rằng danh từ đứng trước nó là chủ đề của câu.</Text>
      <Text>Người nói đặt 「は」 trước chủ đề mà mình muốn nói đến và lập thành câu bằng cách thêm 「は」 những thông tin cần thiết.</Text>
        <Text style={styles.colortim}>わたしはマイク。ミラーです。</Text>
        <Text style={styles.colorblue}>Tôi là Mike. Đây là Miraa.</Text>
        <Text style={styles.colordo}>Chú ý: 「は」 đọc là 「わ」</Text>
        <Text>「です」 được đặt sau danh từ làm vị ngữ để biểu thị sự phán đoán hay khẳng định.</Text>
        <Text>「です」 biểu thị sự lịch sự của người nói đối với người nghe.</Text>
        <Text>「です」 thay đổi hình thức trong trường hợp của câu phủ định hoặc thời quá khứ.</Text>

        <Text style={styles.headertext}>2.Danh từ 1 は Danh từ 2 じゃありません</Text>
         <Text>「じゃありません」 là thể phủ định của 「です」 và được dùng trong giao tiếp hằng ngày.</Text>
         <Text>「ではありません」 được dùng trong văn viết hoặc các bài phát biểu quan trọng.</Text>
        <Text style={styles.colortim}>サントスさんはがくせいじゃありません。</Text>
        <Text style={styles.colorblue}>Anh Santos không phải là sinh viên.</Text>
        <Text style={styles.colordo}>Chú ý: 「では」 đọc là 「でわ」</Text>
        
        <Text style={styles.headertext}>3.Câu か</Text>
        <Text>Trợ từ 「か」 được dùng để biểu thị sự không chắc chắn, sự nghi vấn của người nói. Câu nghi vấn được tạo thành bằng cách thêm 「か」 vào cuối câu. </Text>
        <Text>. Trong câu nghi vấn, chữ 「か」 ở cuối câu được đọc với giọng cao hơn.</Text>
        <Text>Câu nghi vấn để xác định xem một nội dung là đúng hay sai.</Text>
        <Text>Như đã nói ở trên, một câu sẽ trở thành câu hỏi khi ta thêm 「か」 vào cuối câu. Trật tự từ không thay đổi. Câu nghi vấn loại này xác nhận một nội dung là đúng hay sai. Nếu đúng thì trả lời là 「はい」 , không đúng thì là 「いいえ」 .</Text>
        <Text style={styles.colortim}>ミラーさんはアメリカじんですか。</Text>
        <Text style={styles.colorblue}>Anh Miller có phải là người Mỹ không? </Text>
        <Text style={styles.colortim}>はい、アメリカじんです。</Text>
        <Text style={styles.colorblue}>Vâng, anh ấy là người Mỹ</Text>
        <Text>Câu nghi vấn có nghi vấn từ.</Text>
        <Text>Thay nghi vấn từ vào vị trí của thành phần câu mà bạn muốn hỏi. Trật tự từ không thay đổi. Thêm 「か」 vào cuối câu.</Text>
        <Text style={styles.colortim}>あのかたはどなたですか。</Text>
        <Text>Người kia là ai?</Text>
        <Text style={styles.colortim}>あのかたは」 ミラーさんです。</Text>
        <Text>Người đó là anh Miller.</Text>

        <Text style={styles.headertext}>4.Danh từ も</Text>
        <Text>Trợ từ 「も」 được dùng để biểu thị sự phủ định của 「は」. Trợ từ 「も」 được dùng để thay thế cho 「は」 trong câu phủ định.</Text>
        <Text style={styles.colortim}>ミラーさんはかいしゃいんです。</Text>
        <Text style={styles.colorblue}>Anh Miller là nhân viên công ty.</Text>
        <Text style={styles.colortim}>グプたさんもかいしゃいんです。</Text>
        <Text style={styles.colorblue}>Anh Gupta cũng là nhân viên công ty.</Text>

        <Text>5.Danh từ 1 の danh từ 2</Text>
        <Text>「の」 nối hai danh từ với nhau. Danh từ 1 bổ nghĩa cho danh từ 2. 「の」 trong bài này biểu thị tính sở thuộc (xem thêm bài 2 và 3 về cách dùng 「の」 trong các trường hợp khác).  </Text>
        <Text style={styles.colortim}>ラーさんはIMCのしゃいんです。</Text>
        <Text style={styles.colorblue}>Anh Miller là nhân viên của IMC.</Text>

        <Text>6.~さん</Text>
        <Text>「さん」 được dùng sau tên người để biểu thị sự tôn trọng. </Text>
        <Text style={styles.colortim}>あのかたはミラーさんです。 </Text>
        <Text style={styles.colorblue}> Người kia là anh Miller.</Text>
        <Text>Trong trường hợp đã biết tên của người nghe thì không dùng 「あなた」 mà dùng 「さん」 để gọi tên người đó.</Text>
        <Text style={styles.colortim}>すずき：ミラーさんはがくせいですか。。</Text>
        <Text style={styles.colorblue}>Suzuki: Anh Miller có phải là sinh viên không?</Text>
        <Text style={styles.colortim}>ミラー：いいえ、かいしゃいんです。</Text>
        <Text style={styles.colorblue}>Miller: Không, tôi là nhân viên công ty.</Text>
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
  colordo: {
    color: 'red',
  },
});

export default Nguphap1;