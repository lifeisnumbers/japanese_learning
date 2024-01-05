import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Nguphap3 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headertext}>1.ここ/ そこ/ あそこ/ こちら/ そちら/ あちら</Text>
        <Text>
          Ở bài 2 chúng ta đã học về các đại từ chỉ đồ vật (これ/それ/あれ). Trong
          bài này chúng ta sẽ học về các đại từ chỉ địa điểm
          「ここ/そこ/あそこ」
        </Text>

        <Text>「ここ」 chỉ vị trí mà người nói đang ở.</Text>
        <Text>「そこ」 chỉ vị trí mà người nghe đang ở.</Text>
        <Text>
          「あそこ」 chỉ vị trí ở xa cả người nói và người nghe.
        </Text>

        <Text>(こちら/そちら/あちら) là những đại từ chỉ phương hướng, nhưng có
          thể dùng thay thế (ここ/そこ/あそこ) với sắc thái lịch sự hơn
        </Text>

        <Text>
          Khi người nói cho rằng người nghe cũng ở trong phạm vi vị trí của
          mình thì dùng 「ここ」 để chỉ vị trí của cả hai, dùng 「そこ」 để chỉ
          vị trí xa hơn hai người, dùng　 「あそこ」 để chi vị trí tương đối xa
          hai người
        </Text>

        <Text style={styles.headertext}>2.Danh từ 1 は Danh từ 2 (địa điểm) です</Text>
        <Text>
          Mẫu câu này được dùng để diễn đạt một vật, một người hay một địa điểm
          nào đó ở đâu
        </Text>

        <Text style={styles.colortim}>おてあらいはあそこです。</Text>
        <Text style={styles.colorblue}>Nhà vệ sinh ở đằng kia.</Text>

        <Text style={styles.colortim}>でんわは2かいです。</Text>
        <Text style={styles.colorblue}>Điện thoại ở tầng hai.</Text>

        <Text style={styles.colortim}>やまださんはじむしょです。</Text>
        <Text style={styles.colorblue}>Anh Yamada ở văn phòng.</Text>

        <Text style={styles.headertext}>3.どこ/ どちら</Text>
        <Text>
          「どこ」 là nghi vấn từ hỏi về địa điểm, còn　 「どちら」 là nghi
          vấn từ hỏi về phương hướng. Tuy nhiên 「どちら」 cũng có thể được
          dùng để hỏi về địa điểm. Trong trường hợp này thì　 「どちら」 mang
          sắc thái lịch sự hơn 「どこ」 .
        </Text>

        <Text style={styles.colortim}>おてあらいはどこですか。</Text>
        <Text style={styles.colorblue}>Nhà vệ sinh ở đâu?</Text>

        <Text style={styles.colortim}>あそこです。</Text>
        <Text style={styles.colorblue}>Ở chỗ kia</Text>

        <Text style={styles.colortim}>エレべーターはどちらですか。</Text>
        <Text style={styles.colorblue}>Thang máy ở chỗ nào ạ?</Text>

        <Text style={styles.colortim}>あちらです。</Text>
        <Text style={styles.colorblue}>Ở chỗ kia ạ.</Text>

        <Text>
          Ngoài ra khi hỏi về tên của quốc gia, công ty, trường học, cơ quan
          hay tổ chức trực thuộc thì cũng dùng nghi vấn từ 「どこ」 hay
          「どちら」 chứ không phải là 「なん」 . Trong trường này cũng thể
          「どちら」 mang sắc thái lịch sự hơn　 「どこ」
        </Text>

        <Text style={styles.colortim}>がっこうはどこですか。</Text>
        <Text style={styles.colorblue}>Anh học ở trường nào</Text>

        <Text style={styles.colortim}>会社はどちらですか。</Text>
        <Text style={styles.colorblue}>Chị làm việc ở công ty nào ạ?</Text>

        <Text style={styles.headertext}>4.Danh từ 1 の Danh từ 2</Text>
        <Text>
          Trong mẫu câu này Danh từ 1 là tên quốc gia hoặc công ty, Danh từ 2
          là tên của sản phẩm này. Mẫu này diễn đạt 1 sản phẩm của một nước
          hay một công ty nào đó. Đối với mẫu này, khi hỏi dùng nghi vấn.
          「どこ」
        </Text>

        <Text style={styles.colortim}>これはどこのコンピューターですか。</Text>
        <Text style={styles.colorblue}>Đây là máy tinh của hãng nào</Text>

        <Text style={styles.colortim}>IMCのコンピューターたです。</Text>
        <Text style={styles.colorblue}>Máy tính của hãng IMC ạ.</Text>

        <Text style={styles.colortim}>お国</Text>
        <Text >
          Tiền tốt 「お」 được thêm vào trước một từ có liên quan đến người
          nghe hoặc người thứ ba để bày tỏ sự kính trọng của người nói.
        </Text>

        <Text style={styles.colortim}>お国はどちらですか。</Text>
        <Text style={styles.colorblue}>Anh/chị là người nước nào?</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colortim: {
    color: 'purple',
  },
  headertext: {
    fontSize: 20,
    fontWeight: 'bold', 
  },
  colorblue: {
    color: 'blue',
  },
});

export default Nguphap3;
