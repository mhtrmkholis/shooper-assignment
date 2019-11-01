import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableHighlight, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Login } from '../stores/actions';
import Loading from '../components/loader-loading';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  isLogin: state.isLogin,
  error: state.error,
  user: state.user
});

const mapDispatchToProps = {
  Login
};

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (props.isLogin) {
      props.navigation.navigate('ProfilePage')
    }
  }, [props.isLogin])

  return (
    <ScrollView>
      <View style={styles.viewArea}>
        <SafeAreaView />
        <Text style={{fontSize: 38, fontWeight: 'bold', marginTop: (Dimensions.get('window').height/3)/4, color: '#fff'}}>Hello!</Text>
        <Text style={styles.fontStyleWhite}>Welcome to Shooper App</Text>
        <Image 
          style={{width: Dimensions.get('window').width/2.5, height: 250, marginTop: -110, alignSelf: 'flex-end'}}
          source={require('../.././public/test.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.interactionArea}>
        { props.error.length !== 0 && <Text style={styles.errorMessage}>{props.error}</Text> }
        <Text style={styles.fontStyle}>Email Address</Text>
        <TextInput 
          style={styles.inputStyleEmail}
          label="Email"
          placeholder="Enter your email address"
          onChangeText={email => setEmail(email)}
        />

        <Text style={styles.fontStyle}>Password</Text>
        <TextInput 
          style={styles.inputStylePassword}
          label="Password"
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{color: 'rgba(0, 0, 0, 0.6)',}}>Don't have an account? </Text>
          <Text 
            style={{fontWeight: 'bold'}}
            onPress={() => props.navigation.navigate('RegisterPage')}>
            Register now!
          </Text>
        </View>

        {
          props.isLoading ?  
          <View style={{width: 100, height: 100, display: 'flex', alignItems: 'center', width: '100%'}}>
            <Loading />
          </View> :
          <TouchableHighlight onPress={() => props.Login({ username: email, password })} underlayColor='rgba(0,0,0,0.2)' style={styles.loginButton}>
            <Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableHighlight>
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewArea: {
    height: Dimensions.get('window').height/3,
    backgroundColor: '#FE6E4F',
    padding: 35,
    paddingRight: 10,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50 
  },
  interactionArea: {
    padding: 35,
    paddingBottom: 0
  },
  fontStyleWhite: {
    fontWeight: 'bold', 
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 10,
    color: '#fff'
  },
  fontStyle: {
    fontWeight: 'bold', 
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 10
  },
  inputStyleEmail: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    paddingTop: 15,
    paddingBottom: 5,
    marginBottom: 30
  },
  inputStylePassword: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    paddingTop: 15,
    paddingBottom: 5,
    marginBottom: 10
  },
  loginButton: {
    backgroundColor: '#FE6E4F',
    width: 125,
    padding: 10,
    display: 'flex',
    alignSelf: 'center',
    borderRadius: 25,
    marginTop: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10,
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);