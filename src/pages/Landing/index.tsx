import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import LandingImg from '../../assets/images/landing.png';
import StudyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png'; 
import heartIcon from '../../assets/images/icons/heart.png';
import styles from './styles';


function Landing() {

  const { navigate } = useNavigation();

  const [ totalConnections, setTotalConnections] = useState(0); 

  useEffect(() => {
    api.get('connections').then(response =>{
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  function handlerNavigationToClassesPage(){
    navigate('GiveClasses');
  }

  function handlerNavigateToStudyPages(){
    navigate('Study');
  }
  
  return (
    <View style={styles.container}>
      <Image source={LandingImg} style={styles.banner}/>  
      <Text style={styles.title}>
        Seja bem-vindo, { '\n'}
        <Text style={styles.titleBold}>O que deseja fazer ?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton onPress={handlerNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
            <Image source={StudyIcon} />
            <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={handlerNavigationToClassesPage} style={[styles.button, styles.buttonSecondary]}>
            <Image source={giveClassesIcon} />
            <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>

      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon}/>
      </Text>
    </View>
  );
}

export default Landing;