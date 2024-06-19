import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import NewsContext from '../context/News/NewsContext';
import Separator from '../components/Separator';
import NewsCard from '../components/NewsCard';
import Loader from '../components/Loader';

const ListNews = ({route, navigation}) => {
  let {country, code} = route.params;
  let {listArticals, pending, getCountryNews, getCategoryNews} =
    useContext(NewsContext);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (country) {
      getCountryNews(code, page);
    } else if (country === false) {
      getCategoryNews(code, page);
    }
  }, [page, route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {listArticals.length == 0 ? (
          <Text style={styles.text}>
            { pending? '': 'No aritcals to show (check your internet connection)'}
          </Text>
        ) : (
          <FlatList
            numColumns={2}
            data={listArticals}
            ItemSeparatorComponent={Separator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Pressable
                onPress={() => navigation.navigate('NewsDetails', {item})}
                style={styles.card}>
                <NewsCard item={item} style={styles.item} />
              </Pressable>
            )}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.2}
            onEndReached={() => setPage(page + 1)}
          />
        )}
      </View>
      {pending && <Loader />}
    </View>
  );
};

export default ListNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  subContainer: {
    marginVertical: 11,
  },
  card: {
    flex: 1,
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    color: 'gray',
  },
});
