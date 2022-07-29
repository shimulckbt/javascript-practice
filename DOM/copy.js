function copyToClipboard(str) {
  const element = document.createElement("textarea");
  element.value = str;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}


function clickHandler() {
  text = document.querySelector("#text");
  copyToClipboard(text.innerText);
}