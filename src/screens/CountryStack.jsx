import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavStack from '../components/NavStack';
import ExploreCountry from './ExploreCountry';

const Stack = createNativeStackNavigator();

const CountryStack = () => {
  return (
    <NavStack mainRoute={'ExploreCountry'} mainComponent={ExploreCountry} />
  );
};

export default CountryStack;
