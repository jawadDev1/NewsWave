import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListNews from '../screens/ListNews';
import NewsDetails from '../screens/NewsDetails';
import ReadMore from '../screens/ReadMore';


const Stack = createNativeStackNavigator();

const NavStack = ({ mainRoute, mainComponent }) => {
  
  return (
    <Stack.Navigator initialRouteName={mainRoute}>
      <Stack.Screen
        name={mainRoute}
        component={mainComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListNews"
        component={ListNews}
        options={{
          headerStyle: {backgroundColor: '#1e1e1e'},
          headerTitle: '',
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{
          headerStyle: {backgroundColor: '#1e1e1e'},
          headerTitle: '',
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="ReadMore"
        component={ReadMore}
        options={{
          headerStyle: {backgroundColor: '#1e1e1e'},
          headerTitle: '',
          headerTintColor: '#fff',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default NavStack;
