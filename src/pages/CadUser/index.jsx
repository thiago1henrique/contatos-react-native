import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from '../../components/Input/input';
import { useNavigation } from '@react-navigation/native';

export default function CadNew() {
  const navigation = useNavigation();
  const goHome = () => navigation.navigate('Home');
  return (
    <View style={style.container}>
      <View style={{ width: 320 }}>
        <Input placeholder="Insira seu nome" label="Nome" />
        <Input placeholder="Insira seu CPF" label="Email" />
        <Input placeholder="Insira email" label="Email" />
        <Input placeholder="Insira seu telefone" label="Telefone" />
      </View>
      <View>
        <TouchableOpacity style={style.cta} onPress={goHome}>
          <Text style={{ color: '#fff', fontWeight: '700', fontSize: 20 }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cta: {
    backgroundColor: '#1670f7',
    width: 320,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 8,
  },
});
