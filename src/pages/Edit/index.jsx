import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from '../../components/Input/input';

export default function Edit() {
  return (
    <View style={style.container}>
      <View style={{ width: 320 }}>
        <Input placeholder="Insira o nome do contato" label="Nome" />
        <Input placeholder="Insira o email do contato" label="Email" />
        <Input placeholder="Insira o telefone do contato" label="Telefone" />
      </View>
      <View>
        <TouchableOpacity style={style.cta}>
          <Text style={{ color: '#fff', fontWeight: '700', fontSize: 20 }}>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.cta, { backgroundColor: '#ff1616' }]}>
          <Text style={{ color: '#fff', fontWeight: '700', fontSize: 20 }}>Excluir</Text>
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
