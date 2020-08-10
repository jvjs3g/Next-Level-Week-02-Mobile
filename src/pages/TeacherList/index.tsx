import React from 'react';
import { View } from 'react-native';
import TeacherItem from '../../components/teacherItem';
import PageHeader from '../../components/PageHeader';


import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

function TeacherList(){
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis"/> 
      <ScrollView style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal:16,
        paddingBottom: 16,
      }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;