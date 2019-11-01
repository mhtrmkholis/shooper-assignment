import React, { useState } from 'react';
import { View, Text, Modal, SafeAreaView, Dimensions, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ProfileNotification from '../components/profile-notification';
import ViewArea from '../components/profile-view-area';
import DetailList from '../components/profile-detail-list';
import { Ionicons } from 'react-native-vector-icons';
import { UpdateUser } from '../stores/actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  UpdateUser
};

function ProfilePage(props) {
  const [newUser, setNewUser] = useState(props.user);
  const [modalView, setModalView] = useState(false);
  const [detailSelected, setDetailSelected] = useState('');
  const [newValue, setNewValue] = useState('');
  const [showDoneGif, setShowDoneGif] = useState(false);

  function clickDetail(source) {
    setModalView(true);
    setDetailSelected(source);
  };

  async function submitUpdate() {
    newUser.password = '';
    newUser[detailSelected] = newValue;
    // alert(JSON.stringify(newUser))
    if (detailSelected !== 'email') {
      props.UpdateUser(props.user.id, newUser)
    };
    setShowDoneGif(true);
    // setDetailSelected('');
    setNewValue('');
    setModalView(false);
  };

  return (
    <ScrollView>
      <ViewArea user={props.user} navigation={props.navigation} />
      
      <View style={{backgroundColor: '#FFA08F'}}>
        <View style={{padding: 20, backgroundColor: '#fff', borderTopEndRadius: 50, borderTopStartRadius: 50}}>
          { 
            !props.user.email &&
            <ProfileNotification user={props.user} setModalView={setModalView} setDetailSelected={setDetailSelected} />
          }
          <DetailList user={props.user} source={'name'} clickDetail={clickDetail} showDoneGif={showDoneGif} setShowDoneGif={setShowDoneGif} detailSelected={detailSelected}/>
          <DetailList user={props.user} source={'email'} clickDetail={clickDetail} showDoneGif={showDoneGif} setShowDoneGif={setShowDoneGif} detailSelected={detailSelected}/>
          <DetailList user={props.user} source={'username'} clickDetail={clickDetail} showDoneGif={showDoneGif} setShowDoneGif={setShowDoneGif} detailSelected={detailSelected}/>
          <DetailList user={props.user} source={'classroom'} clickDetail={clickDetail} showDoneGif={showDoneGif} setShowDoneGif={setShowDoneGif} detailSelected={detailSelected}/>
          <DetailList user={props.user} source={'password'} clickDetail={clickDetail} showDoneGif={showDoneGif} setShowDoneGif={setShowDoneGif} detailSelected={detailSelected}/>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalView}
      >
        <SafeAreaView style={{height: Dimensions.get('window').height, display: 'flex', justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
          <View style={{backgroundColor: '#FFD6D0', height: Dimensions.get('window').height/2.5, borderTopEndRadius: 50, borderTopStartRadius: 50, padding: 20}}>
            <Ionicons onPress={() => {
              setModalView(false)
              setNewValue('')
              }} name="ios-close-circle" size={35} color="#FE6E4F" style={{alignSelf: 'flex-end'}} />

            <Text style={{textTransform: 'capitalize', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.6)', fontSize: 18}}>{detailSelected === 'password' ? 'Enter new password:' : `Edit ${detailSelected}:`}</Text>
            <TextInput 
              value={detailSelected === 'password' ? '' : newValue || props.user[detailSelected]}
              style={{backgroundColor: 'rgba(255, 255, 255, 0.4)', height: 50, borderRadius: 8, fontSize: 18, paddingLeft: 15, marginTop: 10, color: 'rgba(0, 0, 0, 0.8)'}}
              label="NewName"
              secureTextEntry={detailSelected === 'password' ? true : false}
              onChangeText={value => setNewValue(value)}
            /> 

            <View style={{display: 'flex', justifyContent: 'flex-end', height: '50%'}}>
              <TouchableHighlight style={{backgroundColor: !newValue ? 'rgba(0, 0, 0, 0.4)' : '#FE6E4F', borderRadius: 15, padding: 20}} underlayColor='rgba(0, 0, 0, 0.4)' onPress={() => {
                newValue ?
                submitUpdate(detailSelected, props.user.id, newValue) :
                false
              }} >
                <Text style={{textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 'bold', letterSpacing: 1, fontSize: 20}}>Save</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </ScrollView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);