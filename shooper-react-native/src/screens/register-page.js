import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from 'react-native-vector-icons';
import { Dropdown } from 'react-native-material-dropdown';
import Loading from '../components/loader-loading';
import { Register } from '../stores/actions';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error
});

const mapDispatchToProps = {
  Register
};

function RegisterPage(props) {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [classroom, setClassroom] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setErrorMsg(props.error)
  }, [props.error])

  function submitRegister() {
    const data = { username, name, password, ClassroomId: classroom.id };
    if (Object.values(data).some(el => !el)) {
      setErrorMsg('Field cannot be blank!')
    } else {
      setErrorMsg('');
      props.Register(data);
    };
  };

  return (
    <ScrollView>
      <View style={styles.viewArea}>
        <SafeAreaView />
        <Ionicons onPress={() => props.navigation.goBack()} name="ios-arrow-back" size={35} color="#fff" style={{marginTop: 10}} />
        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: 30}}>Join us!</Text>
      </View>
      <View style={styles.interactionArea}>
        { errorMsg.length !== 0 && <Text style={styles.errorMessage}>{errorMsg}</Text> }
        <Text style={styles.fontStyle}>Username</Text>
        <TextInput 
          style={styles.inputStyle}
          label="Username"
          placeholder="Enter your username"
          onChangeText={username => setUsername(username)}
        />

        <Text style={styles.fontStyle}>Name</Text>
        <TextInput 
          style={styles.inputStyle}
          label="Name"
          placeholder="Enter your name"
          onChangeText={name => setName(name)}
        />

        <Text style={styles.fontStyle}>Password</Text>
        <TextInput 
          style={styles.inputStyle}
          label="Password"
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />

        <Text style={styles.fontStyle}>Select Class</Text>
        <View style={{height: 10, marginTop: -25}}>
          <Dropdown
            value={'Choose One'}
            fontSize={14}
            data={[{
              value: 'Class A',
            }, 
            {
              value: 'Class B',
            }]}
            onChangeText={(classroom, i) => setClassroom({id: i+5, name: classroom})}
            />
        </View>
        {
          props.isLoading ?  
          <View style={{width: 100, height: 100, display: 'flex', alignItems: 'center', width: '100%', marginTop: 75}}>
            <Loading />
          </View> :
          <TouchableHighlight underlayColor='rgba(0,0,0,0.2)' style={styles.loginButton} onPress={() => submitRegister()}>
            <Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>
              Register
            </Text>
          </TouchableHighlight>
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewArea: {
    height: 175,
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
  fontStyle: {
    fontWeight: 'bold', 
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 10
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    paddingTop: 10,
    paddingBottom: 5,
    marginBottom: 20
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#FE6E4F',
    width: 125,
    padding: 10,
    display: 'flex',
    alignSelf: 'center',
    borderRadius: 25,
    marginTop: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);