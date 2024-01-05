import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Nguphap4 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headertext}>1.いま　－じ　－ふん　です</Text>
        <Text>
          Để biểu thị thời gian chúng ta thêm số đếm vào trước danh từ chỉ thời
          gian 「時 (giờ) 」 , ｢分 (phút). 」
        </Text>
        <Text>
          「分」 được đọc là 「ふん」 với các số đếm 2, 5, 7, 9 và được gọi là
          「ぶん」 với các số đếm 1, 3, 4, 6, 8, 10
        </Text>
        <Text>
          Trước ぶん 1, 6, 8, 10 được đọc tương ứng là 「いっ」 「ろっ」 「はっ」
          「じゅっ（じっ）」
        </Text>
        <Text>
          Để hỏi về thời gian chúng ta dùng 「なん」 đặt trước danh từ chỉ thời
          gian ( なんじ：mấy giờ, なんぶん：mấy phút)
        </Text>
        <Text style={styles.colortim}>いまなんじですか。</Text>
        <Text>Bây giờ là mấy giờ?</Text>
        <Text style={styles.colortim}>7時10分です。</Text>
        <Text>7 giờ 10 phút.</Text>
        <Text>
          Ở bài 1 chúng ta đã học cách dùng 「は」 để biểu thị chủ đề của câu.
          Ở ví dụ dưới đây 「は」 được đặt trước danh từ chỉ địa điểm biểu thị
          chủ đề của câu.
        </Text>
        <Text style={styles.colortim}>ニューヨークはなんじですか。</Text>
        <Text>Ở NewYork bây giờ là mấy giờ?</Text>
        <Text style={styles.colortim}>ごぜん4じです。</Text>
        <Text>4 giờ sáng.</Text>
        <Text style={styles.headertext}>2.Động từ ます</Text>
        <Text>Động từ 「ます」 cấu thành vị ngữ của câu</Text>
        <Text>
          Động từ 「ます」 thể hiện thái độ lịch sự của người nói đối với người
          nghe
        </Text>
        <Text style={styles.colortim}>わたしはまいにちべんきょうします。</Text>
        <Text>Tôi học hàng ngày.</Text>
        <Text>Động từ ます/ Động từ ません Động từ ました Động từ ませんでした"</Text>
        <Text>
          Động từ ます được dùng để nói về một thói quen trong hiện tại hoặc
          một sự thật nào đó đồng thời cũng được dùng để nói về một sự việc
          nào đó sẽ xảy ra trong tương lai. Thể phủ định và thời quá khứ được
          trình bày như sau.
        </Text>
        <Text style={styles.colortim}>まいあさ、6じにおきます</Text>
        <Text>Hàng sáng tôi thức dậy vào lúc 6 giờ</Text>
        <Text style={styles.colortim}>あした6じにおきます</Text>
        <Text>Ngày mai tôi (sẽ) dậy vào lúc 6 giờ</Text>
        <Text style={styles.colortim}>けさ、6じにおきました。</Text>
        <Text>Sáng nay tôi (đã) dậy vào lúc 6 giờ</Text>
        <Text>
          Thể nghi vấn của câu động từ cũng tương tự như câu danh từ, tức là
          chúng ta không thay đổi trật tự của câu mà chỉ thêm trợ từ 「か」 vào
          cuối câu. Từ nghi vấn được thay vào vị trí của thành phần câu muốn
          hỏi. Trong câu trả lời, chúng ta nhắc lại động từ trong câu nghi vấn
          và chú ý không dùng 「そうです」 hoặc. 「そうじゃありません」 .
        </Text>
        <Text style={styles.colortim}>きのう、べんきょうしましたか。</Text>
        <Text>Hôm qua anh/chị có học không?</Text>
        <Text style={styles.colortim}>はい、べんきょうしました</Text>
        <Text>Có, hôm qua tôi có học</Text>
        <Text style={styles.colortim}>いいえ、べんきょうしませんでした。</Text>
        <Text>Không, hôm qua tôi không học.</Text>
        <Text style={styles.headertext}>3.Danh từ (thời gian) に Động từ</Text>
        <Text>
          Khi muốn nói về thời điểm mà một hành động nào đó xảy ra, chúng ta
          thêm trợ từ 「に」 vào sau danh từ chỉ thời gian. Dùng 「に」 đối với
          những hành động diễn ra trong thời gian ngắn 「に」 được dùng khi danh
          từ chỉ thời gian có con số đi kèm, và không dùng trong t/h không có
          con số đi kèm. Tuy nhiên đối với trường hợp của thứ trong tuần thì có
          thể dùng hoặc không.
        </Text>
        <Text style={styles.colortim}>6じかんにおきます。</Text>
        <Text>Tôi dậy lúc 6 giờ</Text>
        <Text style={styles.colortim}>7月2日に日本へべんきょうしました。</Text>
        <Text>Tôi (đã) đến Nhật vào ngày 2 tháng 7.</Text>
        <Text style={styles.colortim}>きのうべんきょうしました。</Text>
        <Text>Hôm qua tôi (đã) học bài.</Text>
        <Text style={styles.headertext}>4.Danh từ 1 から Danh từ 2 まで</Text>
        <Text>
          「から」 biểu thị điểm bắt đầu của thời gian hoặc địa điểm, còn
          「まで」 biểu thị điểm kết thúc của thời gian và địa điểm.
        </Text>
        <Text style={styles.colortim}>9じから5じまではたらきます。</Text>
        <Text>Tôi làm việc từ 9 giờ đến 5 giờ.</Text>
        <Text style={styles.colortim}>おおさかからとうきょうまで3じかんかかります。</Text>
        <Text>Từ Osaka đến Tokyo mất 3 tiếng.</Text>
        <Text>
          「から」 và　 「まで」 không nhất thiết phải đi kèm với nhau, mà có
          thể dùng riêng biệt.
        </Text>
        <Text style={styles.colortim}>9じからはたらきます。</Text>
        <Text>Tôi làm việc từ 9 giờ.</Text>
        <Text>
          Có thể dùng 「で」 với 「～から」 「～まで」 và　 「～から～まで」
        </Text>
        <Text style={styles.colortim}>ぎんこうは9じから。</Text>
        <Text>Ngân hàng mở cửa từ 9 giờ đến 3 giờ.</Text>
        <Text style={styles.headertext}>5.Danh từ 1 と Danh từ 2</Text>
        <Text>Khi nối hai danh từ với nhau dùng trợ từ 「と」</Text>
        <Text style={styles.colortim}>ぎんこうのやすみは土曜日と日曜日です。</Text>
        <Text>Ngân hàng đóng cửa vào thứ bảy và chủ nhật</Text>
        <Text style={styles.headertext}>6.Câu ね</Text>
        <Text>
          Từ 「ね」 được thêm vào cuối câu để thể hành sự thông cảm, đồng tình
          của người nói đối với người nghe. Cũng có khi 「ね」 thể hiện sự kỳ
          vọng của người nói vào sự đồng ý của người nghe, trong trường hợp
          này thì 「ね」 mang chức năng xác nhận (ý kiến, thái độ của người
          nghe).
        </Text>
        <Text style={styles.colortim}>毎日、10じごろまでべんきょうします。</Text>
        <Text>Hàng ngày tôi học đến khoảng 10h.</Text>
        <Text style={styles.colortim}>たいへんですね。</Text>
        <Text>Vất vả quá.</Text>
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

export default Nguphap4;
