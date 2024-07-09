import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/header/index';
import Contatos from '../../components/contatos';

export default function Home() {
  return (
    <View>
      <Header />
      <Contatos />
    </View>
  );
}
