import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileNotification({ user, setModalView, setDetailSelected }) {
  return (
    <View>
      <View style={styles.notification}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={styles.smallAvatarContainer}>
              <Text style={styles.smallAvatar}>{user.name[0].toUpperCase()}</Text>
            </View>
            <View style={{display: 'flex', justifyContent: 'center'}}>
              <Text style={{fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', letterSpacing: 1}}>Good Job,</Text>
              <Text style={{fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 'bold', textTransform: 'capitalize',}}>{user.name}</Text>
            </View>
          </View>
          <View style={{width: 225}}>
            <Text style={{color: 'rgba(0, 0, 0, 0.4)', marginTop: 10}}>You have not completed your profile yet. Fill out your profile and get a rewards from us.</Text>
          </View>
        </View>
        <View style={styles.percentage}>
          <View style={{marginTop: 25, height: 80, backgroundColor: '#39CA8C', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomEndRadius: 8, borderBottomStartRadius: 8}}>
            <Text style={{fontWeight: 'bold', color: '#FFF'}}>85 %</Text>
          </View>
        </View>
      </View>
      <View style={styles.logoutContainer}>
        <Text 
          style={styles.logout}
          onPress={() => {
            setModalView(true),
            setDetailSelected('email')
          }}>Complete Now</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  smallAvatarContainer: {
    backgroundColor: '#FFC0B6',
    width: 45,
    height: 45,
    borderRadius: 15,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  smallAvatar: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FE6E4F',
  },
  notification: {
    // marginBottom: 30,
    // marginLeft: 30,
    // marginRight: 30,
    backgroundColor: '#fff',
    marginTop: -100,
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 25
  },
  percentage: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 50,
    height: '100%',
    borderRadius: 8,
    display: 'flex'
  },
  logoutContainer: {
    backgroundColor: '#FE6E4F', 
    display: 'flex', 
    width: 100, 
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'center',
    borderRadius: 25,
    marginTop: -20,
    marginBottom: 20,
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
})