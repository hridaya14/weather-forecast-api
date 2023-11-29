import { atom, selector } from 'recoil';

export const top100Cities = [
    "Tokyo,JP", "New York,US", "São Paulo,BR", "Seoul,KR", "Mexico City,MX",
    "Jakarta,ID", "Delhi,IN", "Shanghai,CN", "Manila,PH", "Karachi,PK", "Beijing,CN",
    "Los Angeles,US", "Moscow,RU", "Dhaka,BD", "Cairo,EG", "Osaka,JP", "Bangkok,TH",
    "Buenos Aires,AR", "Kolkata,IN", "Istanbul,TR", "Mumbai,IN", "Lagos,NG", "Lima,PE",
    "Kinshasa,CD", "Ho Chi Minh City,VN", "Bogotá,CO", "Johannesburg,ZA", "Baghdad,IQ",
    "Tehran,IR", "Hanoi,VN", "Bangalore,IN", "Bangkok,TH", "Barcelona,ES", "Berlin,DE",
    "Cape Town,ZA", "Chicago,US", "Dubai,AE", "Dublin,IE", "Edinburgh,GB", "Frankfurt,DE",
    "Geneva,CH", "Havana,CU", "Helsinki,FI", "Hong Kong,HK", "Honolulu,US", "Istanbul,TR",
    "Johannesburg,ZA", "Kingston,JM", "Kuala Lumpur,MY", "Lisbon,PT", "London,GB", "Madrid,ES",
    "Manila,PH", "Melbourne,AU", "Milan,IT", "Montreal,CA", "Moscow,RU", "Mumbai,IN", "Nairobi,KE",
    "Nashville,US", "New Orleans,US", "Osaka,JP", "Oslo,NO", "Paris,FR", "Prague,CZ", "Reykjavik,IS",
    "Rome,IT", "San Francisco,US", "São Paulo,BR", "Seoul,KR", "Singapore,SG", "Stockholm,SE", "Sydney,AU",
    "Taipei,TW", "Tokyo,JP", "Toronto,CA", "Vancouver,CA", "Vienna,AT", "Warsaw,PL", "Zurich,CH",
  ];

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






