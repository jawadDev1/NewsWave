import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NewsCard = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri:
            item?.urlToImage ||
            'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg',
        }}
        style={styles.img}
      />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.sourceAndDate}>
          <Text style={styles.sourceAndDateText}>
            {new Date(item.publishedAt).toDateString()}
          </Text>
          <Text style={styles.sourceAndDateText}> . </Text>
          <Text style={styles.sourceAndDateText}>{item.source.name}</Text>
        </Text>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1e1e1e',
    marginHorizontal: 6,
    paddingBottom: 38,
    flex: 1,
  },
  img: {
    height: 130,
    objectFit: 'fill',
  },
  cardBody: {
    padding: 4,
  },
  title: {
    color: '#f6f6f6',
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    marginVertical: 3,
  },
  sourceAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
  },
  sourceAndDateText: {
    fontSize: 14,
    color: '#ececec',
    fontFamily: 'Roboto-Regular',
  },
});
