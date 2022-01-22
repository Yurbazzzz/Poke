function searchTextOnPage(inputId) {
    var obj = window.document.getElementById('inputId');
    var textToFind;
    if (obj) {
      textToFind = obj.value;
    } else {
      alert("Немогу найти текст = " + inputId);
      return;
    }
    if (textToFind == "") {
      alert("Вы ничего не ввели");
      return;
    }

    document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/g"),`<h3 class ='find'>Find</h3>`);
    var obj = window.document.getElementById('inputId');
    obj.value = textToFind;
}