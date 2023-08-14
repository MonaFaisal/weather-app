// Today variables 
let todayName = document.getElementsByClassName("today_date")
let todayNumber = document.getElementsByClassName("today")
let todayLocation = document.getElementById("location")
let todayTemp = document.getElementById("today_temp")
let todayConditionImg = document.getElementById("today_img")
let todayConditionText = document.getElementById("today_text")

// search input 
let searchInput = document.getElementById("search")
let allItems = [];


// call API
var myHttp = new XMLHttpRequest ();
myHttp.open('GET' , `http://api.weatherapi.com/v1/search.json?key=3005689ed41e466abb443219231208&q=lond`)
myHttp.send();
myHttp.addEventListener('readystatechange', function( ){
    if (myHttp.readyState == 4){
        console.log(myHttp.response);
    }
})

// display data













