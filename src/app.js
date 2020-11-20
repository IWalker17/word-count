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

  wordFreq(arr) {
    let wordCounts = {};
    for(let i = 0; i < arr.length; i++) {
      if(!wordCounts[arr[i]]) {
        wordCounts[arr[i]] = 1;
      } else {
        wordCounts[arr[i]] = wordCounts[arr[i]] + 1;
      }
    }
    return wordCounts;
  },

  noDups(arr) {
    let keys = [];
    let c = 0;
    while(c < arr.length) {
      if(keys.indexOf(arr[c]) === -1) {
        keys.push(arr[c]);
        c++;
      } else {
        c++;
      }
    }
    return keys;
  },

  descSort(arr) {
    let x = arr.sort(function(a, b){
      return b - a;
    });
    return x;
  },
};
