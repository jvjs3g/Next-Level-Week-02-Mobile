import React from 'react';
import { View, Image, Text  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';
interface pageHeaderProps{
  title: string;
}


const  PageHeader:React.FC<pageHeaderProps> = ({ title }) => {


const { navigate } = useNavigation();

function handlerGoBack(){
  navigate('Landing')
}
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handlerGoBack}>
          <Image source={backIcon} resizeMode="contain"/>
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain"/>
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

export default PageHeader;