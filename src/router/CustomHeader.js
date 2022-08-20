import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Modal,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {
  BarSolid,
  IconCircleCheck,
  IconCommentDots,
  IconRollback,
} from '../assets';
import {Avatar} from 'react-native-paper';
import {Gap} from '../components/atom';
import {Badge} from 'react-native-elements';
import {Card} from 'react-native-elements/dist/card/Card';
import {getData, showMessage} from '../utils';
import {useDispatch, useSelector} from 'react-redux';

function CustomHeader(props) {
  const [modalComment, setModalComment] = useState(false);
  const [requestAdminId, setRequestAdminId] = useState();
  const [requestList, setRequestList] = useState([{}]);
  const [username, setUsername] = useState();
  const {isLoading} = useSelector(state => state.globalReducer);

  const toggleDrawer = () =>
    props.navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <SafeAreaView>
      <ModalForm
        modal={[modalComment, setModalComment]}
        dataRequest={requestList}
        dataId={requestAdminId}
        username={username}
      />
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={toggleDrawer}
            activeOpacity={0.7}
            style={styles.leftButton}
            testID="CustomHeader-toggleDrawer">
            <BarSolid />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Image
            source={require('./../assets/Ilustration/logo.png')}
            style={styles.logo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const ModalForm = ({modal, dataRequest, dataId, username}) => {
  const [modalVisible, setModalVisible] = modal;
  const dispatch = useDispatch();

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
            <Text style={{marginBottom: 15, fontSize: 20, fontWeight: 'bold'}}>
              Request Close
            </Text>
            {dataRequest &&
              dataRequest?.query?.map((rowData, index) => {
                // console.log(rowData);
                return (
                  <Card containerStyle={{borderRadius: 10}}>
                    <Text
                      style={{
                        borderBottomWidth: 1,
                        fontWeight: 'bold',
                        paddingBottom: 5,
                      }}>
                      {rowData.divisi.name}
                    </Text>
                    <View style={{marginTop: 10, marginBottom: 15}}>
                      <Text>
                        <Text
                          style={{
                            fontWeight: '600',
                            textTransform: 'capitalize',
                          }}>
                          nama program
                        </Text>{' '}
                        : {rowData.nama_program}
                      </Text>
                      <Text>
                        <Text
                          style={{
                            fontWeight: '600',
                            textTransform: 'capitalize',
                          }}>
                          plan
                        </Text>{' '}
                        : {rowData.plan}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          updateStatusProker({
                            id: rowData.id,
                            status: 'progres',
                            keterangan: 'progres',
                          });
                        }}>
                        <IconRollback />
                      </TouchableOpacity>

                      {(username === 'admin' || username === 'super_admin') && (
                        <>
                          <Gap width={5} />
                          <TouchableOpacity
                            onPress={() => {
                              updateStatusProker({
                                id: rowData.id,
                                status: 'close',
                                keterangan: 'close',
                              });
                            }}>
                            <IconCircleCheck />
                          </TouchableOpacity>
                        </>
                      )}
                    </View>
                  </Card>
                );
              })}
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red',
    minHeight: 60,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  leftButton: {
    marginLeft: 15,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20,
  },
  buttonTxt: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  logo: {
    width: 180,
    height: 40,
  },
});

export default CustomHeader;
