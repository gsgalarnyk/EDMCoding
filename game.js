var name = "";
var role = "";
var rate = "";
var startDate = "";
var totalValue = 0;
var person = "";

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

       database.ref().set({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
      });


    person = $("<tr>" + "<th>" + name + "</th>" + "</tr>");
    $("#tableBody").append(person);

});