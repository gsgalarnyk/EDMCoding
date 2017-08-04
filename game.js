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

<<<<<<< HEAD
       database.ref().set({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
      });


    person = $("<tr>" + "<th>" + name + "</th>" + "</tr>");
=======
    person = $("<tr>" + "<th>" + name + "</th>" + "<td>" + role + "</td>"
     +  "<td>" + startDate + "</td>" + "<td>" + "</td>" + "<td>" + rate + "</td>"  + "</tr>");
>>>>>>> 7b5978d0db2547e841818f08c0ae5df4a0f55827
    $("#tableBody").append(person);

});