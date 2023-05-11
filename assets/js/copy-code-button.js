function createCopyButton(highlightDiv) {
  const button = document.createElement("button");
  button.className = "copy-code-button";
  button.type = "button";
  button.innerText = "Copy";
  button.title = "copy-code-button";
  button.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.99482 0H8.30485C10.2299 0 10.9999 0.77001 10.9999 2.69504V5.00507C10.9999 6.90259 10.2464 7.6726 8.38735 7.6946V5.99508C8.38735 3.68505 7.31484 2.61253 5.0048 2.61253H3.30527C3.32727 0.75351 4.09727 0 5.99482 0ZM7.7001 8.30496V5.99493C7.7001 4.0699 6.93009 3.29989 5.00507 3.29989H2.69504C0.77001 3.29989 0 4.0699 0 5.99493V8.30496C0 10.23 0.77001 11 2.69504 11H5.00507C6.93009 11 7.7001 10.23 7.7001 8.30496Z" fill="#A3A3A3"/></svg>';
  highlightDiv.appendChild(button);
}
document.querySelectorAll(".copy-button-holder")
  .forEach(highlightDiv => createCopyButton(highlightDiv));
