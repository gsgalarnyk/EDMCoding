var name = "";
var role = "";
var rate = "";

var totalValue = 0;
var person = "";
var startDate = "";
var ourFormat = "MM/DD/YYYY";
var finalConvert = moment(startDate, ourFormat);


var config = {
    apiKey: "AIzaSyBk4aeMmuymkDeVoCOq6SLnn7ZYS4ZDo9w",
    authDomain: "emplyee-test.firebaseapp.com",
    databaseURL: "https://emplyee-test.firebaseio.com",
    projectId: "emplyee-test",
    storageBucket: "",
    messagingSenderId: "33842781450"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submitButton").on("click", function(event) {
    event.preventDefault();
    console.log("working");

    name = $("#employeeToAdd").val().trim();
    console.log(name);
    role = $("#roleToAdd").val().trim();
    console.log(role);
    startDate = $("#startDateToAdd").val().trim();
    console.log(startDate);
    rate = $("#rateToAdd").val().trim();
    console.log(rate);


    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
        //dateAdded: firebase.database.ServerValue.TIMESTAMP
    });



});

database.ref().on("child_added", function(snapshot) {

    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().startDate);
    console.log(snapshot.val().rate);

    $("#tableBody").append("<tr><th>" + snapshot.val().name +
        " </th><td>" + snapshot.val().role +
        " </td><td>" + snapshot.val().startDate + "</td><td>" 
        + moment().diff(moment(snapshot.val().startDate , "MM/DD/YYYY"), "months") +
        " </td><td> " + snapshot.val().rate + " </td></tr>");

});
console.log("----------------------")


moment().diff(moment(finalConvert), "months");