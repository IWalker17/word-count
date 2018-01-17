module.exports = {

  loadFile(e) {
    let input = e.target;
    let reader = new FileReader();
    reader.onload = function() {
      let str = reader.result;
    };
    reader.readAsText(input.files[0]);
  },

  mkArr(str) {
    let arr = str.split(' ');
    return arr;
  },

};
