var nav = document.getElementById("navigation");
var liCollection = nav.children;
var navHeight = document.getElementsByTagName("nav")[0].getBoundingClientRect().height;


for(let i = 0; i < liCollection.length; i++) {
    var aElement = liCollection[i].firstChild;
    aElement.addEventListener('click', handleScroll);
}

function handleScroll(ev) {
    // hijack normal click behaviour by "preventing the default"
    ev.preventDefault();
    var id = ev.target.hash.substring(1);
    var targetElement = document.getElementById(id);
    var y = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}