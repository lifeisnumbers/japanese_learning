import React, { useRef,useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; 
import { DrawerLayoutAndroid, View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HiraganaScreen from '../Screen/BangChuCai/Hiragana';
import KatakanaScreen from '../Screen/BangChuCai/Katakana';
import Minnabai from '../Screen/minanihongo/Minnabai';
import MinaGhinho from '../Screen/minanihongo/MinaGhinho';
import MinaTracN from '../Screen/minanihongo/MinaTracN';
import Nguphap from '../Screen/minanihongo/Nguphap';
import Renshuub from '../Screen/minanihongo/Renshuub';
import Mondai from '../Screen/minanihongo/Mondai';
import Kanji from '../Screen/Kanji/Kanji';
import KiemtraScreen from '../Screen/BangChuCai/Kiemtra';
import Flashcard from '../Screen/BangChuCai/Flashcard';
import KanjiFlashcard from '../Screen/Kanji/KanjiFlashcard';
import KanjiKiemtra from '../Screen/Kanji/KanjiKiemtra';
import Tudien from '../Screen/TuDien/Tudien';
const Bottom = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabIcon = ({ name, focused, imageSource }) => {
  if (imageSource) {
    return <Image source={imageSource} style={styles.icon} />;
  } else {
    return <IonIcon name={name} size={25} color={focused ? '#4390f7' : '#000'} />;
  }
};
const BottomTabIconOptions = (drawerRef, title, name) => {
  return {
    title: title,
    tabBarIcon: ({ focused }) => 
      <TabIcon name={name} focused={focused} />,
    headerLeft: () => (
      <IonIcon
        name="menu"
        size={30}
        onPress={() => drawerRef.current?.openDrawer()}
      />
    ),
  };
};

const TopTabIconOptions = (name, title, imageSource) => {
  return {
    title: title,
    tabBarIcon: ({ focused }) => 
      <TabIcon name={name} focused={focused} imageSource={imageSource} />,
  };
};

const DrawerContentBangChuCai = () => {
  const navigation = useNavigation(); // Using the hook
  return (
    <View style={styles.ghinhocontainer}>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Flashcard')} >
        <Text style={styles.fontlabel1}>
        Flashcard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('TracNghiem')} >
        <Text style={styles.fontlabel1}>
          Kiểm tra 
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const DrawerContentMinnabai = () => {
  const navigation = useNavigation(); // Using the hook
  return (
    <View style={styles.ghinhocontainer}>
        
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Nguphap')} >
        <Text style={styles.fontlabel1}>
       Ngữ pháp
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Renshuub')} >
       <Text style={styles.fontlabel1}>
        Renshuu B
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
       onPress={() =>  navigation.navigate('Mondai')}  >
        <Text style={styles.fontlabel1}>
        Mondai
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
       onPress={() => navigation.navigate('MinaGhinho')}  >
        <Text style={styles.fontlabel1}>
        Flashcard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
       onPress={() => navigation.navigate('MinaTracN')}  >
        <Text style={styles.fontlabel1}>
       Kiểm Tra
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Minna')} >
        <Text style={styles.fontlabel1}>
       Minna No Nihongo
        </Text>
      </TouchableOpacity>
    </View>
  );
  };
const DrawerContentKanji = () => {
  const navigation = useNavigation(); // Using the hook
  return (
    <View style={styles.ghinhocontainer}>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('KanjiFlashcard')} >
        <Text style={styles.fontlabel1}>
        Flashcard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('KanjiKiemtra')} >
        <Text style={styles.fontlabel1}>
          Trắc nghiệm
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Kanji')} >
        <Text style={styles.fontlabel1}>
         Kanji
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const BangChuCaiTab = ( ) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Hiragana" component={HiraganaScreen} 
        options={TopTabIconOptions('home', 'Hiragana', require('../assets/a-hiragana.png'))} />
      <Tab.Screen name="Katakana" component={KatakanaScreen}
        options={TopTabIconOptions('home', 'Katakana', require('../assets/a-katakana.png'))} />
    </Tab.Navigator>
  );
};
const GhinhoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BangChuCaiTab" component={BangChuCaiTab} options={{headerShown:false}}/>
      <Stack.Screen name="TracNghiem" component={KiemtraScreen} options={{headerShown:true, title:'Trắc nghiệm'}}/>
      <Stack.Screen name="Flashcard" component={Flashcard} options={{headerShown:true, title:'Flashcard'}}/>
    </Stack.Navigator>
  );
};

const MinnaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Minna" component={Minnabai} options={{headerShown:false}}/>
      <Stack.Screen name="Nguphap" component={Nguphap} options={{headerShown:true, title:'Ngữ pháp'}}/>
      <Stack.Screen name="Renshuub" component={Renshuub} options={{headerShown:true, title:'Renshuu B'}}/>
      <Stack.Screen name="Mondai" component={Mondai} options={{headerShown:true, title:'Mondai'}}/>
      <Stack.Screen name="MinaGhinho" component={MinaGhinho} options={{headerShown:true, title:'Flashcard'}}/>
      <Stack.Screen name="MinaTracN" component={MinaTracN} options={{headerShown:true, title:'Kiểm Tra'}}/>
    </Stack.Navigator>
  );
};
const KanjiStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Kanji" component={Kanji} options={{headerShown:false}}/>
      <Stack.Screen name="KanjiFlashcard" component={KanjiFlashcard} options={{headerShown:true, title:'Flashcard'}}/>
      <Stack.Screen name="KanjiKiemtra" component={KanjiKiemtra} options={{headerShown:true, title:'Kiểm tra'}}/>
    </Stack.Navigator>
  );
};
const MainScreen = () => {
  const drawer = useRef(null);
  const [currentScreen, setCurrentScreen] = useState('BangChuCai');
  const renderDrawerContent = () => {
    switch (currentScreen) {
      case 'BangChuCai':
        return <DrawerContentBangChuCai />;
      case 'Minnabai':
        return <DrawerContentMinnabai />;
      case 'Kanji':
        return <DrawerContentKanji />;
      default:
        return <DefaultDrawerContent />;
    }
  };
  return (
    <DrawerLayoutAndroid
      drawerWidth={250}
      drawerPosition={'left'}
      renderNavigationView={renderDrawerContent}
      ref={drawer}
    >
      <Bottom.Navigator>
        <Bottom.Screen
          name="BangChuCai"
          component={GhinhoStack}
          options={BottomTabIconOptions(drawer, 'Bảng chữ cái', 'text-outline')}
          listeners={{ focus: () => setCurrentScreen('BangChuCai') }}
        />
        <Bottom.Screen
          name="Minnabai"
          component={MinnaStack}
          options={BottomTabIconOptions(drawer, 'Minna', 'book')}
          listeners={{ focus: () => setCurrentScreen('Minnabai') }}
        />
        <Bottom.Screen
          name="Kanji1"
          component={KanjiStack}
          options={BottomTabIconOptions(drawer, 'Kanji', 'logo-yen')}
          listeners={{ focus: () => setCurrentScreen('Kanji') }}
        />
        <Bottom.Screen
  name="Tudien"
  component={Tudien}
  options={{
    title: "Từ điển",
    tabBarIcon: ({ focused, color, size }) => (
      <TabIcon
        name="search" 
        focused={focused}
        
      />
    )
  }}
/>
      </Bottom.Navigator>
    </DrawerLayoutAndroid>
  );
};


const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  ghinhocontainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
    backgroundColor:'#4390f7',
    marginBottom:10,
  },
  fontlabel1:{
    fontSize:20,
    fontWeight:'bold',
    padding:10,
    color:'white',
  },
});

export default MainScreen;
