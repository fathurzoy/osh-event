import React from 'react';
import {Dimensions, FlatList, Image, View} from 'react-native';

function Slide({data}) {
  return (
    <View
      style={{
        height: windowHeight * 0.3,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{uri: data.image}}
        style={{width: windowWidth, height: windowHeight * 0.9}}
      />
    </View>
  );
}

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const Carousels = () => {
  const slideList = Array.from({length: 30}).map((_, i) => {
    return {
      id: i,
      image: `https://picsum.photos/1440/2842?random=${i}`,
    };
  });
  return (
    <FlatList
      data={slideList}
      style={{flex: 1}}
      renderItem={({item}) => {
        return <Slide data={item} />;
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Carousels;
