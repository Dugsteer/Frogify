// PREVENT MENU FROM APPEARING ON SMALL SCREENS ON LOAD
const jiggly = document.getElementById('imageCard');
const globo = document.getElementById('balloon');
const easterEgg = new Audio('../sounds/no2.wav');


function removeBalloon(){
  globo.classList.remove('floatMe');
  easterEgg.pause();
}

function balloonMe(){
  globo.classList.add('floatMe');
  easterEgg.play();
  setTimeout(removeBalloon, 5000);
}

//Jiggle the imagecard

setInterval(jiggleMe, 5000);

jiggleMe();
 jiggleYou();

function jiggleMe(){
  setTimeout(jiggleYou, 500);
 
}

function removeJiggle(){
  jiggly.classList.remove('jiggle');
}

function jiggleYou(){
  jiggly.classList.add('jiggle');
  setTimeout(removeJiggle, 2000);
}

// HIDE SIDEBAR ON SCREENS UNDER 800px
const menu = document.getElementById("menu");
const sidey = document.getElementById("conto");
const blue = window.matchMedia("(max-width: 800px)");

function myFunction(x) {
  if (blue.matches) {
    sidey.classList.remove("block");
  }
}

function toggler() {
  sidey.classList.toggle("block");
}



  // LOADER ACTION
const loader = document.getElementById("loaderDiv");

function stopLoader() {
  loader.classList.add("stop");
}

function startLoader(){
  loader.classList.toggle('stop');
}

setTimeout(stopLoader, 2000);

//check for top of window
function checkForTop (){
  loader.style.top = (window.pageYOffset) + "px";
}

checkForTop();

//CONTENT SPECIFIC CODE

const gameboard = document.getElementById('content');
const container = document.getElementById('container');
const answer = document.getElementById('answer');
let green;


const picsArray = ["bat.svg", "bone.svg", "broomstick.svg","candy.svg", "cat.svg", "clown.svg", "frankenstein.svg", "ghost.svg", "monster.svg", "pumpkin.svg", "skeleton.svg", "vampire.svg", "witch.svg", "werewolf.svg", "zombie.svg", "spider.svg"];

function shuffle(array){
    array.sort(() => Math.random() - 0.5);
}

// POPULATE THE CONTENTS GRID WITH PICTURES
function populate(){
    let start = new Array(16 - picsArray.length).fill('frog.png');
    let fruits = picsArray.concat(start);
        gameboard.innerHTML = `<img src="img/${fruits[0]}"><img src="img/${fruits[1]}"><img src="img/${fruits[2]}"><img src="img/${fruits[3]}"><img src="img/${fruits[4]}"><img src="img/${fruits[5]}"><img src="img/${fruits[6]}"><img src="img/${fruits[7]}"><img src="img/${fruits[8]}"><img src="img/${fruits[9]}"><img src="img/${fruits[10]}"><img src="img/${fruits[11]}"><img src="img/${fruits[12]}"><img src="img/${fruits[13]}"><img src="img/${fruits[14]}"><img src="img/${fruits[15]}">`
    }


  // Flash the screen
function flashMe(){
    green= picsArray.shift();
    console.log(green);
    let spell = new Audio('sounds/magic.wav')
    spell.play();
    setTimeout(flash, 500);
    setTimeout(removeOne, 1000);
}

// Reload
function defrogify(){
    let laugh = new Audio('sounds/wand.wav');
    laugh.play();
    setTimeout(reloader, 1000);
}

function reloader(){
    location.reload();
}

function removeOne(){
    
    shuffle(picsArray);
    populate();
    answer.innerHTML = 'What changed?';
    container.classList.remove('blind');
    return green;
}

function flash(){
    container.classList.add('blind');  
}


function showMe(){
   green==="frankenstein.svg" ? answer.innerHTML = `<span class="spanclass">Frankenstein</span>` :  green==="witch.svg" ? answer.innerHTML = ` <span class="spanclass">herself</span> ` : answer.innerHTML = `<span class="spanclass">${green.substring(0, green.length - 4)}</span>`;
}

populate();


















myFunction(blue);