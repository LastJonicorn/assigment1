import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import styles from '../style/style';

export default function Home ({navigation}) {

    const [playerName, setPlayerName] = useState('');
    const [hasPlayerName, setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

  return (
    <View>
        { !hasPlayerName
            ?
            <>
                <Text>For scoreboard enter your name</Text>
                <TextInput style={styles.textInput} onChangeText={setPlayerName} autoFocus={true}></TextInput>
                <Pressable style={styles.button} onPress={() => handlePlayerName(playerName)}>
                    <Text>OK</Text>
                </Pressable>
            </>
            :
            <>
                <Text style={styles.gameinfo}>
                    THE GAME: Upper section of the classic Yahtzee
                    dice game. You have 5 dices and
                    for the every dice you have 3
                    throws. After each throw you can keep dices in
                    order to get same dice spot counts as many as
                    possible. In the end of the turn you must select
                    your points from 1 to 6.
                    Game ends when all points have been selected.
                    The order for selecting those is free.
                    POINTS: After each turn game calculates the sum
                    for the dices you selected. Only the dices having
                    the same spot count are calculated. Inside the
                    game you can not select same points from
                    1 to 6 again.
                    GOAL: To get points as much as possible.
                    BONUSPOINTSLIMIT points is the limit of
                    getting bonus which gives you BONUSPOINTS
                    points more.
                </Text>
                <Text style={styles.player}>Good luck, {playerName}!</Text>
                <Pressable onPress={() => navigation.navigate('Gameboard', {player: playerName})}>
                    <Text style={styles.play}>PLAY</Text>
                </Pressable>
            </>
        }
    </View>
  )
}