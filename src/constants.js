// Screens

import Search from './screens/Search';
import ExploreCountry from './screens/ExploreCountry';
import ExploreCategory from './screens/ExploreCategory';

export const TabArray = [
    {
      route: 'ExploreCountry',
      component: ExploreCountry,
      label: 'Country',
      activeIcon: 'globe',
      inActiveIcon: 'globe-outline',
      color: 'white',
      alphaColor: '#fa0808',
    },
    {
      route: 'ExploreCategory',
      component: ExploreCategory,
      label: 'Category',
      activeIcon: 'list',
      inActiveIcon: 'list-outline',
      color: 'white',
      alphaColor: '#fa0808',
    },
    {
      route: 'Search',
      component: Search,
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


