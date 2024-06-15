import React from 'react';
import WebView from 'react-native-webview';

const ReadMore = ({route}) => {
  console.log(route.params?.url);
  return <WebView source={{uri: route.params?.url}} style={{flex: 1}} />;
};

export default ReadMore;
