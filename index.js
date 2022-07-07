
function comparePass() {
    let pass = document.getElementById('user-pass1').value;
    let pass2 = document.getElementById('user-pass2').value;

    let wrong = document.getElementById("pass2");
    let wrongSpan = wrong.lastElementChild;

    if (pass2 !== "") {
        if (pass !== pass2) {
            if (wrongSpan.childElementCount === 0) {
                const messageElement = document.createElement('p');
                messageElement.style.color = "#ef818e";
                const message = document.createTextNode("Passwords do not match!");
                messageElement.appendChild(message);
                wrongSpan.appendChild(messageElement);
            }
        } else {
            let child = wrongSpan.firstChild;
            wrongSpan.removeChild(child);
        }
    }   
}