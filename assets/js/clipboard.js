document.addEventListener("mouseover", function(e){
    if(e.target.id == "social") {
        //copyToClipboard(e.target);
        console.log(e.target.children[1])
    }
});

function copyToClipboard(socialSVG) {
    // Get the text field
    var copyText = socialSVG.firstChild;
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    console.log(copyText);
    console.log(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }