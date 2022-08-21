import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gap} from '../../components/atom';
import Copyright from '../../components/molecules/Copyright';
import ImagesSwiperApp from '../../components/molecules/ImageSwapper';
import {event_read} from '../../config/API/event_api';
import {getData} from '../../utils';
import {Avatar, Card, IconButton} from 'react-native-paper';
import {AngleRight} from '../../assets';

const Dashboard = () => {
  const navigation = useNavigation();
  const [event, setEvent] = useState();
  const [loadingData, setLoadingData] = useState(false);

  const [username, setUsername] = useState();

  const getEventList = async () => {
    setLoadingData(true);
    let datas = await event_read();
    // console.log(datas?.query);
    setEvent(datas?.query);
    setLoadingData(false);
  };

  useEffect(() => {
    getData('username').then(res => {
      setUsername(res.value);
    });
  }, [username]);

  useEffect(() => {
    getEventList();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          {/* <Header title={username} onPress={() => drawer.current.openDrawer()} /> */}
          <Text style={styles.headerTitle}>Home</Text>
          <ImagesSwiperApp />
          <Gap height={10} />
          {loadingData && <ActivityIndicator size="large" color="#1abc9c" />}
          {event?.map((e, i) => {
            return (
              <>
                <Card.Title
                  key={i}
                  title={<Text style={{fontSize: 14}}>{e.title}</Text>}
                  subtitle={<Text style={{fontSize: 12}}>{e.class}</Text>}
                  right={props => (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('MainDrawer', {
                          screen: 'DetailEvent',
                          params: {
                            e,
                          },
                        });
                      }}>
                      <AngleRight />
                    </TouchableOpacity>
                  )}
                />
              </>
            );
          })}
        </ScrollView>
      </View>
      <Copyright />
    </>
  );
};

export default Dashboard;

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
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomCard: {
    width: 180,
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 6,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  textHeader: {
    color: 'white',
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
});
