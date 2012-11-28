window.onload = function () {
    //alert("script is working");
}

function formSubmit() {
    var name = document.forms["form1"]["f1name"].value;
    var email = document.forms["form1"]["f1email"].value;
    var wish = document.forms["form1"]["f1wish"].value;
    //alert("name is " + name + " " + email + " " + wish);
    var div = document.getElementById("content")
    var content = document.createTextNode(wish);
    var newdiw = document.createElement("div");
    var p = document.createElement("p");
    p.className = "wishes";
    p.innerHTML = wish;
    newdiw.className = "wish";
    newdiw.appendChild(p);
    div.appendChild(newdiw);
    //return false;
}