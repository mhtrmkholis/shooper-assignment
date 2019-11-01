import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Logout } from '../stores/actions';
import LottieView from 'lottie-react-native';

const mapStateToProps = state => ({
  isLogin: state.isLogin
});

const mapDispatchToProps = {
  Logout
};

function ViewArea({ user, navigation, Logout, isLogin }) {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigation.navigate('LandingPage');
    }
  }, [isLogin]);

  return (
    <SafeAreaView style={{width: Dimensions.get('window').width, backgroundColor: '#FFA08F'}}>
      <View style={styles.viewArea}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatar}>{user.name[0].toUpperCase()}</Text>
            </View>
            <View style={{display: 'flex', justifyContent: 'center', height: 65}}>
              <Text style={styles.colon}>:</Text>
            </View>
          </View>
          {
            !loader ? 
            <View style={{display: 'flex', justifyContent: 'flex-start'}}>
              <TouchableHighlight style={styles.logoutContainer} onPress={() => setLoader(true)}>
                <Text style={styles.logout}>Logout</Text>
              </TouchableHighlight> 
            </View> :
            <View style={{width: 65, height: 65}}>
              <LottieView source={require('../../public/done.json')} autoPlay loop={false} speed={2}
               style={{alignSelf: 'flex-end'}} onAnimationFinish={() => Logout()} />
            </View>
          }
        </View>
        <View style={{display: 'flex', marginTop: 20}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{fontSize: 26, color: 'rgba(255, 255, 255, 0.6)', letterSpacing: 1}}>Hello, </Text> 
            <Text style={styles.displayName}>{user.name}</Text>
          </View>
          <Text style={{marginTop: 5, letterSpacing: 1, color: 'rgba(255, 255, 255, 0.6)'}}>Welcome back to your profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewArea: {
    padding: 30,
    borderBottomEndRadius: 25,
    borderTopEndRadius: 25
  },
  displayName: {
    fontSize: 26,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  avatarContainer: {
    backgroundColor: '#FFC0B6',
    width: 65,
    height: 65,
    borderRadius: 25,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FE6E4F'
  },
  colon: {
    fontSize: 42, 
    // color: 'rgba(0, 0, 0, 0.6)', 
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 'bold', 
    display: 'flex', 
    alignSelf: 'center',
    margin: 8,
    marginTop: 0
  },
  logoutContainer: {
    backgroundColor: '#FE6E4F', 
    display: 'flex', 
    width: 75, 
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'flex-end',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10,
  },
  logout: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.8)',
    alignSelf: 'center',
    textAlign: 'center'
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewArea);