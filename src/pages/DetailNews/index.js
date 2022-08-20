import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {AngleRight} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const DetailNews = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Card>
          <Card.Title
            title="By Admin"
            subtitle="pembuatan, video, untuk, e-tournament, inkanas"
            left={LeftContent}
          />
          {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
          <Card.Content>
            <Title style={{fontSize: 18}}>
              Pembuatan Video Untuk E-Tournament Inkanas
            </Title>
            <Paragraph>MEKANISME PEMBUATAN VIDEO</Paragraph>
            <FlatList
              data={[
                {
                  key: '1. Peserta menggunakkan Baju Karate dengan Badge INKANAS.',
                },
                {
                  key: '2. Untuk Babak 1 menggunakkan Sabuk Biru, Untuk Babak 2 menggunakkan Sabuk Merah.',
                },
                {
                  key: '3. Pengambilan gambar WAJIB menggunakkan tripod atau alat bantu agar video statis.',
                },
                {key: '4. Video Maksimal 5 menit.'},
                {key: '5. Video belum pernah di publish di media manapun.'},
                {
                  key: '6. Video tidak menggunakkan background music / tidak diedit /tidak dipotong-potong.',
                },
                {key: '7. Kualitas Video minimal 720p.'},
                {
                  key: '8. Pengambilan gambar boleh di tempat dengan matras atau tidak namun tetap memperhatikan keamanan.',
                },
                {
                  key: '9. Panitia berhak mendiskualifikasikan peserta yang tidak sesuai aturan.',
                },
              ]}
              renderItem={({item}) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
            />
          </Card.Content>
          {/* <Card.Actions>
          <TouchableOpacity
            style={{marginLeft: 'auto'}}
            onPress={() => {
              navigation.navigate('MainDrawer', {
                screen: 'DetailNews',
              });
            }}>
            <AngleRight />
          </TouchableOpacity>
        </Card.Actions> */}
        </Card>
      </View>
    </>
  );
};

export default DetailNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  // item: {
  //   padding: 10,
  //   fontSize: 18,
  //   height: 44,
  // },
});
