var headline = document.querySelector("#headline");
var text = document.querySelector("#text");
var button = document.querySelector("button");

//wrap request in event listener
button.addEventListener("click", function () {
    var XHR = new XMLHttpRequest();
    //this function will run whenever the readystate changes (5)
    XHR.onreadystatechange = function () {
        console.log("Ready State is..." + XHR.readyState)
        // check if the request is done
        if (XHR.readyState == 4) {
            //check that it request was successful
            if (XHR.status = 200) {
                console.log(XHR.responseText);
                text.textContent = XHR.responseText
            } else {
                console.log("There was a problem with the request");
            }
        }
    }


    XHR.open("GET", "https://api.github.com/zen")
    XHR.send();

})




