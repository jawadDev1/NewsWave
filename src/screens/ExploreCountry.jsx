import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Countries} from '../constants';
import ExploreCard from '../components/ExploreCard';

const ExploreCountry = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Countries</Text>
      <FlatList
        data={Countries}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ExploreCard item={item} navigation={navigation} check={'country'} />
        )}
      />
    </View>
  );
};

export default ExploreCountry;

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
