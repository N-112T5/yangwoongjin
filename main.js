window.onload = function() {
    const toggleButton = document.querySelector('.toggleButton');
    const menu = document.querySelector('.navBar_menu');

    toggleButton.addEventListener('click', function(){
        menu.classList.toggle('active');
    });

    const linkIntro = document.querySelector('.navBar_link_intro');
    const linkAbout = document.querySelector('.navBar_link_about');
    const linkOther = document.querySelector('.navBar_link_other');

    var intro = document.getElementById("intro");
    var about = document.getElementById("about");
    var other = document.getElementById("other");

    linkIntro.classList.add('on');

    intro.style.display = "flex";
    about.style.display = "none";
    other.style.display = "none";

    linkIntro.addEventListener('click', function() {
        linkIntro.classList.add('on');
        linkAbout.classList.remove('on');
        linkOther.classList.remove('on');
        
        intro.style.display = "flex";
        about.style.display = "none";
        other.style.display = "none";
    });

    linkAbout.addEventListener('click', function() {
        linkIntro.classList.remove('on');
        linkAbout.classList.add('on');
        linkOther.classList.remove('on');

        intro.style.display = "none";
        about.style.display = "flex";
        other.style.display = "none";
    });

    linkOther.addEventListener('click', function() {
        linkIntro.classList.remove('on');
        linkAbout.classList.remove('on');
        linkOther.classList.add('on');

        intro.style.display = "none";
        about.style.display = "none";
        other.style.display = "flex";
    });
}

