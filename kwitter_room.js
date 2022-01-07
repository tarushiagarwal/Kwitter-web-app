// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDB7RmAZf1lG41wyQmr3zw6zZrfWSs5H38",
      authDomain: "practice-b5497.firebaseapp.com",
      databaseURL: "https://practice-b5497-default-rtdb.firebaseio.com",
      projectId: "practice-b5497",
      storageBucket: "practice-b5497.appspot.com",
      messagingSenderId: "366198490919",
      appId: "1:366198490919:web:e7f5f33abfe44dac5b0b02"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
