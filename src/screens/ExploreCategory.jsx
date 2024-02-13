import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Categories} from '../constants';
import ExploreCard from '../components/ExploreCard';

const ExploreCategory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <FlatList
        data={Categories}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ExploreCard item={item} navigation={navigation} check={'category'} />
        )}
      />
    </View>
  );
};

export default ExploreCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 8,
    paddingTop: 15,
    paddingBottom: 62,
  },
  heading: {
    fontSize: 26,
    fontWeight: '500',
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 14,
  },
});
