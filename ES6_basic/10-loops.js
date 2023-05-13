/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const idx = array[value];
    array[idx] = appendString + value;
  }

  return array;
}
