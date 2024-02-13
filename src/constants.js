// Screens
import CountryStack from './screens/CountryStack';
import CategoryStack from './screens/CategoryStack';
import SearchStack from './screens/SearchStack';

export const TabArray = [
    {
      route: 'CountryStack',
      component: CountryStack,
      label: 'Country',
      activeIcon: 'globe',
      inActiveIcon: 'globe-outline',
      color: 'white',
      alphaColor: '#fa0808',
    },
    {
      route: 'CategoryStack',
      component: CategoryStack,
      label: 'Category',
      activeIcon: 'list',
      inActiveIcon: 'list-outline',
      color: 'white',
      alphaColor: '#fa0808',
    },
    {
      route: 'SearchStack',
      component: SearchStack,
      label: 'Search',
      activeIcon: 'search',
      inActiveIcon: 'search-outline',
      color: 'white',
      alphaColor: '#fa0808',
    },
  ];

// Countries
export const Countries = [
  ["America", "us"],
  ["Japan", "jp"],
  ["Russia", "ru"],
  ["China", "cn"],
  ["South Korea", "kr"],
  ["Germany", "de"],
  ["Canada", "ca"],
  ["United Arab Emirates", "ae"],
  ["India", "in"],
  ["Autrilia", "au"],
  ["England", "gb"],
  ["Brazil", "br"],
  ["France", "fr"],
  ["Turkey", "tr"],
]

// Categories
export const Categories = [
  ["Business", "business"],
["Entertainment", "entertainment"],
["General", "general"],
["Health", "health"],
["Science", "science"],
["Sports", "sports"],
["Technology", "technology"],
]


