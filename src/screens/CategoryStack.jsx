import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavStack from '../components/NavStack';
import ExploreCategory from './ExploreCategory';

const Stack = createNativeStackNavigator();

const CategoryStack = () => {
  return (
    <NavStack mainRoute="ExploreCategory" mainComponent={ExploreCategory} />
  );
};

export default CategoryStack;
