import { searchResults, designObject } from './mocks'

export function search(query) {
  return fetch(
    'http://search.spoonflower.com/searchv2/designs?utf8=%E2%9C%93&q=&lang=en&availability=for_sale&substrate=all&sort=classic&view=design&offset=0&limit=30&color_family1=&color_family2=&commit=Search'
  ).then(result => {
    if (result.ok) {
      return result.json()
    }
  })
}

export function mock_search() {
  return searchResults
}

export function mock_object() {
  return designObject
}
