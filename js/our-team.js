sahajModal = document.getElementById('sahaj');
nikhilModal = document.getElementById('nikhil');
rishabhModal = document.getElementById('rishabh');
kavyaModal = document.getElementById('kavya');
sakshiModal = document.getElementById('sakshi');
navyaModal = document.getElementById('navya');
nikitaModal = document.getElementById('nikita');
divyaModal = document.getElementById('divya');

function sahaj() {
    sahajModal.classList.add("show");
    document.querySelector("body").style.overflow = 'hidden';
}
function nikhil(){
    nikhilModal.classList.add("show");
    document.querySelector("body").style.overflow = 'hidden';
}
function rishabh() {
    rishabhModal.classList.add("show");
    document.querySelector("body").style.overflow = 'hidden';
}
function kavya(){
    kavyaModal.classList.add("show");
    document.querySelector("body").style.overflow = 'hidden';
}
function sakshi() {
    sakshiModal.classList.add("show");
    document.querySelector("body").style.overflow = 'hidden';
}
function navya(){
    navyaModal.classList.add("show");
    document.querySelector("body").style.overflow = 'hidden';
}
function nikita() {
    nikitaModal.classList.add("show");
    document.querySelector("body").style.overflow = 'hidden';
}
function divya(){
    divyaModal.classList.add("show");
    document.querySelector("body").style.overflow = 'hidden';
}
function closeModal(){
    sahajModal.classList.remove("show");
    nikhilModal.classList.remove("show");
    rishabhModal.classList.remove("show");
    kavyaModal.classList.remove("show");
    navyaModal.classList.remove("show");
    sakshiModal.classList.remove("show");
    nikitaModal.classList.remove("show");
    divyaModal.classList.remove("show");
    console.log("closed");
    document.querySelector("body").style.overflow = 'visible';
}

$(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
        sahajModal.classList.remove("show");
        nikhilModal.classList.remove("show");
        rishabhModal.classList.remove("show");
        kavyaModal.classList.remove("show");
        navyaModal.classList.remove("show");
        sakshiModal.classList.remove("show");
        nikitaModal.classList.remove("show");
        divyaModal.classList.remove("show");
        console.log("closed");
        document.querySelector("body").style.overflow = 'visible';
        
    }
  });