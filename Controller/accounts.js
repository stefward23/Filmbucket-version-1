const signIn2 = $("#signIn2");
const signUp2 = $("#signUp2");
const email = $("#email");
const username = $("#username");
const password = $("#password");
const signed_username = $("#signed_username");
const signed_password = $("#signed_password");

const db = firebase.firestore(); // INSTANCE OF OUR DB how we initialise the db

function addUser(em, user, pass) {
  db.collection("Users")
    .add({
      email: em,
      username: user,
      password: pass,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), //Has the timestamp for entry
    })
    .then((docRef) => {
      // docref is the new entry we created

      console.log("document added successfully!", docRef.id); //docRef.id gives the random id of the user that firebase generated
      alert("You have signed up");
    })
    .catch((error) => console.log("error while adding to document", error));
}

signUp2.click(function () {
  if (email.val() && password.val() && username.val()) {
    //On click if value is inputted then allow adding
    addUser(email.val(), username.val(), password.val());
  } else {
    alert("Please input all three username, password and email");
  }
  getUsers();
});

var check_username;
var check_password;

function getUsers() {
  //GET data from DB
  db.collection("Users")
    .orderBy("timestamp") //THIS FILTERS DATA BY THE TIMESTAMP FIRST BEFORE GETTING FOR EFFIECIENCY
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log("querySnapshot", querySnapshot);
        console.log("doc.id", doc.id);
        check_username = doc.data().username;
        check_password = doc.data().password;
      });
    });
}

signIn2.click(function () {
  if (
    check_username == signed_username.val() &&
    check_password == signed_password.val()
  ) {
    alert("You are logged in");
  } else {
    alert("Please sign up before signing in");
  }
});

$("#submit").click(function () {
  var selected_value = $("#Selection").find(":selected").text();
  if (selected_value == "Spotlight") {
    window.location.href = "/View/Movie-Tv-show-2.html";
  }
  if (selected_value == "The Fabelmans") {
    window.location.href = "/View/Movie-Tv-show-4.html";
  }
  if (selected_value == "The Spiderman: No way home") {
    window.location.href = "/View/Movie-Tv-show-5.html";
  }
  if (selected_value == "Top Gun: Maverick") {
    window.location.href = "/View/Movie-Tv-show-6.html";
  }
  if (selected_value == "Deadpool 2") {
    window.location.href = "/View/Movie-Tv-show-7.html";
  }
  if (selected_value == "Hamilton") {
    window.location.href = "/View/Movie-Tv-show-8.html";
  }
  if (selected_value == "Joker") {
    window.location.href = "/View/Movie-Tv-show-9.html";
  }
  if (selected_value == "Parasite") {
    window.location.href = "/View/Movie-Tv-show-10.html";
  }
  if (selected_value == "Wolf of Wall Street") {
    window.location.href = "/View/Movie-Tv-show-11.html";
  }
  if (selected_value == "Top Story 3") {
    window.location.href = "/View/Movie-Tv-show-12.html";
  }
  if (selected_value == "Interstellar") {
    window.location.href = "/View/Movie-Tv-show-13.html";
  }
  if (selected_value == "Lee Jung-jae") {
    window.location.href = "/View/actor-2.html";
  }
  if (selected_value == "Jason Sudeikis") {
    window.location.href = "/View/actor-3.html";
  }
  if (selected_value == "Jean Smart") {
    window.location.href = "/View/actor-4.html";
  }
  if (selected_value == "Michael Keaton") {
    window.location.href = "/View/actor-5.html";
  }
  if (selected_value == "Amanda Seyfried") {
    window.location.href = "/View/actor-6.html";
  }
  if (selected_value == "Debbie Allen") {
    window.location.href = "/View/actor-7.html";
  }
  if (selected_value == "Bradd Pitt") {
    window.location.href = "/View/actor.html";
  }
  if (selected_value == "The Last of Us") {
    window.location.href = "/View/Movie-Tv-show-14.html";
  }
  if (selected_value == "House of the Dragon") {
    window.location.href = "/View/Movie-Tv-show-15.html";
  }
  if (selected_value == "Better Call Saul") {
    window.location.href = "/View/Movie-Tv-show-16.html";
  }
  if (selected_value == "Breaking Bad") {
    window.location.href = "/View/Movie-Tv-show-17.html";
  }
  if (selected_value == "Avatar: The last Airbender") {
    window.location.href = "/View/Movie-Tv-show-18.html";
  }
  if (selected_value == "Chernobyl") {
    window.location.href = "/View/Movie-Tv-show-19.html";
  }
  if (selected_value == "Mandalorian") {
    window.location.href = "/View/Movie-Tv-show-20.html";
  }
  if (selected_value == "The Boys") {
    window.location.href = "/View/Movie-Tv-show-21.html";
  }
  if (selected_value == "Stranger Things 4") {
    window.location.href = "/View/Movie-Tv-show-22.html";
  }
  if (selected_value == "Argo") {
    window.location.href = "/View/Movie-Tv-show-3.html";
  }
  if (selected_value == "Game of Thrones") {
    window.location.href = "/View/Movie-Tv-show.html";
  }
});
const topawards2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt15679400",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt11813216",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards4 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt9114286",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards5 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt6710474",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards6 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt7798604",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

$.ajax(topawards2).done(function (response) {
  $(".pic1").html(`<img id="pic1" src=${response.image.url}></img>`);
});

$.ajax(topawards3).done(function (response) {
  $(".pic2").html(`<img id="pic2" src=${response.image.url}></img>`);
});

$.ajax(topawards4).done(function (response) {
  $(".pic3").html(`<img id="pic3" src=${response.image.url}></img>`);
});

$.ajax(topawards5).done(function (response) {
  $(".pic4").html(`<img id="pic4" src=${response.image.url}></img>`);
});

$.ajax(topawards6).done(function (response) {
  $(".pic5").html(`<img id="pic5" src=${response.image.url}></img>`);
});

//Click requirement for emphasis on menu
var click = 0;
$("#icon-menu").click(function () {
  click++;
  if (click == 1) {
    $(".overlay").css("opacity", "40%");
    $(".overlay").css("transition", "0.4s");
    $(".overlay").css("z-index", "-1");
  } else {
    $(".overlay").css("opacity", "100%");
    $(".overlay").css("transition", "1s");
    $(".overlay").css("z-index", "2");

    click = 0;
  }
});

$("#Icon_account").click(function () {
  window.location.href = "/View/accounts.html";
});
