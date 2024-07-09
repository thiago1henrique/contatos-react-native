import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Input from '../../components/Input/input';

import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const NavigateHome = () => navigation.navigate('Home');
  const NavigateNewUser = () => navigation.navigate('CadUser');

  return (
    <View style={style.container}>
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={style.logo} />
      <View>
        <Input placeholder="E-mail ou CPF" label="Login" />
        <Input placeholder="Insira sua senha 😁" label="Senha" />
      </View>

      <View style={{ padding: 20 }} />

      <View style={style.containerBtn}>
        <TouchableOpacity active opacity={0.8} style={style.button} onPress={NavigateHome}>
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity active opacity={0.8} style={[style.button, { backgroundColor: '#ff1616' }]} onPress={NavigateNewUser}>
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#c2c2c2',
  },

  logo: {
    width: 100,
    height: 100,
  },

  containerBtn: {
    alignContent: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1670f7',
    marginBottom: 10,
    width: 300,
    height: 60,
    borderRadius: 8,
  },
});
