import React from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';

export default function Input({ value, placeholder, label }) {
  return (
    <>
      <Text style={style.label}>{label}</Text>
      <TextInput style={style.input} placeholder={placeholder} value={value} />
    </>
  );
}

const style = StyleSheet.create({
  input: {
    width: 320,
    height: 60,
    borderWidth: 2,
    borderRadius: 2,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },

  label: {
    fontSize: 18,
    paddingBottom: 4,
    paddingTop: 8,
    fontWeight: '700',
    color: '#16161d',
  },
});
