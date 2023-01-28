const searchButton = document.querySelector('body a');
const form = document.querySelector('header form');
const section = document.querySelector('section');

let numClick = 0;

searchButton.onclick = searchBar;

function searchBar(){
    numClick += 1;
    if (numClick >= 2){
        numClick = 0;
    }
    section.style.setProperty('transition','.5s')
    if((numClick % 2) != 0){
        section.style.setProperty('transform','translateY(100px)')
        form.style.setProperty('display','block')
    }
    else{
        section.style.setProperty('transform','translateY(-3px)')
        form.style.setProperty('display','none')
    }
    
    }
  