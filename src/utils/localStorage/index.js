function writeDataByKey(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

function removeDataByKey(key) {
  window.localStorage.removeItem(key);
}

function getDataByKey(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

function clear() {
  window.localStorage.clear();
}

export default {
  writeDataByKey,
  removeDataByKey,
  getDataByKey,
  clear,
};
