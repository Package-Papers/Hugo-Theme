document.addEventListener("mousedown", function(e){
    if(e.target.classList.contains("social")) {
        copyToClipboard(e.target.nextSibling.nextSibling.textContent);
    }
});

function copyToClipboard(textToCopy) {
     // Copy the text inside the text field
    navigator.clipboard.writeText(textToCopy);
    console.log(textToCopy);
}