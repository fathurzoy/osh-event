import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
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
const DetailEvent = () => {
  // const data = route.params;
  const navigation = useNavigation();
  const [eventList, setEventList] = useState();
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
        style={{paddingLeft: 5, paddingRight: 5, width: 200, color: 'white'}}>
        Class Name
      </Text>,
      <Text
        style={{paddingLeft: 5, paddingRight: 5, width: 120, color: 'white'}}>
        Participant
      </Text>,
      <Text
        style={{paddingLeft: 5, paddingRight: 5, width: 150, color: 'white'}}>
        Type
      </Text>,

      <Text
        style={{paddingLeft: 5, paddingRight: 5, width: 120, color: 'white'}}>
        Action
      </Text>,
    ],
  });
  const route = useRoute();

  useEffect(() => {
    setEventList(route.params.e);
    console.log(eventList);
  }, [route, navigation, route.name]);

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Text style={styles.headerTitle}>Detail Event</Text>
        <Text style={styles.headerTitleSecond}>{eventList?.title}</Text>
        <ScrollView horizontal={true}>
          <View>
            <Table>
              <Row
                data={thead.tableHead}
                style={styles.head}
                textStyle={styles.textWhite}
              />

              <TableWrapper style={styles.row}>
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
                      {1}
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
                        width: 200,
                        color: 'black',
                      }}>
                      {eventList?.class}
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
                        width: 120,
                        color: 'black',
                      }}>
                      {eventList?.event_participants?.length}
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
                        width: 150,
                        color: 'black',
                      }}>
                      {eventList?.eventtype}
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
                          navigation.navigate('MainDrawer', {
                            screen: 'ViewParticipantEvent',
                            params: route.params,
                          });
                        }}>
                        <Text
                          style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            padding: 8,
                          }}>
                          View
                        </Text>
                      </TouchableOpacity>
                    </View>
                  }
                  textStyle={styles.text}
                />
              </TableWrapper>
            </Table>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default DetailEvent;

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
  headerTitleSecond: {
    fontSize: 14,
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
