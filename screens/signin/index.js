import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Dimensions } from 'react-native';
const {
  width,
  height
} = Dimensions.get('window');

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <Button title="Sign In" onPress={() => console.log('Pressed')} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20
  },
  title: {
    fontSize: width * 0.05,
    // 5% of screen width
    fontWeight: '600',
    color: '#333',
    marginBottom: 20
  },
  input: {
    width: width * 0.5,
    // 80% of screen width
    height: height * 0.06,
    // 6% of screen height
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: width * 0.02,
    // 4% of screen width
    color: '#333',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});
export default Signin;