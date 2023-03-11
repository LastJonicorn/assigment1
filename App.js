import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header/>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} 
          options={{tabBarStyle: {display: 'none'}}}
        />
        <Tab.Screen name='Gameboard' component={Gameboard}/>
        <Tab.Screen name='Scoreboard' component={Scoreboard}/>
      </Tab.Navigator>
      <Footer/>
    </NavigationContainer>

  );
}
