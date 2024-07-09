import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import contatos from './data';

function ContatosData() {
  return contatos.map((item, index) => (
    <TouchableOpacity key={index} style={[styles.contatoContainer, index !== contatos.length - 1 && styles.bordaBottom]} onPress={() => alert(`Você pressionou ${item.nome}`)}>
      <Image source={{ uri: item.image }} style={styles.logo} />

      <View style={styles.contato}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.numero}>{item.numero}</Text>
      </View>
    </TouchableOpacity>
  ));
}

export default function Contatos() {
  return (
    <ScrollView style={styles.container}>
      <ContatosData />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },

  contatoContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    justifyContent: 'start',
    alignItems: 'center',
    marginVertical: 5,
    paddingLeft: 20,
  },

  contato: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 10,
  },

  bordaBottom: {
    borderBottomWidth: 6,
    borderBottomColor: '#a6a6a6',
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  numero: {
    fontSize: 18,
  },
});
