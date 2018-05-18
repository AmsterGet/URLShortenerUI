const reader = new FileReader();

function readFile(file) {
  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      return resolve(event.target.result);
    };
    reader.onerror = (error) => {
      return reject(error);
    };
    reader.readAsText(file);
  });
}

export default {
  readFile,
};
