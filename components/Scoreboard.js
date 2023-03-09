import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from '../style/style';
import Header from './Header';
import Footer from './Footer';
import { SCOREBOARD_KEY } from '../constants/Game';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Scoreboard( {navigation} ) {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getScoreaboardData();
    });
    return unsubscribe;
  }, [navigation]);

  const getScoreaboardData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY);
      if (jsonValue !== null) {
        let tmpScores = JSON.parse(jsonValue);
        setScores(tmpScores);
        // Sort results here for the rendering according to points! See Assigment instructions
      }
    }
    catch (error){
      console.log('Read error ' + error.message);
    }
  }
  

  return (
    <View>
      <Header/>
      <View>
        {scores.map((player, i) => (
          <Text key={i}>{i + 1}. {player.name} {player.date} {player.time} {player.points}</Text>
        ))}
      </View>
      <Footer/>
    </View>
  )
}