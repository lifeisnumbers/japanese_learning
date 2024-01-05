import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Nguphap2 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headertext}>1.これ/それ/あれ</Text>
        <Text>「これ」 「それ」 và 「あれ」 là những đại từ chỉ thị. Về mặt ngữ pháp chúng được dùng như những danh từ.</Text>
        <Text>「これ」 dùng để chỉ một vật ở gần người nói.</Text>
        <Text>「それ」 dùng để chỉ một vật ở gần người nghe.</Text>
        <Text>「あれ」 dùng để chỉ một vật ở xa người nói và người nghe.</Text>

        <Text style={styles.colortim}>それはじしょですか。</Text>
        <Text style={styles.colorblue}>Đó có phải là quyển từ điển không?</Text>

        <Text style={styles.colortim}>これをください。</Text>
        <Text style={styles.colorblue}>Cho tôi cái này.</Text>

        <Text style={styles.headertext}>2.「この」 「その」 「あの」</Text>
        <Text>「この」 「その」 「あの」 bổ nghĩa cho danh từ.</Text>
        <Text>「このDanh từ」 dùng để nói tới một vật hay một người nào đó ở gần người nói.</Text>
        <Text>「そのDanh từ」 dùng để nói tới một vật hay một người nào đó ở gần người nghe.</Text>
        <Text>「あのDanh từ」 dùng để nói tới một vật hay một người nào đó xa cả người nói và người nghe.</Text>

        <Text style={styles.colortim}>あのほんはわたしのです。</Text>
        <Text style={styles.colorblue}>Quyển sách này là của tôi.</Text>

        <Text style={styles.colortim}>あのかたはどなたですか。</Text>
        <Text style={styles.colorblue}>Vị kia là ai?</Text>

        <Text style={styles.headertext}>3.そうです。 そうじゃありません。</Text>
        <Text>「そうです/そうじゃありませｎ」 được dùng trong câu nghi vấn danh từ để xác định xem một nội dung nào đó là đúng hay sai.</Text>
        <Text>Khi đúng thì trả lời là 「はい。そうです」 khi sai thì là 「いいえ、そうじゃありません」 .</Text>

        <Text style={styles.colortim}>それはテレホンかードですか。</Text>
        <Text style={styles.colorblue}>Đó có phải là thẻ điện thoại không?</Text>

        <Text style={styles.colortim}>はい、そうです。</Text>
        <Text style={styles.colorblue}>Vâng, phải.</Text>

        <Text style={styles.colortim}>それはテレホンカードですか。</Text>
        <Text style={styles.colorblue}>Đó có phải là thẻ điện thoại không.</Text>

        <Text style={styles.colortim}>いいえ、そうじゃありません。</Text>
        <Text style={styles.colorblue}>Không, không phải</Text>

        <Text>Đôi lúc động từ 「ちがいます」 (sai, nhầm, không phải) được dùng với nghĩa tương đương với 「そうじゃありません」 .</Text>

        <Text style={styles.colortim}>それはテレホンカードですか。</Text>
        <Text style={styles.colorblue}>Đó có phải là thẻ điện thoại không?</Text>

        <Text style={styles.colortim}>いいえ。ちがいます。</Text>
        <Text style={styles.colorblue}>Không, không phải</Text>

        <Text style={styles.headertext}>4. Câu 1 か, Câu 2 か</Text>
        <Text style={styles.colorblue}>Mẫu câu nghi vấn này dùng để hỏi về sự lựa chọn của người nghe. Người nghe sẽ lựa chọn Câu 1 hoặc Câu 2.</Text>
        <Text style={styles.colorblue}>Đối với câu nghi vấn loại này, khi trả lời không dùng 「はい」 hay 「いいえ」 mà để nguyên câu lựa chọn.</Text>

        <Text style={styles.colortim}>これは 「9」 ですか。 「7」 ですか。</Text>
        <Text style={styles.colorblue}>Đây là 「9」 hay 「7」 ?</Text>

        <Text style={styles.colortim}>「7」 です。</Text>
        <Text style={styles.colorblue}>Đó là 「7」 .</Text>

        <Text style={styles.headertext}>5. Danh từ 1 の Danh từ 2</Text>
        <Text>Ở bài 1, chúng ta đã học từ 「の」 dùng để nối hai danh từ khi danh từ 1 bổ nghĩa cho danh từ 2.</Text>
        <Text>Ở bài này chúng ta sẽ học hai cách dùng khác của 「の」 .</Text>

        <Text style={styles.colortim}>これはコンピューターのほんです。</Text>
        <Text style={styles.colorblue}>Đây là quyển sách về máy vi tính.</Text>

        <Text style={styles.colortim}>これはわたしのほんです。</Text>
        <Text style={styles.colorblue}>Đây là quyển sách của tôi.</Text>

        <Text>Danh từ 2 thường được giản lược trong trường hợp đã rõ nghĩa.</Text>
        <Text>Tuy nhiên nếu danh từ 2 là danh từ chỉ người thì không giản lược được.</Text>

        <Text style={styles.colortim}>あれはだれのかばんですか。</Text>
        <Text style={styles.colorblue}>Kia là cặp sách của ai?</Text>

        <Text style={styles.colortim}>さとうさんのです</Text>
        <Text style={styles.colorblue}> Đó là cặp sách của chị Sato</Text>

        <Text style={styles.colortim}>このかばんはあなたのですか。</Text>
        <Text style={styles.colorblue}>Cái cặp sách này là của bạn phải không?</Text>

        <Text style={styles.colortim}>いいえ、わたしのじゃありません</Text>
        <Text style={styles.colorblue}>Không, không phải là của tôi.</Text>

        <Text style={styles.colortim}>ミラーさんはIMCのしゃいんですか。</Text>
        <Text style={styles.colorblue}>Anh Miller có phải là nhân viên của công ty IMC không?</Text>

        <Text style={styles.colortim}>はい、IMCのしゃいんです。</Text>
        <Text>Vâng, anh ấy là nhân viên công ty IMC</Text>

        <Text style={styles.colortim}>そうですか。</Text>
        <Text style={styles.colorblue}>Thế này.</Text>
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
});

export default Nguphap2;
