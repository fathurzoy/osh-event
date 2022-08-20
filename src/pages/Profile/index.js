import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {IconEdit} from '../../assets';
import {TextInput} from '../../components/atom';
import Copyright from '../../components/molecules/Copyright';
import {admin_update} from '../../config/API/login_api';
import {getData, showMessage} from '../../utils';

const Profile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [userClickDataId, setUserClickDataId] = useState();

  const [username, setUsername] = useState();
  const [user, setUser] = useState();
  const [tokenx, setTokenx] = useState();

  useEffect(() => {
    getData('username').then(res => {
      setUsername(res.value);
    });
    getData('user').then(res => {
      setUser(res.value);
    });
    getData('token_tel').then(res => {
      setTokenx(res.value);
    });
  }, [username, user]);

  return (
    <>
      <View style={styles.container}>
        <ModalPassword
          tokenx={tokenx}
          user={user}
          modal={[modalVisible, setModalVisible]}
          userClickData={[userClickDataId, setUserClickDataId]}
        />
        <ModalEdit
          tokenx={tokenx}
          user={user}
          modal={[modalVisible2, setModalVisible2]}
          userClickData={[userClickDataId, setUserClickDataId]}
        />
        <ScrollView style={{flex: 1}}>
          {/* <Header title={username} onPress={() => drawer.current.openDrawer()} /> */}
          <Text style={styles.headerTitle}>Profile</Text>

          <View style={styles.field}>
            <Text style={styles.titleName}>username</Text>
            <Text>:</Text>
            <Text>{user?.username}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.titleName}>name</Text>
            <Text>:</Text>
            <Text>{user?.name}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.titleName}>role</Text>
            <Text>:</Text>
            <Text>{user?.role}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.titleName}>email</Text>
            <Text>:</Text>
            <Text>{user?.email}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.titleName}>phone</Text>
            <Text>:</Text>
            <Text>{user?.phone}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.titleName}>gender</Text>
            <Text>:</Text>
            <Text>{user?.gender}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setUserClickDataId(user);
              setModalVisible2(!modalVisible2);
            }}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setUserClickDataId(user);
              setModalVisible(!modalVisible);
            }}>
            <Text>Ubah Password</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Copyright />
    </>
  );
};

export default Profile;

const ModalPassword = ({modal, userClickData, tokenx}) => {
  const [modalVisible, setModalVisible] = modal;
  const [userClickDataId, setUserClickDataId] = userClickData;
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    id: null,
    username: null,
    new_password: null,
    confirm_password: null,
  });

  const setDataForm = async () => {
    setForm({
      id: userClickDataId.id,
      username: userClickDataId.username,
    });
  };

  useEffect(() => {
    setDataForm();
    // console.log(userClickDataId);
  }, [modalVisible]);

  const kelolaUser = () => {
    if (form.new_password !== form.confirm_password) {
      showMessage('Gagal, Password tidak sama', 'error');
    } else {
      dispatch(
        admin_update({
          id: form.id,
          password: form.new_password,
          token: tokenx,
        }),
      );
    }
    setModalVisible(!modalVisible);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      backdropOpacity={0.1}
      wipeToClose={true}
      swipeArea={20} // The height in pixels of the swipeable area, window height by default
      swipeThreshold={50}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{marginBottom: 30, fontSize: 20, fontWeight: 'bold'}}>
              UBAH PASSWORD
            </Text>
            <View style={{width: 250, marginBottom: 10}}>
              <TextInput
                label="Username"
                placeholder="Username"
                editable={false}
                selectTextOnFocus={false}
                value={form.username}
                onChangeText={value => setForm({...form, username: value})}
              />
            </View>
            <View style={{width: 250, marginBottom: 10}}>
              <TextInput
                label="Ubah Password"
                placeholder="Masukan Password"
                value={form.new_password}
                onChangeText={value => setForm({...form, new_password: value})}
              />
            </View>
            <View style={{width: 250, marginBottom: 10}}>
              <TextInput
                label="Komfirm Password"
                placeholder="Masukan Ulan Password"
                value={form.confirm_password}
                onChangeText={value =>
                  setForm({...form, confirm_password: value})
                }
              />
            </View>
            <View style={{width: 250, marginBottom: 10, marginTop: 10}}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => kelolaUser()}>
                <Text style={styles.textStyle}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const ModalEdit = ({modal, userClickData, tokenx}) => {
  const [modalVisible2, setModalVisible2] = modal;
  const [userClickDataId, setUserClickDataId] = userClickData;
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    id: null,
    username: null,
    phone: null,
    email: null,
    password: null,
  });

  const setDataForm = async () => {
    setForm({
      id: userClickDataId.id,
      username: userClickDataId.username,
      phone: userClickDataId.phone,
      email: userClickDataId.email,
      password: null,
    });
  };

  useEffect(() => {
    setDataForm();
    // console.log(userClickDataId);
  }, []);

  const kelolaUser = () => {
    const data = dispatch(
      admin_update({
        id: form.id,
        password: form.password,
        phone: form.phone.toString(),
        email: form.email,
        token: tokenx,
      }),
    );
    console.log(data);
    setModalVisible2(!modalVisible2);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible2}
      backdropOpacity={0.1}
      wipeToClose={true}
      swipeArea={20} // The height in pixels of the swipeable area, window height by default
      swipeThreshold={50}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setModalVisible2(!modalVisible2);
      }}>
      <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{marginBottom: 30, fontSize: 20, fontWeight: 'bold'}}>
              UBAH PASSWORD
            </Text>
            <View style={{width: 250, marginBottom: 10}}>
              <TextInput
                label="Username"
                placeholder="Username"
                editable={false}
                selectTextOnFocus={false}
                value={form.username}
                onChangeText={value => setForm({...form, username: value})}
              />
            </View>
            <View style={{width: 250, marginBottom: 10}}>
              <TextInput
                label="Phone"
                placeholder="Phone"
                editable={true}
                selectTextOnFocus={false}
                value={form.phone}
                onChangeText={value => setForm({...form, phone: value})}
              />
            </View>
            <View style={{width: 250, marginBottom: 10}}>
              <TextInput
                label="Email"
                placeholder="Email"
                editable={true}
                selectTextOnFocus={false}
                value={form.email}
                onChangeText={value => setForm({...form, email: value})}
              />
            </View>
            <View style={{width: 250, marginBottom: 10}}>
              <TextInput
                label="Password"
                placeholder="Masukan Password"
                value={form.password}
                onChangeText={value => setForm({...form, password: value})}
              />
            </View>
            <View style={{width: 250, marginBottom: 10, marginTop: 10}}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => kelolaUser()}>
                <Text style={styles.textStyle}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  titleName: {width: 80},
  field: {flexDirection: 'row'},
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  sectionCard: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
  cardContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 20,
  },
  headerCard: {
    backgroundColor: 'red',
    width: 180,
    height: 40,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  bottomCard: {
    width: 180,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: 6,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  textHeader: {
    color: 'white',
    textAlign: 'left',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonShadow: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    borderRadius: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
