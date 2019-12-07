var getId=document.getElementById("mytext");
var getSize=document.getElementById("size");
var getfontfam=document.getElementById("fontfam");

function makeBold() {    
if (getId.style.fontWeight=="bold"){

    getId.style.fontWeight="normal";
}
else {
    getId.style.fontWeight="bold";
}}


function makeItalic() {   
if (getId.style.fontStyle=="italic"){

    getId.style.fontStyle="normal";
}
else {
getId.style.fontStyle="italic";
}}

function makeUnderline() {   
if (getId.style.textDecoration=="underline"){

    getId.style.textDecoration="";
}
else {
getId.style.textDecoration="underline";
}}

function changeSize() {
    getId.style.fontSize=getSize.value;
}
function changefontfam() {
    getId.style.fontFamily=getfontfam.value;
}



$(document).ready(function(){
    $(".buttbd").hide();
});

  $(".cours1").mouseenter(function(){
        $("#unc").toggle();
    }); 
    $(".cours2").mouseenter(function(){
        $("#deuxc").toggle();
    }); 
    $(".cours3").mouseenter(function(){
        $("#troisc").toggle();
    }); 
    $(".cours4").mouseenter(function(){
        $("#quatrec").toggle();
    });  
    $(".cours5").mouseenter(function(){
        $("#cinqc").toggle();
    }); 
    $(".cours6").mouseenter(function(){
        $("#sixc").toggle();
    });  
    $(".cours7").mouseenter(function(){
        $("#septc").toggle();
    });
    $(".cours8").mouseenter(function(){
        $("#huitc").toggle();
    });
    $(".cours9").mouseenter(function(){
        $("#neufc").toggle();
    });
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBogEQoDTjRk7sJ7_3mqFpHWIpJXrO2XjU",
    authDomain: "iproject-9808a.firebaseapp.com",
    databaseURL: "https://iproject-9808a.firebaseio.com",
    projectId: "iproject-9808a",
    storageBucket: "iproject-9808a.appspot.com",
    messagingSenderId: "104931260850",
    appId: "1:104931260850:web:a2cd8b02b83f299b09ccab",
    measurementId: "G-27K7V6170M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 var messageRef=firebase.database().ref('myDatabase');
 
 function submitForm(e){
     e.preventDefault();
//Get value

     var name=document.getElementById('name').value;
     var email=document.getElementById('email').value;
     var choix=document.getElementById('choix').value;
     var phonenumber=document.getElementById('phonenumber').value;
    saveMessage(name,email,choix,phonenumber);
 }
 // sending data to our database

document.getElementById('contactForm').addEventListener('submit',submitForm);

//save message to firebase
function saveMessage (name,email,choix,phonenumber){
    var newMessageRef=messageRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        choix:choix,
        phonenumber:phonenumber,
    });
}