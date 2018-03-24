import { searchResults, designObject } from './mocks'

export function search(
  query = '',
  availability = 'for_sale',
  limit = '30',
  color1 = '',
  color2 = ''
) {
  return fetch(
    `https://search.spoonflower.com/searchv2/designs?utf8=%E2%9C%93&q=${query}&lang=en&availability=${availability}&substrate=all&sort=classic&view=design&offset=0&limit=${limit}&color_family1=${color1}&color_family2=${color2}&commit=Search`
  ).then(result => {
    if (result.ok) {
      return result.json()
    } else {
      throw Error(`${result.status}: ${result.statusText}`)
    }
  })
}

export function mock_search() {
  return searchResults
}

export function mock_object() {
  return designObject
}
