var elem = document.getElementById("app");
var container = document.createElement("div");
container.setAttribute('class', 'container');
elem.appendChild(container)

for (var i=0; i<3; i++) {

    var div = document.createElement("div");
    // div.appendChild(document.createTextNode(i));
    container.appendChild(div);

    var img = document.createElement("img");
    img.setAttribute('src', 'img/' + i.toString() + ".png");
    // img.setAttribute('height', div.getAttribute('height'));
    div.appendChild(img);


}

function fileListDirectory(files) {
    console.log(files.length);
    for (i=0; i<files.length; i++) {
        console.log(files[i].name);
    }
}



