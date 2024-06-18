import { View, Text } from 'react-native'
import React from 'react'

// Array of Tabs 
import {TabArray} from '../constants';
import TabButton from '../components/TabButton';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();



const homeTab = {
    route: 'Home',
    component: Home,
    label: 'Home',
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    color: 'white',
    alphaColor: '#fa0808',
  };

const TabsNavigator = () => {
  return (
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
          }}
          initialRouteName='Home'
          >
          <Tab.Screen
            name="Home"
            component={Home}
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
  )
}

export default TabsNavigator