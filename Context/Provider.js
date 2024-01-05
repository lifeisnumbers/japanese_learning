import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Assuming you're using AsyncStorage from React Native

const Context = createContext();

const Provider = ({ children }) => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    const fetchSelectedLesson = async () => {
      try {
        const lesson = await AsyncStorage.getItem('selectedLesson');
        setSelectedLesson(lesson);
      } catch (error) {
        console.error('Error retrieving data', error);
      }
    };

    fetchSelectedLesson();
  }, []);

  const onSelectedLessonChange = async (newLesson) => {
    setSelectedLesson(newLesson);
    try {
      await AsyncStorage.setItem('selectedLesson', newLesson.toString());
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  return (
    <Context.Provider value={{ selectedLesson, setSelectedLesson, onSelectedLessonChange }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
