function openFile(e) {
  let input = e.target;
  let reader = new FileReader();
  reader.onload = function() {
    let str = reader.result;
  };
  reader.readAsText(input.files[0]);
}
