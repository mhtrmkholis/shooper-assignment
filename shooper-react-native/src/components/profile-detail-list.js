import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from 'react-native-vector-icons';
import LottieView from 'lottie-react-native';

function DetailList({ user, source, clickDetail, showDoneGif, setShowDoneGif, detailSelected }) {
  return (
    <View style={{display: 'flex', flexDirection: 'row', width: Dimensions.get('window').width-40, justifyContent: 'space-between', backgroundColor: '#fff2f0', padding: 15, borderRadius: 15, marginBottom: 10}}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View style={{backgroundColor: '#FFD6D0', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 8}}>
          {
            source === 'name' ? 
            <FontAwesome name="user" size={30} color="#FE6E4F"/> :
            source === 'email' ? 
            <MaterialIcons name="email" size={30} color="#FE6E4F"/> :
            source === 'username' ? 
            <Ionicons name="ios-at" size={30} color="#FE6E4F" style={{marginTop: 3}}/> :
            source === 'classroom' ? 
            <FontAwesome name="users" size={28} color="#FE6E4F"/> :
            source === 'password' ? 
            <FontAwesome name="lock" size={30} color="#FE6E4F"/> : 
            false
          }
        </View>
        {
          source === detailSelected && showDoneGif &&
          <View style={{backgroundColor: '#FFD6D0', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginLeft: -40}}>
            <View style={{width: 100, height: 100}}>
              <LottieView source={require('../../public/done-edit.json')} autoPlay loop={false} speed={0.5} style={{alignSelf: 'flex-end'}} onAnimationFinish={() => setTimeout(() => setShowDoneGif(false), 1000)} />
            </View>
          </View>
        }
        <Text style={{marginLeft: 10, fontWeight: 'bold', letterSpacing: 1, fontSize: 16, color: 'rgba(0, 0, 0, 0.8)', textTransform: 'capitalize'}}>{source}</Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        {
          source !== 'password' ?
          <Text style={{letterSpacing: 1, color: 'rgba(0, 0, 0, 0.4)', fontSize: 16}}>{user[source] && user[source].length > 13 ? `${user[source].slice(0, 13)}...` : user[source]}</Text> :
          <Text style={{letterSpacing: 1, color: 'rgba(0, 0, 0, 0.4)', fontSize: 24, marginTop: 10}}>******</Text>
        }
        <Ionicons onPress={() => clickDetail(source)} name="ios-arrow-forward" size={20} color="#FE6E4F" style={{marginLeft: 5, marginTop: 3}} />
      </View>
    </View>
  );
};

export default DetailList;