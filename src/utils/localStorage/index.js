export function writeDataInLocalStorage(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

export default {
  writeDataInLocalStorage,
};
