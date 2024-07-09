import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  const LogOut = () => navigation.navigate('Login');
  const NewUser = () => navigation.navigate('NewUser');

  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={LogOut}>
            <Text style={Style.titleHeader}> {'<'} </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={Style.titleHeader}>Lista de Contatos</Text>
        </View>

        <View style={{ marginRight: 20 }}>
          <TouchableOpacity onPress={NewUser}>
            <Text style={Style.titleHeader}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    backgroundColor: '#1670f7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 20,
  },

  titleHeader: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 24,
  },
});
