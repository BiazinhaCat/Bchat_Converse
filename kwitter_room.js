var firebaseConfig = {
  apiKey: "AIzaSyAyfMUpht4GGRlpZJG8-nyNbKwoZOWwftY",
  authDomain: "bchat-40a77.firebaseapp.com",
  databaseURL: "https://bchat-40a77-default-rtdb.firebaseio.com",
  projectId: "bchat-40a77",
  storageBucket: "bchat-40a77.appspot.com",
  messagingSenderId: "32593042970",
  appId: "1:32593042970:web:923ab4581afb8fe1ae3ba3"
};

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem - Vindo! " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
