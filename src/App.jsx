import React from 'react';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabButton from './components/TabButton';
// constant file ( Array of Tabs )
import {TabArray} from './constants';
import HomeStack from './screens/HomeStack';

import NewsState from './context/News/NewsState';

const Tab = createBottomTabNavigator();

const homeTab = {
  route: 'HomeStack',
  component: HomeStack,
  label: 'Home',
  activeIcon: 'home',
  inActiveIcon: 'home-outline',
  color: 'white',
  alphaColor: '#fa0808',
};

const App = () => {
  return (
    <NewsState>
      <NavigationContainer onReady={() => BootSplash.hide()}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: 60,
              position: 'absolute',
              bottom: 10,
              left: 10,
              right: 10,
              borderRadius: 8,
              backgroundColor: '#1e1e1e',
              borderTopWidth: 0,
              borderWidth: 0,
            },
          }}>
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              headerTitle: 'NewsWave',
              headerStyle: {backgroundColor: '#fa0808'},
              headerTintColor: 'white',
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                fontFamily: 'Montserrat-Medium',
                letterSpacing: 1,
              },
              headerTitleAlign: 'center',
              tabBarButton: props => <TabButton {...props} item={homeTab} />,
            }}
          />
          {TabArray.map((item, index) => (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                headerShown: false,
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </NewsState>
  );
};

export default App;
