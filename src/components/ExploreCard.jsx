import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

const ExploreCard = ({item, navigation, check}) => {
  const [country, setCountry] = useState(null);
  const [code, setCode] = useState(item[1]);

  useEffect(() => {
    if (check == 'country') {
      setCountry(true);
      setCode(item[1]);
    } else if (check === 'category') {
      setCountry(false);
      setCode(item[1]);
    }
  }, [code, check, item]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ListNews', {
          country,
          code,
        })
      }>
      <Text style={styles.countryName}>{item[0]}</Text>
      <Icons name="chevron-forward-sharp" size={36} color={'#fff'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#3d3d3d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
    borderRadius: 7,
    marginVertical: 5,
  },
  countryName: {
    fontSize: 26,
    fontWeight: '500',
    fontFamily: 'Montserrat-MediumBold',
    color: '#fff',
  },
});

export default ExploreCard;
