console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Page Loaded Successfully");
};

/* Fee Display */

function showFee() {
    let fee = document.getElementById("eventType").value;

    if(fee !== ""){
        document.getElementById("feeDisplay").innerHTML =
        "Event Fee: ₹" + fee;
    }
}

/* Phone Validation */

function validatePhone() {
    let phone = document.getElementById("phone").value;

    if(phone.length !== 10){
        alert("Enter valid 10 digit phone number");
    }
}

/* Character Count */

function countChars() {
    let text =
    document.getElementById("feedback").value;

    document.getElementById("count").innerHTML =
    text.length;
}

/* Image Enlarge */

function enlarge(img) {
    img.style.width = "250px";
    img.style.height = "250px";
}

/* Video Event */

function videoReady() {
    document.getElementById("videoMsg").innerHTML =
    "Video Ready To Play";
}

/* Form Submission */

document.getElementById("eventForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name =
    this.elements["name"].value;

    document.getElementById("outputMsg").innerHTML =
    "Thank You " + name +
    ", Registration Successful";

});

/* Local Storage */

let eventType =
document.getElementById("eventType");

window.addEventListener("load", () => {

    let saved =
    localStorage.getItem("eventPreference");

    if(saved){
        eventType.value = saved;
    }

});

eventType.addEventListener("change", () => {

    localStorage.setItem(
        "eventPreference",
        eventType.value
    );

});

/* Clear Storage */

function clearPreferences(){

    localStorage.clear();
    sessionStorage.clear();

    alert("Preferences Cleared");
}

/* Geolocation */

function findLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(

            function(position){

                document.getElementById("location")
                .innerHTML =
                "Latitude: "
                + position.coords.latitude +
                "<br>Longitude: "
                + position.coords.longitude;

            },

            function(error){

                alert("Location access denied");

            },

            {
                enableHighAccuracy:true,
                timeout:5000
            }
        );
    }
}

/* Objects */

class Event {

    constructor(name,seats){
        this.name = name;
        this.seats = seats;
    }

    checkAvailability(){
        return this.seats > 0;
    }
}

let event1 =
new Event("Music Show",50);

console.log(event1.checkAvailability());

/* Array Methods */

let events = [
    "Music Event",
    "Sports Event",
    "Workshop"
];

events.push("Dance Show");

console.log(events.filter(
    e => e.includes("Music")
));

console.log(events.map(
    e => "Join " + e
));

/* Before Unload */

window.onbeforeunload = function(){

    return "Are you sure you want to leave?";

};