import {
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Separator from '../components/Separator';
import NewsCard from '../components/NewsCard';
import NewsContext from '../context/News/NewsContext';
import Loader from '../components/Loader';

const Search = ({navigation}) => {
  const {searchArticals, getSearchArticals, pending} = useContext(NewsContext);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const getQueryNews = () => {
    getSearchArticals(query, page);
  };

  useEffect(() => {
    if (query !== '') {
      getQueryNews();
    }
  }, [page]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={text => setQuery(text)}
        />
        <Pressable onPress={getQueryNews} style={styles.search}>
          <Icons
            name="search"
            size={25}
            color="#fff"
            style={styles.searchIcon}
          />
        </Pressable>
      </View>
      <View style={styles.newsContainer}>
        <FlatList
          numColumns={2}
          data={searchArticals}
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
        {pending && <Loader />}
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 14,
    paddingTop: 19,
    paddingBottom: 62,
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 17,
    marginTop: 15,
    paddingHorizontal: 11,
    paddingVertical: 13,
    zIndex: 1,
  },
  search: {
    position: 'absolute',
    height: 60,
    top: 16,
    right: 2,
    zIndex: 1,
  },
  searchIcon: {
    backgroundColor: '#4d4d4d',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  newsContainer: {
    marginVertical: 41,
  },
  card: {
    flex: 1,
  },
});
