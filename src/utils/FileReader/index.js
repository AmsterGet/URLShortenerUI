const reader = new FileReader();

function readFile(file) {
  reader.onload = (event) => {
    console.log(event.target.result);
    return event.target.result;
  };
  reader.readAsText(file);
}

export default {
  readFile,
};
