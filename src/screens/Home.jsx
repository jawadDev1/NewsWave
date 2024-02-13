import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import NewsCard from '../components/NewsCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import Separator from '../components/Separator';
import NewsContext from '../context/News/NewsContext';
import Loader from '../components/Loader';

const Home = ({navigation}) => {
  const {articals, pending, getTopHeadlines} = useContext(NewsContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTopHeadlines(page);
  }, [page]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Top Headlines</Text>
        <View style={styles.subContainer}>
          <FlatList
            numColumns={2}
            data={articals}
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
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  heading: {
    fontSize: 26,
    fontWeight: '500',
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 14,
  },
  card: {
    flex: 1,
  },
});
