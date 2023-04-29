const answer1 = $("#answer1");
const answer3 = $("#answer3");
const submitbtn = $("#submitbtn");

const db = firebase.firestore(); // INSTANCE OF OUR DB how we initialise the db

function addAnswer(a1, a3) {
  db.collection("Answers")
    .add({
      answer1: a1,
      answer3: a3,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), //Has the timestamp for entry
    })
    .then((docRef) => {
      // docref is the new entry we created

      console.log("document added successfully!", docRef.id); //docRef.id gives the random id of the user that firebase generated
      alert(
        "You answers have been stored into our database. Thank you for playing!"
      );
    })
    .catch((error) => console.log("error while adding to document", error));
}

submitbtn.click(function () {
  if (answer1.val() && answer3.val()) {
    //On click if value is inputted then allow adding
    addAnswer(answer1.val(), answer3.val());
    alert(
      "Your answers have been stored in our database. Thank you for playing!"
    );
    setTimeout(() => {
      window.location.href = "/View/trivia-thanks.html";
    }, 3000);
  } else {
    alert("Please answer all the questions");
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
