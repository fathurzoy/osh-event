import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';

import {Cell, Row, Table, TableWrapper} from 'react-native-table-component';
import {IconClose, IconEdit} from '../../assets/Icon';
import {Gap} from '../../components/atom';
// import VideoPlayer from 'react-native-video-controls';
import YoutubePlayer from 'react-native-youtube-iframe';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const ViewParticipantEvent = ({navigation}) => {
  // const data = route.params;
  const [isVisible, setVisible] = useState(false);
  const [eventList, setEventList] = useState();
  const [videoLink, setVideoLink] = useState();
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
        Participant / ID CARD / Name
      </Text>,
      <Text
        style={{paddingLeft: 5, paddingRight: 5, width: 200, color: 'white'}}>
        Team
      </Text>,
      <Text
        style={{paddingLeft: 5, paddingRight: 5, width: 120, color: 'white'}}>
        Video
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
      <Modal
        style={{}}
        animationType="slide"
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            // borderWidth: 1,
            // borderColor: 'red',
            // marginTop: 22,
          }}>
          {/* <VideoPlayer
            source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
            navigator={this.props.navigator}
          /> */}
          {/* <WebView
            javaScriptEnabled={true}
            style={{
              flex: 1,
              borderColor: 'red',
              borderWidth: 1,
              height: 400,
              width: width,
            }}
            source={{
              uri: videoLink,
            }}
          /> */}
          <YoutubePlayer height={300} play={true} videoId={videoLink} />
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Text style={{fontSize: 20, padding: 10}}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ScrollView style={{flex: 1}}>
        <Text style={styles.headerTitle}>Participant Event</Text>
        <Text style={styles.headerTitleSecond}>{eventList?.title}</Text>
        <Text style={styles.headerTitleSecondx}>{eventList?.class}</Text>
        <ScrollView horizontal={true}>
          <View>
            <Table>
              <Row
                data={thead.tableHead}
                style={styles.head}
                textStyle={styles.textWhite}
              />
              {eventList?.event_participants?.length > 0 ? (
                eventList?.event_participants?.map((rowData, index) => {
                  return (
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
                            {rowData?.participant?.id} /{' '}
                            {rowData?.participant?.idcard} /{' '}
                            {rowData?.participant?.name} /{' '}
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
                              width: 200,
                              color: 'black',
                            }}>
                            {rowData?.organization}
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
                                console.log(rowData?.link_video);
                                setVideoLink(rowData?.link_video);
                                setVisible(true);
                              }}>
                              <Text
                                style={{
                                  backgroundColor: 'blue',
                                  color: 'white',
                                  padding: 8,
                                }}>
                                Video
                              </Text>
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
              )}
            </Table>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default ViewParticipantEvent;

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
  headerTitleSecondx: {
    fontSize: 14,
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
