import {useEffect, useState} from 'react';
import NewsContext from './NewsContext';
import Snackbar from 'react-native-snackbar';
import {NEWS_API_KEY} from '@env';

const NewsState = ({children}) => {
  const [articals, setArticals] = useState([]);
  const [listArticals, setListArticals] = useState([]);
  const [pending, setPending] = useState(false);
  const [code, setCode] = useState('');

  const [query, setQuery] = useState('');
  const [searchArticals, setSearchArticals] = useState([]);

  const getArticals = async url => {
    try {
      setPending(true);
      const res = await fetch(url);
      const data = await res.json();
      let {articles} = data;

      if (articals == undefined) {
        Snackbar.show({
          text: 'Check your internet connection!',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_SHORT,
        });
        setPending(false);
        return;
      }

      setPending(false);
      return articles;
    } catch (error) {
      Snackbar.show({
        text: 'Some error occured',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
      });
      console.log('Error in NewsState:: getArticals :: ', error);
      setPending(false);
    }
  };

  // Get Top Headlines for Home Page
  const getTopHeadlines = async page => {
    let result = await getArticals(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}&page=${page}&pageSize=15`,
    );

    if (result) {
      setArticals(prevArticals => [...prevArticals, ...result]);
    }
  };

  // Get Country News
  const getCountryNews = async (countryCode, page) => {
    if (code !== countryCode) {
      setCode(countryCode);
    }
    let result = await getArticals(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${NEWS_API_KEY}&page=${page}&pageSize=15`,
    );
    if (result) {
      setListArticals(prevArticals => [...prevArticals, ...result]);
    }
  };

  // Get Category News
  const getCategoryNews = async (categoryCode, page) => {
    if (code !== categoryCode) {
      setCode(categoryCode);
    }
    let result = await getArticals(
      `https://newsapi.org/v2/top-headlines?category=${categoryCode}&apiKey=${NEWS_API_KEY}&page=${page}&pageSize=15`,
    );
    if (result) {
      setListArticals(prevArticals => [...prevArticals, ...result]);
    }
  };

  // Search any News
  const getSearchArticals = async (searchQuery, page) => {
    if (query !== searchQuery) {
      setQuery(searchQuery);
    }

    let result = await getArticals(
      `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${NEWS_API_KEY}&page=${page}&pageSize=15`,
    );
    if (result) {
      setSearchArticals(prevArticals => [...prevArticals, ...result]);
    }
  };

  useEffect(() => {
    setListArticals([]);
    setSearchArticals([]);
  }, [code, query]);

  return (
    <NewsContext.Provider
      value={{
        articals,
        getTopHeadlines,
        pending,
        getCountryNews,
        listArticals,
        getCategoryNews,
        searchArticals,
        getSearchArticals,
      }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsState;
