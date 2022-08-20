import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Cell, Row, Table, TableWrapper} from 'react-native-table-component';
import {IconClose, IconEdit} from '../../assets/Icon';
import {Gap} from '../../components/atom';
import {getData} from '../../utils';
const ManageAdmin = () => {
  const [thead, setThead] = useState({
    tableHead: [
      <Text
        style={{
          paddingLeft: 10,
          paddingRight: 5,
          height: 40,
          width: 50,
          color: 'white',
          textAlignVertical: 'center',
        }}>
        No
      </Text>,
      <Text
        style={{paddingLeft: 5, paddingRight: 5, width: 120, color: 'white'}}>
        Username
      </Text>,
      <Text
        style={{paddingLeft: 5, paddingRight: 5, width: 120, color: 'white'}}>
        Name
      </Text>,
      <Text
        style={{paddingLeft: 5, paddingRight: 5, width: 150, color: 'white'}}>
        Email
      </Text>,
      <Text
        style={{paddingLeft: 5, paddingRight: 5, width: 250, color: 'white'}}>
        Organization
      </Text>,
      <Text
        style={{paddingLeft: 5, paddingRight: 5, width: 120, color: 'white'}}>
        Action
      </Text>,
    ],
  });
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
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Manage Member</Text>
      <ScrollView horizontal={true}>
        <View>
          <Table>
            <Row
              data={thead.tableHead}
              style={styles.head}
              textStyle={styles.textWhite}
            />

            {/* {Object.keys(prokerListMany).length > 0 ? (
              prokerListMany?.query?.map((rowData, index) => {
                return (
                  <TableWrapper key={index} style={styles.row}>
                    <Cell
                      style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        borderStyle: 'solid',
                      }}
                      data={
                        <Text
                          style={{
                            paddingLeft: 10,
                            paddingLeft: 5,
                            paddingRight: 5,
                            width: 50,
                            color: 'black',
                            paddingVertical: 15,
                          }}>
                          {page * 10 - 10 + index + 1}
                        </Text>
                      }
                      textStyle={styles.text}
                    />
                    <Cell
                      style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        borderStyle: 'solid',
                      }}
                      data={
                        <Text
                          style={{
                            paddingLeft: 5,
                            paddingRight: 5,
                            width: 120,
                            color: 'black',
                          }}>
                          {rowData.nama_program}
                        </Text>
                      }
                      textStyle={styles.text}
                    />
                    <Cell
                      style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        borderStyle: 'solid',
                      }}
                      data={
                        <Text
                          style={{
                            paddingLeft: 5,
                            paddingRight: 5,
                            paddingVertical: 5,
                            width: 350,
                            color: 'black',
                          }}>
                          {rowData.plan}
                        </Text>
                      }
                      textStyle={styles.text}
                    />
                    <Cell
                      style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        borderStyle: 'solid',
                      }}
                      data={
                        <Text
                          style={{
                            paddingLeft: 5,
                            paddingRight: 5,
                            width: 100,
                            color: 'black',
                          }}>
                          {rowData.target}
                        </Text>
                      }
                      textStyle={styles.text}
                    />
                    <Cell
                      style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        borderStyle: 'solid',
                      }}
                      data={
                        <Text
                          style={{
                            paddingLeft: 5,
                            paddingRight: 5,
                            width: 120,
                            color: 'black',
                          }}>
                          {rowData.keterangan}
                        </Text>
                      }
                      textStyle={styles.text}
                    />
                    <Cell
                      style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        borderStyle: 'solid',
                      }}
                      data={
                        <Text
                          style={{
                            paddingLeft: 5,
                            paddingRight: 5,
                            width: 120,
                            color: 'black',
                          }}>
                          {rowData.bulan}
                        </Text>
                      }
                      textStyle={styles.text}
                    />
                    <Cell
                      style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        borderStyle: 'solid',
                      }}
                      data={
                        <View
                          style={{
                            flexDirection: 'row',
                            width: 120,
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRightWidth: 1,
                            borderRightColor: '#000',
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              setStaffClick(rowData);
                              setModalVisible(true);
                            }}>
                            <IconEdit />
                          </TouchableOpacity>
                          <Gap width={10} />
                          <TouchableOpacity
                            onPress={() =>
                              closeConfirm({
                                id: rowData.id,
                                status: 'request',
                                keterangan: 'request',
                              })
                            }>
                            <IconClose />
                          </TouchableOpacity>
                        </View>
                      }
                      textStyle={styles.text}
                    />
                  </TableWrapper>
                );
              })
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color="#1abc9c" />
                <Gap width={10} />
                <Text>Loading...</Text>
              </View>
            )} */}
          </Table>
        </View>
      </ScrollView>
    </View>
  );
};

export default ManageAdmin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  head: {backgroundColor: '#fb0b12'},
  textWhite: {color: '#fff'},
  row: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  btnText: {textAlign: 'center', color: '#fff'},
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
