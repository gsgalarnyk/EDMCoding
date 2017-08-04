var name = "";
var role = "";
var rate = "";
var startDate = "";
var totalValue = 0;
var person = "";

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

    person = $("<tr>" + "<th>" + name + "</th>" + "<td>" + role + "</td>"
     +  "<td>" + startDate + "</td>" + "<td>" + "</td>" + "<td>" + rate + "</td>"  + "</tr>");
    $("#tableBody").append(person);

});