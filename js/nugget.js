// Testing js connection
console.log("Connected....");
//DOM manipulation
//selecting html elements
const searchBar = document.getElementById('input');
const searchButton = document.getElementById('searchButton');
const coverDiv =document.getElementById('cover');
const displayResult =document.querySelector('.current-verse');
const previousResults =document.querySelector('.previous-verses');


//Log elements we have selected to confirm they are working
// console.log(searchBar);
// console.log(searchButton);

let previouResult = [];
//Search Button event listener
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(clicked)
   //Initialize getVerse, render current verse and previous verse function
    getVerse();
    //getLocalStorage();
   renderCurrentVerse();
   renderPreviousVerses();

});
 
async function getVerse() {
    await fetch(`https://bible-api.com/${searchBar.value}`)
        .then(bibleObj => bibleObj.json())
        .then(versesArr => localStorage.setItem("myVerses",JSON.stringify(versesArr)))
};


//A function to display search result from fetch 
function renderCurrentVerse() {
  let currentVerse =  getLocalStorage();
   //console.log(currentVerse)
   let eachVerse = document.createElement('div')
   
    //set class name
    eachVerse.className = 'verseText';
    //Populate hml using innerHtml
    eachVerse.innerHTML = `
    ${currentVerse.reference}:
    <li>${currentVerse.text}</li>
    `
    //console.log(eachVerse);
    displayResult.append(eachVerse);
   
  };

  function renderPreviousVerses(){
    previousVerses =getLocalStorage();
   // var verseValues = Object.keys(localStorage)
   let prevVerse = document.createElement('div');
   prevVerse.className ='prev'

   
   prevVerse.innerHTML = `
    ${previousVerses.reference}:
    <li>${previousVerses.text}</li>
    `
//    h.forEach(v =>{
    previousResults.appendChild(prevVerse);
//     console.log(v)
//    })
  }

 function getLocalStorage() {
 const data = JSON.parse(localStorage.getItem("myVerses"));
 //console.log(data)
 //if(!data) return;
 console.log(data)
 return  data;
};


const shareVerse =document.querySelector('.shareButton');
shareVerse.addEventListener('click',()=> {
    // to-do
    // Implement Sharing a verse 
    alert("Verse Shared")});

const deleteVerse =document.querySelector('.deleteButton');
deleteVerse.addEventListener('click',()=> {
    getLocalStorage()
    // to-do
    // Implement deleting from 'Previous verses'
    localStorage.removeItem("myVerses")
    alert("Verse Deleted")})

const clearVerse =document.querySelector('.clearButton');
clearVerse.addEventListener('click',()=> {
    getLocalStorage()
    localStorage.clear()
    previouResult.innerHTML=' ';
    alert("Verses Cleared!")})