import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const NewsDetails = ({route}) => {
  const item = route.params?.item;

  useEffect(() => {}, [route?.params]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            item?.urlToImage ||
            'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg',
        }}
        style={styles.img}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  img: {
    height: '35%',
    objectFit: 'fill',
  },
  title: {
    color: '#f6f6f6',
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginVertical: 7,
  },
  description: {
    color: '#ececec',
    fontSize: 17,
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
  },
});

export default NewsDetails;
