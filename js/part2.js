/* listens for a user to move their mouse off of your page, and
then pops up an alert asking them if they are sure they want to leave. */
document.addEventListener('mouseleave', function () {
    //    alert('hello'); 
});

/* listens for clicks of the button
and adds a new <p> element to the page below the button that includes 
your choice of text copy and a link to a source you used for the content of your page. */
document.getElementById('button1').addEventListener('click', function () {
    var section1 = document.getElementById('section1');
    var newP = document.createElement('p');
    newP.innerHTML = '<a href="https://en.wikipedia.org/wiki/Sandor_Clegane target="_blank">https://en.wikipedia.org/wiki/Sandor_Clegane</a>';
    section1.appendChild(newP);
});

/* listens for a user to move their mouse onto the button and then 
changes the color of the button using JavaScript. */
document.getElementById('button1').addEventListener('mouseover', function () {
    button1.style.backgroundColor = "#B24338";
});

document.getElementById('button1').addEventListener('mouseleave', function () {
    button1.style.backgroundColor = "#ff776a";
});

/* when the user right-clicks on the document, add a new <p> with 
text saying that right-clicking is not allowed */
document.addEventListener('contextmenu', function () {
    var section1 = document.getElementById('section1');
    var newP = document.createElement('p');
    newP.innerHTML = 'Hey! Right-clicking is not allowed here.';
    section1.appendChild(newP);
});

/* when the user double-clicks on the logo, remove all of the content under
section2 and replace them with a new header and image */
document.getElementById('logo').addEventListener('dblclick', function () {
    var section2 = document.getElementById('section2');

    /* remove all of the child objects */
    while (section2.firstChild) {
        section2.removeChild(section2.firstChild);
    }

    /* replace the header */
    var newH2 = document.createElement('h2');
    newH2.innerHTML = "Bring Me One of those Chickens.";
    section2.appendChild(newH2);

    /* add the image */
    var newImg = document.createElement('img');
    newImg.src = "images/chicken.jpg";
    newImg.title = "Chicken";
    newImg.alt = "Chicken";
    section2.appendChild(newImg);
});

