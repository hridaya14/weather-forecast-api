import { atom, selector } from 'recoil';
import { top100Cities } from './cities';


export const suggestionState = atom({
  key: 'SuggestionState',
  default: '',
});

export const filteredCities = selector({
  key: 'FilteredCities',
  get: ({ get }) => {
    const suggestionVal = get(suggestionState).toLowerCase();
    if (suggestionVal === '') {
      return top100Cities;
    } else {
      return top100Cities.filter(city => city.toLowerCase().startsWith(suggestionVal));
    }
  },
});






